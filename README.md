# 🌤️ Wetter-App

Eine kleine Web-App zum Abrufen der aktuellen Wetterdaten für beliebige Städte. Wetterdaten werden über die API von [OpenWeatherMap](https://openweathermap.org/) geladen.

## ✨ Funktionen

- 🔍 Wetter-Suche nach Stadtname
- 🌡️ Temperatur, Wetterbeschreibung, Luftfeuchtigkeit und Windgeschwindigkeit
- 🖼️ Icons je nach Wetterlage (klar, Regen, Schnee, Wolken, Nebel)

## 🚀 Starten

Öffne `index.html` im Browser oder starte einen lokalen Server im Projektordner (z. B. mit Live Server oder `npx serve`).

## 📄 config.json

Die App liest den OpenWeatherMap-API-Schlüssel aus der Datei **config.json** im Projektordner.

Lege im Projektordner eine Datei `config.json` mit folgendem Inhalt an:

```json
{
  "apiKey": "DEIN_OPENWEATHERMAP_API_KEY"
}
```

- 🔑 Einen kostenlosen API-Schlüssel erhältst du nach der Registrierung auf [openweathermap.org](https://openweathermap.org/api).
