---
layout: ../../layouts/Layout.astro
title: Grundwasser und Aquifere
description: Grundwasserspeicher, Hydrogeologie, Nutzung und Gefährdung
---

# Grundwasser und Aquifere

## Definition

**Grundwasser** ist unterirdisches Wasser, das die Hohlräume der Lithosphäre (Poren, Klüfte, Karst) **zusammenhängend ausfüllt** und dessen Bewegung ausschließlich oder nahezu ausschließlich von der Schwerkraft und den durch die Bewegung selbst ausgelösten Reibungskräften bestimmt wird (DIN 4049).

**Aquifer** (Grundwasserleiter) ist ein Gesteinskörper mit Hohlräumen, der zur Speicherung und Leitung von Grundwasser geeignet ist.

**Bedeutung:**
- Wichtigste Süßwasserressource (ca. 30% der globalen Süßwasservorkommen)
- Trinkwasserversorgung: Deutschland 70%, weltweit ca. 50%
- Bewässerung in ariden Regionen
- Industriewasser

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Groundwater_aquifer.svg -->
![Grundwassersystem](groundwater_aquifer.svg)
*Schematischer Aufbau eines Grundwassersystems – Quelle: USGS, Wikimedia Commons (Public Domain)*

## Hydrologischer Kreislauf und Grundwasser

### Grundwasserneubildung

**Prozess:**
1. **Niederschlag** auf Landoberfläche
2. **Infiltration** in den Boden
3. **Perkolation** durch ungesättigte Zone (Versickerung)
4. **Anreicherung** im gesättigten Bereich (Grundwasser)

**Wasserbilanz:**
```
Grundwasserneubildung = Niederschlag - Evapotranspiration - Oberflächenabfluss
```

**Faktoren:**
- **Niederschlag**: Menge, Intensität, Dauer
- **Bodenart**: Durchlässigkeit (Sand > Ton)
- **Vegetation**: Interzeption, Transpiration
- **Relief**: Hangneigung
- **Landnutzung**: Versiegelung reduziert Neubildung

**Deutschland:**
- Durchschnittliche Neubildung: 100-150 mm/Jahr
- Regional: 20-400 mm/Jahr
- Tendenz abnehmend (Klimawandel, Versiegelung)

**Aktuelle Forschung:**
- Gleeson, T. et al. (2020): Illuminating water cycle modifications. *Nature*, 577, 548-549

## Grundwasserzonen

### Vertikale Gliederung

**1. Bodenzone (0-1 m):**
- Wurzelzone
- Kapillares Wasser
- Starke Schwankungen

**2. Ungesättigte Zone (Vadose Zone):**
- Poren teilweise luftgefüllt
- Kapillarwasser, Haftwasser
- Perkolation Richtung Grundwasser
- Mächtigkeit: cm bis >100 m

**3. Kapillarsaum:**
- Über Grundwasserspiegel
- Kapillarkräfte heben Wasser
- Höhe abhängig von Korngrößte (Ton: >1 m, Sand: <30 cm)

**4. Gesättigte Zone (Grundwasser):**
- Alle Poren wassergesättigt
- Grundwasserspiegel = Oberfläche

### Grundwassertypen

**Nach Druckverhältnissen:**

**Freies (ungespanntes) Grundwasser:**
- Grundwasserspiegel = freie Oberfläche
- Atmosphärischer Druck
- Häufigster Typ

**Gespanntes Grundwasser:**
- Zwischen zwei Grundwasserstauern
- Unter Druck
- Steigt in Brunnen über Aquifer-Obergrenze (artesisch)

**Schwebendes Grundwasser:**
- Isolierter Wasserkörper über Grundwasserspiegel
- Auf lokaler undurchlässiger Schicht (Staukörper)
- Temporär

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Types_of_aquifers.svg -->
![Aquifer-Typen](types_of_aquifers.svg)
*Ungespannte und gespannte Aquifere – Quelle: Wikimedia Commons (CC BY-SA)*

## Aquifer-Typen

### Nach Hohlraumtyp

**1. Porengrundwasserleiter (Porous Media Aquifer):**
- Hohlräume: Poren zwischen Körnern
- **Materialien**: Sand, Kies, Sandstein
- **Eigenschaften**:
  - Hohe Speicherkapazität
  - Gleichmäßige Strömung
  - Gute Filterwirkung
- **Beispiele**:
  - Norddeutsches Tiefland (glaziale Sande)
  - Oberrheingraben
  - High Plains Aquifer (USA, Ogallala)

**2. Kluftgrundwasserleiter (Fractured Rock Aquifer):**
- Hohlräume: Klüfte, Spalten, Störungen
- **Materialien**: Festgestein (Granit, Gneis, Basalt)
- **Eigenschaften**:
  - Geringe Speicherung
  - Bevorzugte Fließwege
  - Anisotrop (richtungsabhängig)
- **Beispiele**:
  - Kristalline Grundgebirge (Schwarzwald, Bayerischer Wald)
  - Basalt-Aquifere (Island, Hawaii)

**3. Karstgrundwasserleiter (Karst Aquifer):**
- Hohlräume: Lösungshohlräume, Höhlen
- **Materialien**: Kalkstein, Dolomit, Gips
- **Eigenschaften**:
  - Sehr große Hohlräume
  - Sehr schnelle Strömung (km/Tag!)
  - Geringe Filterwirkung (Verschmutzungsgefahr)
  - Karstquellen
- **Beispiele**:
  - Schwäbische Alb, Fränkischer Jura
  - Dinarischer Karst (Slowenien, Kroatien)
  - Florida Aquifer (USA)

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Karst_aquifer.svg -->
![Karstgrundwasser](karst_aquifer.svg)
*Karstgrundwasserleiter mit schneller Fließbewegung – Quelle: Wikimedia Commons (CC BY-SA)*

### Nach hydraulischen Eigenschaften

**Eigenschaften von Aquiferen:**

**Porosität (n):**
- Hohlraumanteil (%)
- n = V<sub>Poren</sub> / V<sub>gesamt</sub>
- Kies: 25-40%, Sand: 30-50%, Sandstein: 10-30%, Ton: 40-60%

**Effektive Porosität (n<sub>e</sub>):**
- Durchflusswirksamer Hohlraumanteil
- Niedriger als Gesamt-Porosität (Haftwasser nicht mobil)

**Permeabilität / Durchlässigkeit (k):**
- Wasserleitfähigkeit
- **Darcy-Gesetz**: Q = k × A × (Δh / Δl)
- Einheit: m/s
- Kies: 10⁻² m/s, Sand: 10⁻⁴ m/s, Ton: <10⁻⁹ m/s

**Transmissivität (T):**
- T = k × Mächtigkeit des Aquifers
- Gesamtdurchlässigkeit

**Speicherkoeffizient (S):**
- Wassermenge pro Flächeneinheit bei 1 m Absenkung
- Frei: 0,01-0,30 (10-30%)
- Gespannt: 10⁻⁵-10⁻³ (<1%)

## Grundwasserströmung

### Darcy-Gesetz (1856)

**Grundgleichung:**
```
Q = -k × A × (dh/dl)
```

- Q = Durchfluss (m³/s)
- k = Durchlässigkeit (m/s)
- A = Querschnittsfläche (m²)
- dh/dl = hydraulischer Gradient

**Fließgeschwindigkeit:**
- Porengrundwasser: 1-10 m/Tag (sehr langsam!)
- Kluftgrundwasser: 10-100 m/Tag
- Karstgrundwasser: 100-10.000 m/Tag (sehr schnell!)

### Grundwasserfließrichtung

- Von Bereichen mit hohem zu niedrigem hydraulischem Potential
- Darstellung: **Grundwassergleichen** (Isohypsen, Linien gleicher Grundwasserhöhe)
- Strömung senkrecht zu Grundwassergleichen

**Faktoren:**
- Topographie (näherungsweise parallel zu Geländeoberfläche)
- Aquifer-Eigenschaften (Durchlässigkeit)
- Grundwasserentnahme (Absenkungstrichter)

## Grundwasseralter und Verweilzeit

**Alter:**
- **Junges Grundwasser**: Tage bis Jahre
- **Fossiles Grundwasser**: Jahrtausende bis Millionen Jahre (keine Neubildung mehr)

**Datierung:**
- **Tritium (³H)**: <50 Jahre (Bomben-Tritium seit 1950er)
- **¹⁴C**: Bis 50.000 Jahre
- **³⁶Cl, ⁴He, etc.**: Sehr alte Wässer

**Beispiele fossiles Grundwasser:**
- **Nubischer Sandstein-Aquifer** (Sahara): 1 Mio. Jahre alt
- **Great Artesian Basin** (Australien): Millionen Jahre
- **High Plains Aquifer** (USA): Teilweise 10.000+ Jahre

**Bedeutung:**
- Fossiles Grundwasser nicht erneuerbar (Bergbau, nicht Nutzung)
- Nachhaltigkeit: Entnahme ≤ Neubildung

## Grundwassernutzung

### Globale Nutzung

**Entnahme:**
- **Total**: ca. 1.000 km³/Jahr (ca. 30% der Süßwasserentnahme)
- **Landwirtschaft**: 70% (Bewässerung)
- **Haushalte**: 20%
- **Industrie**: 10%

**Regional:**
- **Asien**: 60% der globalen Entnahme
- **Indien**: Größter Grundwassernutzer (230 km³/Jahr)
- **China**: 110 km³/Jahr
- **USA**: 110 km³/Jahr

**Deutschland:**
- Entnahme: ca. 18 km³/Jahr
- **70% des Trinkwassers** aus Grundwasser
- Regionale Unterschiede (München: 100%, Hamburg: weniger)

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Global_groundwater_depletion.png -->
![Grundwasserabsenkung weltweit](global_groundwater_depletion.png)
*Regionen mit Grundwasserabsenkung weltweit – Quelle: NASA, Wikimedia Commons (Public Domain)*

### Brunnen und Förderung

**Brunnen-Typen:**
- **Schachtbrunnen**: Gegraben, flach (<20 m)
- **Bohrbrunnen**: Gebohrt, tief (bis >1000 m)
- **Horizontalfilterbrunnen**: Große Entnahme (Wasserwerke)

**Absenkungstrichter:**
- Grundwasserspiegel sinkt um Brunnen
- Form abhängig von Entnahme, Durchlässigkeit, Zeit
- Reichweite: Meter bis Kilometer

**Grundwasserabsenkung:**
- Temporär: Bei Entnahme-Ende Regeneration
- Permanent: Bei Übernutzung (Entnahme > Neubildung)

## Grundwasserprobleme

### 1. Übernutzung (Groundwater Depletion)

**Definition:**
Entnahme > Neubildung → **Absenkung des Grundwasserspiegels**

**Globale Hotspots:**
- **Nordindien**: Punjab, Haryana (Reis-Weizen-Bewässerung)
- **Nordchina**: Nordchinesische Tiefebene
- **USA**: High Plains Aquifer (Ogallala) – Absenkung bis 60 m
- **Arabien**: Fossiles Grundwasser (nicht erneuerbar)
- **Mexiko-Stadt**: Landabsenkung 10 m (Kompression)

**Folgen:**
- Brunnen versiegen
- Pumpkosten steigen
- Landabsenkung (Subsidenz)
- Ökosystem-Schäden (Feuchtgebiete trocknen aus)
- Meerwasserintrusion (Küsten)

**Aktuelle Forschung:**
- Rodell, M. et al. (2018): Emerging trends in global freshwater availability. *Nature*, 557, 651-659
- [NASA GRACE Groundwater Monitoring](https://grace.jpl.nasa.gov/)

### 2. Grundwasserverschmutzung

**Quellen:**

**Punktquellen:**
- Altlasten (Industrie, Deponien)
- Leckagen (Tanks, Leitungen)
- Unfälle

**Diffuse Quellen:**
- **Landwirtschaft** (Hauptquelle):
  - Nitrat (Dünger): EU-Grenzwert 50 mg/L, oft überschritten
  - Pestizide (Atrazin, Glyphosat)
- Streusalz (Straßen)
- Atmosphärische Deposition

**Schadstoffe:**
- **Nitrat**: Gesundheit (Säuglinge), Eutrophierung
- **Pestizide**: Persistent, toxisch
- **Schwermetalle**: As, Pb, Cd (geogen oder anthropogen)
- **Chlorierte Lösungsmittel**: TCE, PCE (Altlasten)
- **PFAS** ("Forever Chemicals"): Persistent, bioakkumulativ
- **Mikroplastik**: Neu erkannt, Ausmaß unbekannt

**Problem:**
- Sehr langsame Fließgeschwindigkeit → **Langzeitbelastung**
- Sanierung sehr schwierig und teuer

**Aktuelle Forschung:**
- Famiglietti, J. S. (2014): The global groundwater crisis. *Nature Climate Change*, 4, 945-948
- [EEA Groundwater Quality](https://www.eea.europa.eu/themes/water/european-waters/water-quality-and-water-assessment/water-assessments/groundwater-quality)

### 3. Salzwasserintrusion

**Prozess:**
In Küstenregionen: Süßwasser "schwimmt" auf dichterem Salzwasser (Ghyben-Herzberg-Verhältnis).

**Bei Übernutzung:**
- Süßwasser-Linse wird dünner
- Salzwasser dringt in Brunnen ein
- **Versalzung** des Aquifers

**Betroffene Regionen:**
- Mittelmeerraum (Spanien, Italien, Israel)
- Florida (USA)
- Bangladesch
- Pazifische Inselstaaten

**Folgen:**
- Trinkwasser unbrauchbar
- Landwirtschaft unmöglich
- Schwer reversibel

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Saltwater_intrusion.svg -->
![Salzwasserintrusion](saltwater_intrusion.svg)
*Salzwasserintrusion in Küstenaquiferen – Quelle: USGS, Wikimedia Commons (Public Domain)*

## Grundwasserschutz

### Wasserschutzgebiete

**In Deutschland (WHG – Wasserhaushaltsgesetz):**

**Zone I (Fassungsbereich):**
- Um Brunnen/Quelle (Radius 10-20 m)
- Eingezäunt, keine Nutzung

**Zone II (Engere Schutzzone):**
- 50-Tage-Linie (Pathogene abgestorben)
- Keine Düngung, kein Pestizideinsatz
- Keine Bebauung

**Zone III (Weitere Schutzzone):**
- Gesamtes Einzugsgebiet
- Eingeschränkte Nutzung
- Auflagen für Landwirtschaft

### Maßnahmen

**Vorsorge:**
- Wasserschutzgebiete ausweisen
- Nachhaltige Entnahme (Neubildungsrate beachten)
- Grundwassermonitoring

**Landwirtschaft:**
- Reduzierte Düngung (Nitratrichtlinie)
- Präzisionslandwirtschaft
- Ökologischer Landbau
- Gewässerrandstreifen

**Industrie/Altlasten:**
- Sanierung kontaminierter Standorte
- Sichere Lagerung von Chemikalien

**Künstliche Grundwasseranreicherung:**
- Infiltration von Oberflächenwasser
- Speicherung für Trockenzeiten
- Beispiel: Managed Aquifer Recharge (MAR)

### Europäische Wasserrahmenrichtlinie (WRRL, 2000)

**Ziele:**
- Guter chemischer und mengenmäßiger Zustand aller Grundwasserkörper
- Verschlechterungsverbot
- Monitoring und Maßnahmenprogramme

**Deutschland:**
- Ca. 35% der Grundwasserkörper in schlechtem chemischen Zustand (meist Nitrat)
- Nitratrichtlinie verschärft

## Klimawandel und Grundwasser

**Erwartete Veränderungen:**

**Neubildung:**
- Regional sehr unterschiedlich
- Mitteleuropa: Tendenz abnehmend (trockenere Sommer)
- Mediterran: Starke Abnahme
- Unsicherheiten hoch

**Extreme:**
- Dürren → Grundwasserspiegel sinken
- Starkregen → Mehr Neubildung, aber auch Erosion, Verschmutzung

**Nachfrage:**
- Bewässerungsbedarf steigt (Landwirtschaft)
- Konkurrenz um Wasser

**Aktuelle Forschung:**
- Taylor, R. G. et al. (2013): Ground water and climate change. *Nature Climate Change*, 3, 322-329
- IPCC (2021): Water Cycle Changes. *AR6 WG1 Chapter 8*

## Didaktische Ressourcen

**Unterrichtsmaterialien:**
- [USGS Groundwater Information](https://www.usgs.gov/mission-areas/water-resources/science/groundwater) – Exzellente Ressource
- [Umweltbundesamt – Grundwasser](https://www.umweltbundesamt.de/themen/wasser/grundwasser)
- [BGR – Grundwasser](https://www.bgr.bund.de/DE/Themen/Wasser/grundwasser_node.html)

**Datenportale:**
- [WHYMAP – World Hydrogeological Map](https://www.whymap.org/)
- [GRACE Groundwater Monitoring](https://grace.jpl.nasa.gov/data/groundwater/)
- [EEA – European Groundwater](https://www.eea.europa.eu/themes/water)

**Interaktive Tools:**
- [USGS Groundwater Simulator](https://www.usgs.gov/media/videos/visualizing-groundwater-flow)

## Literatur

**Standardwerke:**
- Hölting, B. & Coldewey, W. G. (2019): *Hydrogeologie*. 8. Aufl. Springer Spektrum
- Freeze, R. A. & Cherry, J. A. (1979): *Groundwater*. Prentice Hall (Klassiker!)
- Fetter, C. W. (2014): *Applied Hydrogeology*. 4th ed. Waveland Press

**Aktuelle Forschung:**
- Gleeson, T. et al. (2020): The Water Planetary Boundary. *Nature*, 577, 547-548
- Rodell, M. et al. (2018): Emerging trends in global freshwater availability. *Nature*, 557, 651-659
- Famiglietti, J. S. (2014): The global groundwater crisis. *Nature Climate Change*, 4, 945-948

**Zeitschriften:**
- *Hydrogeology Journal* – [Springer](https://link.springer.com/journal/10040)
- *Groundwater*
- *Water Resources Research*

---

[← Zurück zur Hydrologie](../hydrologie)
