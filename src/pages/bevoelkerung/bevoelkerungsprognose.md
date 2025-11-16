---
layout: ../../layouts/Layout.astro
title: Bevölkerungsprognosen
description: Methoden, Unsicherheiten und Szenarien der Bevölkerungsvorausberechnung
---

# Bevölkerungsprognosen und -vorausberechnungen

## Definition und Abgrenzung

**Bevölkerungsvorausberechnung** (engl. *population projection*): Modellrechnung der zukünftigen Bevölkerungsentwicklung auf Basis aktueller Daten und **Annahmen** über Fertilität, Mortalität und Migration.

**Bevölkerungsprognose** (engl. *population forecast*): Aussage über die wahrscheinlichste zukünftige Entwicklung.

**Unterschied:**
- **Vorausberechnung**: "Was wäre wenn...?" (Szenarien, bedingte Aussagen)
- **Prognose**: "Was wird sein?" (Punktschätzung, oft unsicher)

In der Praxis werden die Begriffe häufig synonym verwendet. Die UN und die meisten statistischen Ämter sprechen von **Projektionen** (projections), um den hypothetischen Charakter zu betonen.

**Zweck:**
- Planung (Infrastruktur, Renten, Gesundheit, Bildung)
- Politikberatung
- Wirtschaftsplanung (Arbeitskräfte, Märkte)
- Wissenschaftliche Forschung

## Methoden der Bevölkerungsvorausberechnung

### 1. Kohorten-Komponenten-Methode

Die **Kohorten-Komponenten-Methode** (Cohort-Component Method) ist die **Standardmethode** für Bevölkerungsprojektionen weltweit (UN, Eurostat, Destatis, etc.).

**Grundprinzip:**
Die Bevölkerung wird nach **Alter und Geschlecht** disaggregiert. Für jede Kohorte werden die drei **Komponenten** der Bevölkerungsdynamik separat modelliert:
1. **Fertilität** (Geburten)
2. **Mortalität** (Sterbefälle)
3. **Migration** (Zu- und Abwanderung)

**Ablauf (vereinfacht):**

**Ausgangsjahr t = 0:**
- Bevölkerung nach Alter und Geschlecht: P(a, g, 0)

**Jahr t+1:**
```
P(a+1, g, t+1) = P(a, g, t) × S(a, g, t) + M(a, g, t)
```

- **S(a, g, t)**: Überlebensrate (1 - Sterberate)
- **M(a, g, t)**: Nettozuwanderung

**Geburten:**
- Frauen im gebärfähigen Alter (15-49 Jahre)
- Alters­spezifische Fertilitätsraten (ASFR)
- Geschlechter­verhältnis bei Geburt (ca. 105 Jungen : 100 Mädchen)

**Iteration:**
- Jahr für Jahr fortschreiben
- Bis Zieljahr (z.B. 2100)

**Vorteile:**
- Detailliert (Altersstruktur!)
- Transparent
- Flexibel (Szenarien)

**Nachteile:**
- Datenanforderungen hoch
- Annahmen über Fertilität, Mortalität, Migration nötig
- Unsicherheit nimmt mit Zeithorizont zu

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:Population_pyramid_projection_2050.png -->
![Bevölkerungspyramide Projektion](population_pyramid_projection_2050.png)
*Bevölkerungspyramide Deutschland – Projektion 2050 – Quelle: Wikimedia Commons (CC BY-SA)*

**Aktuelle Forschung:**
- UN DESA (2024): *World Population Prospects 2024*. [Link](https://population.un.org/wpp/)
- Eurostat: [Population Projections](https://ec.europa.eu/eurostat/web/population-demography/demography-population-stock-balance/projections)

### 2. Mathematische Trendextrapolation

**Einfache Methode:**
- Vergangener Trend wird **fortgeschrieben**
- Z.B. lineares, exponentielles oder logistisches Wachstum

**Logistische Funktion:**
```
P(t) = K / (1 + e^(-r(t-t0)))
```
- K = Kapazitätsgrenze (carrying capacity)
- r = Wachstumsrate

**Vorteile:**
- Einfach
- Wenig Daten nötig

**Nachteile:**
- Ignoriert Altersstruktur
- Unrealistisch (Trends ändern sich)
- Keine Differenzierung nach Komponenten

**Anwendung:**
- Kurzfristige Schätzungen
- Historische Analysen

### 3. Bayesianische Methoden

**Moderne Entwicklung:**
Seit 2010er Jahren zunehmend Verwendung von **probabilistischen Modellen**.

**Prinzip:**
- Nicht eine Punktschätzung, sondern **Wahrscheinlichkeitsverteilung**
- Unsicherheit wird quantifiziert
- **Bayes-Theorem**: Kombination von Vorinformation (Prior) und neuen Daten (Likelihood) → Posterior

**Beispiel: UN World Population Prospects (seit 2014):**
- Bayesianische Projektion der **Total Fertility Rate (TFR)**
- Konvergenz zu 1,85-2,1 (langfristig) angenommen, aber mit Unsicherheit
- Resultat: **80% und 95% Konfidenzintervalle** für Bevölkerung

**Vorteile:**
- Unsicherheit explizit modelliert
- Probabilistische Aussagen möglich ("Mit 95% Wahrscheinlichkeit zwischen X und Y")

**Nachteile:**
- Komplex
- Rechenintensiv

**Aktuelle Forschung:**
- Raftery, A. E. et al. (2012): Bayesian Probabilistic Population Projections. *Statistical Science*, 27(4), 528-566. [DOI: 10.1214/12-STS403](https://doi.org/10.1214/12-STS403)

### 4. Agent-Based Models (ABM)

**Neuere Entwicklung:**
- Individuen (Agenten) werden simuliert
- Verhalten basiert auf Regeln (Heirat, Fertilität, Migration)
- Bottom-up-Ansatz

**Vorteile:**
- Mikrofundiert
- Heterogenität
- Interaktionen

**Nachteile:**
- Sehr komplex
- Validierung schwierig
- Noch nicht für offizielle Projektionen genutzt

## Annahmen und Szenarien

Bevölkerungsprojektionen basieren auf **Annahmen** über zukünftige Entwicklungen. Da diese unsicher sind, werden meist **mehrere Szenarien** berechnet.

### Typische Szenarien

**Deutschland (Destatis):**
- **Hauptvariante**: Mittlere Annahmen
- **Varianten** (insgesamt oft 10-20):
  - Fertilitätsannahmen: Niedrig (1,4), Mittel (1,55), Hoch (1,7)
  - Lebenserwartung: Niedrig, Mittel, Hoch
  - Migration: Niedrig, Mittel, Hoch

**UN World Population Prospects:**
- **Medium Variant**: Hauptvariante
- **Low Variant**: TFR -0,5, niedrige Lebenserwartung
- **High Variant**: TFR +0,5, hohe Lebenserwartung
- **Constant Fertility**: TFR bleibt konstant
- **Instant Replacement**: TFR sofort 2,1
- **Zero Migration**: Keine Wanderungen
- **No Change**: Alle Raten konstant

**Eurostat (EUROPOP):**
- Baseline, Low, High Szenarien
- Fokus auf EU-Migration

### Unsicherheiten

**Quellen:**
1. **Datenqualität**: Volkszählungen, Geburten-/Sterberegister (in Entwicklungsländern oft lückenhaft)
2. **Modellunsicherheit**: Methode, Annahmen
3. **Parametrische Unsicherheit**: Zukünftige Fertilität, Mortalität, Migration unbekannt
4. **Strukturelle Veränderungen**: Pandemien, Kriege, Politikwechsel

**Unsicherheit nimmt zu mit:**
- **Zeithorizont**: 10 Jahre relativ sicher, 50 Jahre sehr unsicher
- **Regionaler Desaggregation**: Welt > Länder > Regionen
- **Altersgruppen**: Ältere besser prognostizierbar als Geburten

**Beispiel: UN-Projektion 2100**
- **Medium**: 10,4 Mrd.
- **95% Konfidenzintervall**: 9,4-12,7 Mrd. (sehr breit!)

## Globale Bevölkerungsprojektionen

### UN World Population Prospects 2024

**Aktueller Stand (2024):**
- **Weltbevölkerung**: 8,1 Mrd.

**Projektion 2050 (Medium Variant):**
- **9,7 Mrd.** (+1,6 Mrd.)
- Peak um 2080-2100 bei ca. 10,4 Mrd.

**Projektion 2100 (Medium):**
- **10,4 Mrd.**
- Unsicherheit: 9,4-12,7 Mrd. (95% CI)

**Regionale Unterschiede:**

**Wachstum:**
- **Subsahara-Afrika**: Von 1,2 Mrd. (2024) auf 3,4 Mrd. (2100) – fast Verdreifachung!
- **Indien**: Weiter größte Bevölkerung (bleibt bei ca. 1,5 Mrd. bis 2060, dann Rückgang)

**Schrumpfung:**
- **China**: Von 1,4 Mrd. (2024) auf 1,1 Mrd. (2050) und 771 Mio. (2100)
- **Europa**: Von 745 Mio. (2024) auf 587 Mio. (2100)
- **Japan**: Von 123 Mio. auf 75 Mio. (2100)

**Alterung:**
- **Medianalter weltweit**: 30 Jahre (2024) → 37 Jahre (2050) → 42 Jahre (2100)
- **Über-65-Jährige**: 10% (2024) → 16% (2050) → 22% (2100)

**Aktuelle Forschung:**
- UN DESA (2024): *World Population Prospects 2024*. [Link](https://population.un.org/wpp/)
- [Our World in Data: Population Growth](https://ourworldindata.org/population-growth)

<!-- Bild-Quelle: https://commons.wikimedia.org/wiki/File:World_population_projections_by_region.svg -->
![Weltbevölkerung nach Regionen](world_population_projections_by_region.svg)
*Weltbevölkerung 1950-2100 nach Regionen (UN-Projektion) – Quelle: UN DESA, Wikimedia Commons (CC BY-SA)*

## Deutschland: Bevölkerungsvorausberechnung

### Destatis 15. koordinierte Bevölkerungsvorausberechnung (2022)

**Ausgangsjahr**: 2021 (83,2 Mio.)

**Hauptvariante (G2-L2-W2):**
- **2030**: 84,3 Mio. (leichtes Wachstum durch Migration)
- **2050**: 82,6 Mio. (Rückgang)
- **2070**: 75,9 Mio.

**Annahmen (Hauptvariante):**
- **TFR**: 1,55 (konstant)
- **Lebenserwartung 2070**: Männer 84,6, Frauen 88,2 Jahre
- **Nettozuwanderung**: +200.000/Jahr (ab 2026)

**Alterung:**
- **Über-67-Jährige**: 18% (2021) → 23% (2050) → 26% (2070)
- **Unter-20-Jährige**: 18% (2021) → 17% (2070)

**Folgen:**
- **Arbeitskräfte**: Rückgang im erwerbsfähigen Alter (20-66 Jahre)
- **Renten**: Beitragslast steigt
- **Pflege**: Bedarf steigt massiv
- **Migration**: Ohne Zuwanderung viel stärkerer Rückgang

**Szenarien:**
- **Niedrig (G1-L1-W1)**: 68,1 Mio. (2070)
- **Hoch (G3-L3-W3)**: 89,2 Mio. (2070)

**Aktuelle Forschung:**
- Destatis (2022): [15. koordinierte Bevölkerungsvorausberechnung](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsvorausberechnung/_inhalt.html)

## Herausforderungen und Kritik

### 1. Fertilität schwer vorhersagbar

**Problem:**
- TFR kann stark schwanken (Babyboom 1960er, Geburtenrückgang 1970er)
- Politikeinfluss (Familienpolitik)
- Wirtschaftskrisen
- Wertewandel

**Beispiel Frankreich:**
- TFR 2010: 2,03
- TFR 2023: 1,68 (starker Rückgang)
- Prognosen mussten angepasst werden

### 2. Migration hochgradig unsicher

**Problem:**
- Politische Entscheidungen (Einwanderungsgesetze)
- Konflikte, Kriege (Ukraine-Krieg 2022: +1 Mio. Flüchtlinge in Deutschland)
- Klimawandel (zukünftig)
- Wirtschaftliche Entwicklung

**Konsequenz:**
- Migration oft größte Unsicherheitsquelle in kurz- bis mittelfristigen Projektionen

### 3. Pandemien und Katastrophen

**COVID-19:**
- Temporär höhere Sterblichkeit (2020-2022)
- Geburtenrückgang in einigen Ländern
- Migration beeinträchtigt
- Langfristiger Effekt gering (in Industrieländern)

**Historisch:**
- Spanische Grippe (1918): 50-100 Mio. Tote
- HIV/AIDS (ab 1980er): Südafrika TFR-Rückgang

### 4. Klimawandel

**Potenzielle Effekte:**
- **Mortalität**: Hitzewellen, Extremwetter
- **Fertilität**: Unsicher (Stress?)
- **Migration**: Klimaflucht (noch schwer zu quantifizieren)

**Forschungslücke:**
- Klimawandel noch nicht systematisch in Bevölkerungsprojektionen integriert

**Aktuelle Forschung:**
- Abel, G. J. et al. (2019): Climate, conflict and forced migration. *Global Environmental Change*, 54, 239-249

## Anwendungen

**Raumplanung:**
- Infrastrukturbedarf (Schulen, Krankenhäuser, Verkehr)
- Wohnungsbau
- Regional: Stadt vs. Land

**Sozialsysteme:**
- **Renten**: Beitragssätze, Rentenhöhe
- **Gesundheit**: Krankenhäuser, Pflege
- **Bildung**: Schüler-/Studentenzahlen

**Wirtschaft:**
- Arbeitskräftebedarf
- Konsummärkte
- Investitionsplanung

**Umwelt:**
- Ressourcenbedarf (Wasser, Energie, Nahrung)
- CO₂-Emissionen
- Biodiversitätsdruck

## Didaktische Ressourcen

**Interaktive Tools:**
- [UN Population Division – Interactive Data](https://population.un.org/wpp/)
- [Gapminder World](https://www.gapminder.org/) – Visualisierung historisch + Prognosen
- [Destatis Bevölkerungsvorausberechnung](https://www.destatis.de/bevoelkerungspyramide/)

**Datenquellen:**
- [UN DESA Population Data](https://population.un.org/)
- [Eurostat Population Projections](https://ec.europa.eu/eurostat/web/population-demography)
- [Our World in Data: Population](https://ourworldindata.org/population-growth)

**Unterrichtsmaterialien:**
- [PRB Population Reference Bureau](https://www.prb.org/) – Datasheets, Unterrichtsmaterial
- [Berlin-Institut für Bevölkerung](https://www.berlin-institut.org/)

## Literatur

**Standardwerke:**
- Bähr, J. & Jürgens, U. (2023): *Bevölkerungsgeographie*. 7. Aufl. UTB
- Preston, S. H. et al. (2000): *Demography: Measuring and Modeling Population Processes*. Wiley-Blackwell

**Aktuelle Forschung:**
- UN DESA (2024): *World Population Prospects 2024*. New York
- Raftery, A. E. et al. (2012): Bayesian Probabilistic Population Projections. *Statistical Science*, 27(4), 528-566
- Lutz, W. et al. (2018): Demographic and human capital scenarios for the 21st century. *Publications Office EU*

**Methodische Papers:**
- Lee, R. D. & Tuljapurkar, S. (1994): Stochastic Population Forecasts. *International Statistical Review*, 62, 217-230
- Alkema, L. et al. (2011): Probabilistic Projections of Total Fertility Rate. *Demographic Research*, 24, 813-852

**Zeitschriften:**
- *Demographic Research* – [Open Access](https://www.demographic-research.org/)
- *Population and Development Review*
- *Population Studies*

---

[← Zurück zur Bevölkerungsgeographie](../bevoelkerung)
