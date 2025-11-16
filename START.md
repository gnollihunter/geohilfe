# ⚡ Quick Start – GeoHilfe

## Los geht's in 3 Schritten!

### 1️⃣ Installieren

```bash
npm install
```

### 2️⃣ Lokal testen

```bash
npm run dev
```

Öffne: **http://localhost:4321/geo**

### 3️⃣ Für Produktion bauen

```bash
npm run build
```

Fertige Website in: `dist/`

---

## Was jetzt?

### Bilder herunterladen

Siehe **`BILDER-DOWNLOAD.md`** für die komplette Liste (52 Bilder).

**Ablageort:**
```
public/images/stadtgeographie/
public/images/bevoelkerung/
public/images/boden/
public/images/geomorphologie/
public/images/oekozonen/
public/images/hydrologie/
public/images/sphaeren-der-erde/
```

### Deployen

Siehe **`DEPLOYMENT.md`** für:
- Upload zu oliver-jaeger.de/geo
- Webserver-Konfiguration
- Automatisches Deployment
- Performance-Tipps

---

## Projektstruktur

```
geohilfe/
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Hauptlayout mit Navigation
│   └── pages/
│       ├── index.astro         # Startseite
│       ├── stadtgeographie.md  # Kategorie-Seiten
│       ├── bevoelkerung.md
│       ├── boden.md
│       ├── geomorphologie.md
│       ├── oekozonen.md
│       ├── hydrologie.md
│       └── sphaeren.md
├── public/
│   ├── favicon.svg
│   └── images/                 # Hier Bilder ablegen
├── content/                    # Original-Markdown (Backup)
├── astro.config.mjs            # Astro-Konfiguration
├── package.json
├── BILDER-DOWNLOAD.md          # Bilderliste
├── DEPLOYMENT.md               # Deployment-Anleitung
├── README.md                   # Projekt-Dokumentation
└── START.md                    # Diese Datei
```

---

## Befehle

```bash
npm run dev       # Entwicklungsserver starten
npm run build     # Produktions-Build erstellen
npm run preview   # Build-Vorschau lokal testen
```

---

## Konfiguration

### Base-Path ändern

In `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://oliver-jaeger.de',
  base: '/geo',  // ← Hier anpassen
});
```

### Farben anpassen

In `src/layouts/Layout.astro` → `<style is:global>`:

```css
:root {
  --primary: #2563eb;       /* Hauptfarbe */
  --primary-dark: #1e40af;  /* Hover-Farbe */
  --text: #1f2937;          /* Textfarbe */
  /* ... */
}
```

---

## Content bearbeiten

### Neue Seite hinzufügen

1. Erstelle `src/pages/neue-seite.md`
2. Füge Frontmatter hinzu:

```markdown
---
layout: ../layouts/Layout.astro
title: Neue Seite
description: Beschreibung
---

# Überschrift

Inhalt...
```

3. Link in Navigation einfügen (`src/layouts/Layout.astro`):

```html
<li><a href={`${base}/neue-seite`}>Neue Seite</a></li>
```

### Bestehende Seite bearbeiten

Öffne `src/pages/[kategorie].md` und bearbeite den Markdown-Text.

---

## Hilfe & Support

**Dokumentation:**
- Astro: https://docs.astro.build/
- Markdown: https://www.markdownguide.org/

**Bei Problemen:**
1. Prüfe Browser-Konsole (F12)
2. Prüfe Terminal-Ausgabe
3. `npm run dev` neu starten

---

## Nächste Schritte

- [ ] `npm install` ausführen
- [ ] Lokal testen mit `npm run dev`
- [ ] Bilder herunterladen (siehe BILDER-DOWNLOAD.md)
- [ ] Build erstellen mit `npm run build`
- [ ] Deployen (siehe DEPLOYMENT.md)

---

**Viel Erfolg! 🚀**
