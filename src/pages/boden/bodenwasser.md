---
layout: ../../layouts/Layout.astro
title: Bodenwasser und Wasserhaushalt
description: Wasserbindung, Feldkapazität, pF-Kurven und pflanzenverfügbares Wasser
---

# Bodenwasser und Wasserhaushalt

## Bedeutung von Bodenwasser

**Bodenwasser** ist das Wasser, das sich in den Poren des Bodens befindet. Es ist:
- **Lebensgrundlage** für Pflanzen (Wasseraufnahme über Wurzeln)
- **Lösungsmittel** für Nährstoffe
- **Transportmedium** für gelöste Stoffe
- **Lebensraum** für Bodenorganismen
- **Klimafaktor** (Verdunstung kühlt)
- **Filtermedium** (Grundwasserschutz)

**Bodenwasserhaushalt** beschreibt die **dynamischen Prozesse** von Wasserzufuhr, -speicherung und -abgabe im Boden.

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Soil_water_retention_curve.svg -->
![Bodenwasser-Bindung](soil_water_retention_curve.svg)
*pF-Kurve: Zusammenhang zwischen Wasserspannung und Wassergehalt – Quelle: Wikimedia Commons (CC BY-SA)*

## Formen von Bodenwasser

Nach der **Bindungsart** und **Verfügbarkeit** für Pflanzen:

### 1. Adsorptions- / Haftwasser

**Bindung:**
- **Sehr fest** an Bodenpartikel gebunden (molekulare Kräfte)
- Wassermoleküle bilden dünnen Film um Partikel

**Eigenschaften:**
- **Nicht pflanzenverfügbar** (Saugspannung zu hoch)
- Wasserspannung: > pF 4,2 (ca. -1,5 MPa)
- Auch bei Lufttrocknung nicht vollständig entfernbar

**Vorkommen:**
- Besonders an Tonmineralen und Humus (große Oberfläche)

### 2. Kapillarwasser

**Bindung:**
- In Bodenporen durch **Kapillarkräfte** gehalten
- Oberflächenspannung und Adhäsion

**Eigenschaften:**
- **Pflanzenverfügbar** (teilweise)
- Kann in Poren aufsteigen (Kapillaraszension)
- Wichtigster Wasserspeicher für Pflanzen

**Unterformen:**

**a) Totwasser (nicht pflanzenverfügbar):**
- pF 4,2 bis pF 1,8
- Zu fest gebunden

**b) Nutzwasser (pflanzenverfügbar):**
- **pF 1,8 bis pF 4,2**
- Optimaler Bereich für Pflanzenwachstum
- = **Nutzbare Feldkapazität (nFK)**

### 3. Sickerwasser (Gravitationswasser)

**Bindung:**
- **Nicht gebunden**, bewegt sich durch Schwerkraft
- In großen Poren (Makroporen)

**Eigenschaften:**
- Versickert schnell nach unten (Perkolation)
- **Nicht pflanzenverfügbar** (zu schnell weg)
- Führt zur Grundwasserneubildung
- Kann Nährstoffe auswaschen (Leaching)

**Bedeutung:**
- Drainage notwendig bei Staunässe
- Grundwasserneubildung

### 4. Stauwasser

**Vorkommen:**
- Über stauender Schicht (Ton, Gesteinsschicht)
- Temporär nach Starkregen

**Probleme:**
- Sauerstoffmangel (Reduktionsbedingungen)
- Wurzelfäule
- Pseudovergleyung

## Bodenwasserspannung und pF-Wert

### Wasserspannung (ψ)

**Definition:**
Die **Kraft**, mit der Wasser im Boden gebunden ist bzw. mit der Pflanzen Wasser ansaugen müssen.

**Einheit:**
- hPa (Hektopascal) oder kPa
- Oft als **negativer Druck** (Saugspannung)

**Je trockener der Boden, desto höher die Saugspannung!**

### pF-Wert

**Definition:**
Der **pF-Wert** ist der **dekadische Logarithmus** der Wasserspannung in cm Wassersäule.

**Formel:**
```
pF = log10(h)
```
- h = Wasserspannung in cm Wassersäule

**Beispiele:**
- pF 0: h = 1 cm (gesättigter Boden)
- pF 1,8: h = 63 cm (Feldkapazität)
- pF 4,2: h = 15.849 cm = 158 m (Permanenter Welkepunkt)

**Warum logarithmisch?**
- Wasserspannung variiert über **viele Größenordnungen** (1 bis 1.000.000 cm)
- Logarithmische Skala komprimiert

## Kenngrößen des Bodenwasserhaushalts

### Feldkapazität (FK)

**Definition:**
Die **maximale Wassermenge**, die ein Boden gegen die Schwerkraft festhalten kann, nachdem überschüssiges Wasser abgeflossen ist.

**pF-Wert:** pF 1,8 (ca. -60 hPa)

**Bestimmung:**
- Boden mit Wasser sättigen
- 2-3 Tage abtropfen lassen
- Restlicher Wassergehalt = FK

**Abhängig von:**
- **Bodenart**: Ton > Schluff > Sand
- **Humusgehalt**: Mehr Humus → höhere FK
- **Struktur**: Gut strukturiert → höhere FK

**Werte (Vol.-%)**
- Sand: 10-20 %
- Schluff: 20-40 %
- Ton: 30-50 %

### Permanenter Welkepunkt (PWP)

**Definition:**
Der **Wassergehalt**, bei dem Pflanzen dauerhaft welken, weil sie kein Wasser mehr aufnehmen können.

**pF-Wert:** pF 4,2 (ca. -1.500 hPa = -1,5 MPa)

**Bedeutung:**
- Pflanzen können nicht genug Saugkraft aufbringen
- Untere Grenze pflanzenverfügbaren Wassers

**Abhängig von:**
- **Bodenart**: Ton > Schluff > Sand (Ton bindet Wasser fester!)

**Werte (Vol.-%)**
- Sand: 2-6 %
- Schluff: 10-20 %
- Ton: 15-30 %

### Nutzbare Feldkapazität (nFK)

**Definition:**
Die **Wassermenge**, die Pflanzen tatsächlich nutzen können.

**Formel:**
```
nFK = FK - PWP
```

**Einheit:** mm (pro Bodentiefe) oder Vol.-%

**pF-Bereich:** pF 1,8 bis pF 4,2

**Beispiele (Vol.-%)**
- Sand: 10-15 %
- Schluff (Lehm): 15-25 %
- Ton: 10-20 % (trotz hoher FK, hoher PWP!)

**Optimale nFK:**
- **Lehmiger Schluff**: Beste Balance (hohe FK, niedriger PWP)
- **Sandboden**: Geringste nFK (wenig Speicherung)
- **Tonboden**: Mittlere nFK (viel Wasser, aber fest gebunden)

**Bedeutung:**
- Wichtigste Kenngröße für Pflanzenwachstum
- Bemessungsgrundlage für Bewässerung
- Bodenbewertung (Bodenpunkte)

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Plant_available_water.svg -->
![Pflanzenverfügbares Wasser](plant_available_water.svg)
*Nutzbare Feldkapazität nach Bodenarten – Quelle: Wikimedia Commons (CC BY-SA)*

## pF-Kurven (Wasserspannungskurven)

**Definition:**
Grafische Darstellung des Zusammenhangs zwischen **Wassergehalt** (x-Achse) und **pF-Wert** (y-Achse).

**Charakteristische Punkte:**
1. **Sättigung** (pF 0): Alle Poren wassergefüllt
2. **Feldkapazität** (pF 1,8): Optimale Wasserversorgung
3. **Permanenter Welkepunkt** (pF 4,2): Pflanze welkt dauerhaft

**Kurvenform:**
- **Sandboden**: Steile Kurve (schneller Wasserverlust)
- **Tonboden**: Flache Kurve (Wasser fest gebunden)
- **Lehmboden**: Mittlere Kurve (optimal)

**Hysterese:**
- **Trocknungskurve** ≠ **Befeuchtungskurve**
- "Einfüllen" schwieriger als "Entleeren" (Lufteinschlüsse)

## Wasserbewegung im Boden

### 1. Vertikale Bewegung

**Infiltration:**
- Eindringen von Wasser in den Boden (Oberfläche → Tiefe)
- Abhängig von: Niederschlagsintensität, Bodenart, Struktur, Vegetationsbedeckung

**Versickerung (Perkolation):**
- Vertikale Bewegung durch Bodenprofil
- Gravitativ getrieben
- Führt zu Grundwasserneubildung

**Kapillarascension:**
- **Aufsteigendes** Wasser durch Kapillarkräfte
- Wichtig bei flachem Grundwasser
- Kann zu Versalzung führen (ariden Regionen)

### 2. Laterale Bewegung

**Zwischenabfluss (Interflow):**
- Horizontaler Fluss im Boden (oberhalb Grundwasser)
- An Hanglage
- Wichtig für Abflussbildung

**Grundwasserströmung:**
- Langsam (cm/Tag bis m/Tag)
- Nach Darcy-Gesetz

### 3. Einflussfaktoren

**Bodenart:**
- **Sand**: Schnelle Infiltration, schnelle Versickerung, geringe Speicherung
- **Ton**: Langsame Infiltration, langsame Versickerung, hohe Speicherung
- **Lehm**: Optimal (mittel)

**Bodenstruktur:**
- **Gut strukturiert** (Krümel): Schnelle Infiltration, gute Drainage
- **Verdichtet**: Langsame Infiltration, Oberflächenabfluss ↑

**Vegetation:**
- **Wurzeln**: Schaffen Poren (Makroporen)
- **Interzeption**: Reduziert Niederschlag am Boden
- **Transpiration**: Entzieht Bodenwasser

**Organische Substanz (Humus):**
- Erhöht Wasserspeicherfähigkeit
- Verbessert Struktur

## Bodenwasserhaushalt und Landwirtschaft

### Bewässerung

**Ziel:**
- Optimale Wasserversorgung (FK halten)
- Ertragssteigerung

**Methoden:**
- **Oberflächenbewässerung**: Furchen, Überflutung (ineffizient, 40-60% Effizienz)
- **Beregnung**: Sprinkler (60-80%)
- **Tröpfchenbewässerung**: Lokalisiert, hoch effizient (80-95%)

**Bemessung:**
- Wasserdefizit = (FK - aktueller Wassergehalt) × Wurzeltiefe
- Berücksichtigung Evapotranspiration (ET0)

**Probleme:**
- **Überbewässerung**: Verschwendung, Auswaschung, Versalzung
- **Unterbewässerung**: Trockenstress, Ertragsverlust

### Drainage

**Ziel:**
- Entfernung überschüssigen Wassers (Staunässe)
- Verbesserung Bodenluft

**Methoden:**
- **Offene Gräben**
- **Drainagerohre** (unterirdisch)

**Notwendig bei:**
- Tonböden mit schlechter Durchlässigkeit
- Flachem Grundwasser
- Hohen Niederschlägen

### Bodenbearbeitung

**Ziele:**
- Förderung Infiltration
- Reduktion Verdichtung
- Unkrautkontrolle

**Methoden:**
- **Pflügen**: Lockert Boden, kann aber Struktur zerstören
- **Konservierende Bodenbearbeitung**: Minimal-Tillage, No-Tillage (erhält Struktur)
- **Mulchen**: Bedeckung reduziert Verdunstung

## Bodenwasser und Klimawandel

**Erwartete Veränderungen:**

**Temperaturanstieg:**
- **Höhere Evapotranspiration** → mehr Wasserverlust
- Längere Trockenperioden

**Niederschlagsveränderungen:**
- Regional unterschiedlich
- **Mitteleuropa**: Trockenere Sommer, feuchtere Winter
- **Mittelmeerraum**: Deutlich trockener

**Folgen für Bodenwasser:**
- **Häufigere Dürren** → Wasserdefizite
- **Starkregen**: Mehr Oberflächenabfluss statt Infiltration
- **Bewässerungsbedarf** steigt

**Anpassungsstrategien:**
- **Humusaufbau**: Erhöht Wasserspeicherung
- **Effiziente Bewässerung**: Tröpfchenbewässerung
- **Wassersparende Fruchtarten**: Trockentolerante Sorten
- **Mulchen, Zwischenfrüchte**: Reduzieren Verdunstung

**Aktuelle Forschung:**
- Vereecken, H. et al. (2016): Soil hydrology in the Earth system. *Nature Reviews Earth & Environment*, 1, 16-30
- Roose, E. et al. (2019): Soil and water conservation. *Ecological Engineering*, 135, 1-3

## Messmethoden

### Wassergehalt

**Gravimetrisch:**
- Bodenprobe wiegen → trocknen (105°C) → erneut wiegen
- Wassergehalt = (Nassgewicht - Trockengewicht) / Trockengewicht × 100%
- Genau, aber destruktiv

**TDR (Time Domain Reflectometry):**
- Elektromagnetische Wellen
- Dielektrizitätskonstante ∝ Wassergehalt
- Nicht-destruktiv, kontinuierliche Messung

**Neutronsonde:**
- Neutronenstreuung an Wasserstoff
- Tiefenprofile möglich
- Radioaktiv (Genehmigung nötig)

### Wasserspannung

**Tensiometer:**
- Poröse Keramikkerze im Boden
- Misst Saugspannung direkt
- Bereich: pF 0 bis pF 2,7 (gesättigt bis leicht trocken)

**Psychrometer:**
- Dampfdruckmessung
- Für trockenere Böden (pF > 3)

**Gipsblöcke:**
- Elektrischer Widerstand ändert sich mit Wassergehalt
- Einfach, aber ungenau

## Didaktische Ressourcen

**Unterrichtsmaterialien:**
- [Hypersoil – Bodenwasser](https://hypersoil.uni-muenster.de/) – Interaktive Lernplattform
- [FAO Soil Water](http://www.fao.org/land-water/water/watergovernance/en/)
- [USGS Soil Water](https://www.usgs.gov/special-topics/water-science-school/science/soil-moisture)

**Simulationen:**
- [Soil Water Characteristic Curve Calculator](https://www.pedosphere.com/resources/bulkdensity/triangle_us.cfm)

## Literatur

**Standardwerke:**
- Blume, H.-P. et al. (2016): *Scheffer/Schachtschabel: Lehrbuch der Bodenkunde*. 17. Aufl. Springer
- Hartge, K. H. & Horn, R. (2016): *Einführung in die Bodenphysik*. 4. Aufl. Schweizerbart
- Hillel, D. (2013): *Fundamentals of Soil Physics*. Academic Press

**Aktuelle Forschung:**
- Vereecken, H. et al. (2016): Soil hydrology in the Earth system. *Nature Reviews Earth & Environment*, 1, 16-30
- Or, D. et al. (2021): Advances in soil evaporation physics. *Vadose Zone Journal*, 20(1), e20068

---

[← Zurück zur Bodengeographie](../boden)
