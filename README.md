# GeoHilfe – Geographie digital

Professionelle Lern- und Wissensplattform für Geographie mit aktuellen wissenschaftlichen Inhalten und umfassenden Literaturverweisen.

## Über GeoHilfe

GeoHilfe bietet fundierte, wissenschaftlich aktuelle Inhalte zu allen wichtigen Teilgebieten der Geographie. Alle Artikel sind:

- **Wissenschaftlich fundiert** mit aktueller Forschungsliteratur (2020+)
- **Verlinkt** mit Studien, Datenportalen und didaktischen Ressourcen
- **Strukturiert** nach akademischen Standards
- **Aktuell** mit Bezug zu aktuellen Herausforderungen (Klimawandel, Urbanisierung, etc.)
- **Bildbasiert** mit Verweisen auf CC-freie Bilder (Wikimedia Commons, NASA, USGS)

## Inhaltsverzeichnis

### 📍 [Stadtgeographie](content/stadtgeographie/index.md)
- Forschungsrichtungen der Stadtgeographie (morphogenetisch, funktional, sozialgeographisch, etc.)
- Global Cities und Urbanisierung
- Stadtentwicklung und aktuelle Herausforderungen
- Gentrifizierung, Smart Cities, Klimaanpassung

**Themen:** Stadtstrukturen, Siedlungsgeographie, urbane Transformationen

### 👥 [Bevölkerungsgeographie](content/bevoelkerung/index.md)
- Räumliche Bevölkerungsverteilung und -dynamik
- Demographischer Übergang und Wandel
- Migration und Mobilitätsforschung
- Bevölkerungsprognosen und -strukturen

**Themen:** Demographie, Migration, Bevölkerungsentwicklung

### 🌱 [Bodengeographie](content/boden/index.md)
- Bodenbildende Faktoren und Prozesse
- Bodentypen und ihre Verbreitung
- Bodendegradation und Bodenschutz
- Böden als Kohlenstoffspeicher im Klimawandel

**Themen:** Pedologie, Bodentypen, Bodenfruchtbarkeit, Bodenschutz

### 🏔️ [Geomorphologie](content/geomorphologie/index.md)
- Endogene und exogene Prozesse
- Glaziale, fluviale, äolische, litorale Formung
- Periglaziale Prozesse und Permafrost
- Karstformung und Massenbewegungen
- Geomorphologie im Anthropozän

**Themen:** Landformen, Prozesse, Relief, Naturgefahren

### 🌍 [Ökozonen nach Schultz](content/oekozonen/index.md)
- Die 9 Ökozonen der Erde im Detail
- Klima, Vegetation, Böden, Morphodynamik
- Von polaren Zonen bis zu tropischen Regenwäldern
- Aktuelle Forschung zu Klimawandel und Ökosystem-Verschiebungen

**Themen:** Zonale Gliederung, Klima-Vegetation-Boden, Biogeographie

### 💧 [Hydrologie](content/hydrologie/index.md)
- Wasserkreislauf und Wasserbilanz
- Abfluss, Abflussregime und Einzugsgebiete
- Grundwasser und Oberflächengewässer
- Wasserknappheit und Wassermanagement
- Virtuelles Wasser und Water Footprint

**Themen:** Wasser, Flüsse, Seen, Grundwasser, Wasserressourcen

### 🌐 [Sphären der Erde](content/sphaeren-der-erde/index.md) **✨ NEU**
- Das Erdsystem und seine Komponenten
- Atmosphäre, Hydrosphäre, Lithosphäre, Pedosphäre
- Biosphäre, Anthroposphäre, Kryosphäre
- Stoffkreisläufe (Kohlenstoff, Stickstoff, Wasser)
- Planetare Grenzen und Anthropozän

**Themen:** Systemgeographie, Kreisläufe, Erdsystem-Wissenschaft

## Besondere Features

### 🔗 Aktuelle Forschungslinks

Jeder Artikel enthält Links zu:
- **Wissenschaftlichen Studien** (mit DOI)
- **Datenportalen** (UN, NASA, Eurostat, etc.)
- **Forschungsinstitutionen** (Max-Planck, IPCC, FAO, etc.)
- **Interaktiven Tools** (Karten, Visualisierungen, Simulationen)

### 📚 Didaktische Ressourcen

Für den Unterricht:
- Bundeszentrale für politische Bildung (bpb)
- Planet Schule
- Diercke
- Our World in Data
- NASA Earth Observatory

### 🖼️ Bildquellen

Alle Bilder sind referenziert mit:
- **Originalen Dateinamen** (direkt downloadbar)
- **Quell-URLs** (Wikimedia Commons, NASA, USGS)
- **Lizenzen** (CC-BY-SA, Public Domain)

Bildordner: `public/images/[kategorie]/`

## Struktur

```
geohilfe/
├── content/
│   ├── stadtgeographie/
│   │   └── index.md
│   ├── bevoelkerung/
│   │   └── index.md
│   ├── boden/
│   │   └── index.md
│   ├── geomorphologie/
│   │   └── index.md
│   ├── oekozonen/
│   │   └── index.md
│   ├── hydrologie/
│   │   └── index.md
│   └── sphaeren-der-erde/
│       └── index.md
├── public/
│   └── images/
│       ├── stadtgeographie/
│       ├── bevoelkerung/
│       ├── boden/
│       ├── geomorphologie/
│       ├── oekozonen/
│       ├── hydrologie/
│       └── sphaeren-der-erde/
└── README.md
```

## Nächste Schritte

### Bilder herunterladen

Alle Bildverweise sind in den Markdown-Dateien als Kommentare enthalten:

```markdown
<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Example.jpg -->
![Bildbeschreibung](example.jpg)
```

1. Öffne die Quell-URL
2. Lade das Bild herunter (nutze den angegebenen Dateinamen)
3. Lege es im entsprechenden Ordner ab: `public/images/[kategorie]/`

### Website-Technologie wählen

**Empfohlene Optionen:**

**Option 1: Astro** (Modern, schnell, SEO-optimal)
```bash
npm create astro@latest
```
- Sehr schnell (Static Site Generation)
- Markdown-native
- Perfekt für Content-fokussierte Seiten
- Einfach zu deployen (Netlify, Vercel)

**Option 2: Next.js** (React-basiert, flexibel)
```bash
npx create-next-app@latest
```
- Großes Ecosystem
- Server-Side Rendering
- Gut für spätere interaktive Features

**Option 3: Hugo** (Schnellste Option)
```bash
brew install hugo  # oder apt-get install hugo
hugo new site geohilfe
```
- Extrem schnell
- Keine JavaScript-Abhängigkeiten
- Einfaches Deployment

### Content erweitern

**Aktuell vorhanden:** Hauptübersichtsseiten

**Nächste Schritte:**
- Detailseiten zu einzelnen Themen erstellen (z.B. "Alterspyramiden", "Glaziale Serie", etc.)
- Fallstudien hinzufügen
- Interaktive Karten einbinden
- Quiz und Übungen (später)

### Deployment

**Kostenlose Hosting-Optionen:**
- **Netlify** – [netlify.com](https://www.netlify.com/) (empfohlen)
- **Vercel** – [vercel.com](https://vercel.com/)
- **GitHub Pages** – [pages.github.com](https://pages.github.com/)
- **Cloudflare Pages** – [pages.cloudflare.com](https://pages.cloudflare.com/)

Alle unterstützen:
- Automatisches Deployment bei Git-Push
- Kostenloses SSL/HTTPS
- Eigene Domain
- Sehr gute Performance

## Verwendete Standards

- **Markdown:** CommonMark-Standard
- **Zitationsstil:** Autor (Jahr) – akademischer Standard
- **Bildlizenzen:** CC-BY, CC-BY-SA, Public Domain
- **Externe Links:** Bevorzugt stabile URLs (DOI, Institutions-Websites)

## Literaturstandards

**Wissenschaftliche Artikel:**
- DOI-Links wo verfügbar
- Vollständige Zitation (Autor, Jahr, Titel, Journal, DOI)

**Institutionelle Quellen:**
- UN, IPCC, FAO, NASA, USGS, etc.
- Aktuelle Reports (2020+)

**Datenportale:**
- Our World in Data
- Eurostat
- UNEP
- World Bank Data

## Aktualisierung

**Content sollte regelmäßig aktualisiert werden:**
- Neue IPCC-Berichte
- UN-Statistiken (jährlich)
- Aktuelle Forschung aus Top-Journals
- Neue Datenvisualisierungen

**Wichtige Quellen für Updates:**
- [Nature](https://www.nature.com/)
- [Science](https://www.science.org/)
- [PNAS](https://www.pnas.org/)
- [IPCC Reports](https://www.ipcc.ch/)
- [Our World in Data](https://ourworldindata.org/)

## Lizenz

**Inhalte:** Eigene Texte (bitte Lizenz festlegen, z.B. CC-BY-SA 4.0)

**Bilder:** Verschiedene (siehe Kommentare in Markdown-Dateien)
- Wikimedia Commons: Meist CC-BY-SA
- NASA/USGS: Public Domain
- Immer Quellen-Attribution beachten!

## Kontakt & Weiterentwicklung

**Geplante Features:**
- Suchfunktion
- Glossar
- Interaktive Karten
- Quiz und Selbsttests
- Newsletter
- Dark Mode
- Mehrsprachigkeit (Englisch)

## Changelog

**Version 1.0 (2025-11-16)**
- ✅ Initiale Content-Struktur
- ✅ 7 Hauptkategorien erstellt
- ✅ Wissenschaftliche Literaturverweise
- ✅ CC-freie Bildquellen referenziert
- ✅ Aktuelle Forschungslinks integriert
- ✅ Didaktische Ressourcen hinzugefügt

---

**GeoHilfe** – Geographie verstehen. Wissen vertiefen. Zukunft gestalten.

© GeoHilfe.de 2025
