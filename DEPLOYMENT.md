# Deployment-Anleitung – GeoHilfe

## 🚀 Website bauen und veröffentlichen unter oliver-jaeger.de/geo

---

## Schritt 1: Installation

**Voraussetzung:** Node.js 18+ installiert

```bash
# Im Projekt-Verzeichnis:
npm install
```

Das installiert Astro und alle Dependencies.

---

## Schritt 2: Lokal testen

```bash
npm run dev
```

Die Website läuft dann unter: **http://localhost:4321/geo**

**Wichtig:** Die `/geo` Base-Path ist bereits konfiguriert in `astro.config.mjs`!

---

## Schritt 3: Website bauen

```bash
npm run build
```

Das erstellt die fertige Website im Ordner: **`dist/`**

Alle Dateien sind statisch (HTML, CSS, JS) – kein Server nötig!

---

## Schritt 4: Bilder herunterladen (optional)

Siehe **`BILDER-DOWNLOAD.md`** für die komplette Liste.

**Bilder ablegen in:**
```
public/images/stadtgeographie/
public/images/bevoelkerung/
public/images/boden/
public/images/geomorphologie/
public/images/oekozonen/
public/images/hydrologie/
public/images/sphaeren-der-erde/
```

**Tipp:** Du kannst die Bilder auch später nach und nach ergänzen!

---

## Schritt 5: Upload zu oliver-jaeger.de

### Option A: FTP/SFTP Upload

1. Baue die Website: `npm run build`
2. Lade den Inhalt von `dist/` hoch nach:
   ```
   /var/www/oliver-jaeger.de/geo/
   ```
   (oder wo immer dein Webserver die Dateien erwartet)

**Wichtig:** Lade den **Inhalt** von `dist/`, nicht den Ordner selbst!

### Option B: rsync (empfohlen für Server)

```bash
# Nach dem Build:
rsync -avz --delete dist/ user@oliver-jaeger.de:/var/www/oliver-jaeger.de/geo/
```

### Option C: Git + Auto-Deployment

Wenn du ein Deployment-Tool nutzt (z.B. Netlify, Vercel, GitHub Pages):

**`.github/workflows/deploy.yml` (GitHub Actions):**
```yaml
name: Deploy to Server

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - name: Deploy via rsync
        uses: burnett01/rsync-deployments@5.2
        with:
          switches: -avzr --delete
          path: dist/
          remote_path: /var/www/oliver-jaeger.de/geo/
          remote_host: ${{ secrets.HOST }}
          remote_user: ${{ secrets.USER }}
          remote_key: ${{ secrets.SSH_KEY }}
```

---

## Webserver-Konfiguration

### Apache (.htaccess)

Wenn du Apache nutzt, lege eine `.htaccess` in `/var/www/oliver-jaeger.de/geo/` ab:

```apache
# Aktiviere Kompression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Browser-Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Clean URLs (falls nötig)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /geo/$1 [L]
```

### Nginx

In deiner Nginx-Konfiguration:

```nginx
location /geo/ {
    alias /var/www/oliver-jaeger.de/geo/;
    try_files $uri $uri/ =404;

    # Browser-Caching
    location ~* \.(jpg|jpeg|png|gif|svg|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Kompression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

---

## Automatisches Build & Deploy

**Meine Empfehlung:** Nutze ein CI/CD-Tool!

### Netlify (kostenlos, einfach)

1. Verbinde dein Git-Repository mit Netlify
2. Build-Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (leer lassen)

3. In `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

4. Netlify baut automatisch bei jedem Push!

**Eigene Domain verbinden:** In Netlify-Settings → Domain Management

### Vercel (Alternative)

Genau wie Netlify, aber von den Next.js-Machern:

```bash
npx vercel
```

Folge den Prompts → Fertig!

---

## Updates veröffentlichen

### Lokale Änderungen deployen:

```bash
# 1. Änderungen machen
# 2. Testen:
npm run dev

# 3. Bauen:
npm run build

# 4. Deployen:
rsync -avz --delete dist/ user@oliver-jaeger.de:/var/www/oliver-jaeger.de/geo/
```

### Via Git:

```bash
git add .
git commit -m "Update Inhalte"
git push
# → Automatisches Deployment (wenn eingerichtet)
```

---

## Performance-Optimierung

### 1. Bilder komprimieren

Bevor du Bilder hochlädst:

```bash
# Mit ImageMagick (Linux/Mac):
convert input.jpg -quality 85 -resize 1200x output.jpg

# Oder online:
# - tinypng.com
# - squoosh.app
```

### 2. Lighthouse-Test

Teste die Performance:

1. Öffne Chrome DevTools (F12)
2. Tab "Lighthouse"
3. Klick "Generate report"

**Ziel:** >90 in allen Kategorien!

### 3. Caching prüfen

Prüfe Browser-Caching:
```bash
curl -I https://oliver-jaeger.de/geo/
```

Schau nach `Cache-Control` und `Expires` Headers.

---

## Troubleshooting

### Problem: Seiten zeigen 404

**Lösung:** Base-Path prüfen in `astro.config.mjs`:
```js
base: '/geo',
```

### Problem: CSS/JS wird nicht geladen

**Lösung:** Pfade in Webserver-Config prüfen. Ggf. absolute Pfade nutzen.

### Problem: Bilder werden nicht angezeigt

**Lösung:**
1. Bilder im richtigen Ordner? (`public/images/...`)
2. Dateinamen exakt wie in Markdown?
3. Groß-/Kleinschreibung beachten (Linux-Server!)

### Problem: Slow Performance

**Lösungen:**
- Bilder komprimieren
- Browser-Caching aktivieren
- CDN nutzen (Cloudflare)
- Gzip/Brotli-Kompression aktivieren

---

## Sicherheit

### 1. HTTPS erzwingen

Apache `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Nginx:
```nginx
if ($scheme != "https") {
    return 301 https://$server_name$request_uri;
}
```

### 2. Security Headers

Apache:
```apache
Header always set X-Frame-Options "DENY"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
```

Nginx:
```nginx
add_header X-Frame-Options "DENY";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
```

---

## Monitoring

### 1. Uptime-Monitoring

Kostenlose Tools:
- UptimeRobot (uptimerobot.com)
- Pingdom (free tier)

### 2. Analytics

**Datenschutzfreundlich:**
- Plausible Analytics
- Matomo (selbst gehostet)
- Simple Analytics

**Einbinden in `Layout.astro`:**
```html
<!-- Vor </head> -->
<script defer data-domain="oliver-jaeger.de" src="https://plausible.io/js/script.js"></script>
```

---

## Checkliste vor Go-Live

- [ ] `npm run build` läuft ohne Fehler
- [ ] Alle Links funktionieren (intern und extern)
- [ ] Bilder werden angezeigt (oder Platzhalter OK)
- [ ] Navigation funktioniert
- [ ] Mobile Ansicht getestet
- [ ] HTTPS aktiviert
- [ ] Browser-Caching eingerichtet
- [ ] Lighthouse-Score >85
- [ ] 404-Seite vorhanden (optional)
- [ ] Impressum/Datenschutz verlinkt
- [ ] Backup des `dist/` Ordners gemacht

---

## Support

**Bei Problemen:**
1. Prüfe Browser-Konsole (F12 → Console)
2. Prüfe Server-Logs
3. Teste lokal mit `npm run dev`

**Weitere Hilfe:**
- Astro Docs: https://docs.astro.build/
- Astro Discord: https://astro.build/chat

---

**Viel Erfolg mit dem Deployment! 🚀**
