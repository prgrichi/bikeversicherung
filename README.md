# Bike Insurance Wizard (Nuxt)

Dieses Projekt ist eine kleine **Nuxt Fullstack-Anwendung**, die einen vereinfachten Versicherungsantrag für Fahrräder simuliert. Nutzer können ihr Fahrrad auswählen, Versicherungsoptionen festlegen und sehen dabei live den berechneten Beitrag.

Das Projekt dient in erster Linie als **Lern- und Übungsprojekt**, um typische Konzepte moderner Webanwendungen mit Nuxt zu trainieren.

## Ziel des Projekts

Die Anwendung soll helfen, folgende Themen praktisch umzusetzen:

- Aufbau einer Nuxt-Anwendung
- Mehrstufige Formulare (Wizard)
- State Management mit Pinia (Composition Stores)
- Trennung von UI, Stores und Services
- Aufbau einer einfachen REST API mit `server/api`
- Dynamische Formulare (z. B. abhängige Selects)
- einfache Business-Logik (Beitragsberechnung)

## Funktionsweise der App

Der Nutzer durchläuft einen kleinen Versicherungsprozess:

1. Fahrrad auswählen (Hersteller und Modell)
2. Fahrradpreis angeben
3. Versicherungsoptionen wählen (z. B. Diebstahl)
4. Persönliche Daten eingeben
5. Zusammenfassung des Antrags

Während des gesamten Prozesses wird der **aktuelle Versicherungsbeitrag live im Header angezeigt** und aktualisiert sich automatisch, wenn sich relevante Angaben ändern.

## Technische Architektur (vereinfacht)

Die Anwendung ist in mehrere Ebenen aufgeteilt:

- **Pages / Components** → UI und Formularschritte
- **Pinia Stores** → zentraler Zustand der
