# When Was This War?

A browser-based history game where you guess the year of historical military campaigns based on contextual clues about technology, tactics, and military organization.

**Play it:** https://when-was-this-war.web.app

## How It Works

Each round presents a description of a historical battle or campaign with identifying details (names, places, dates) removed. You deduce the approximate year from clues like:

- Weapon technology (matchlock vs flintlock vs rifled muskets)
- Armor types (mail, plate, none)
- Military organization (phalanx, tercio, linear formations)
- Logistics and communication technology

Scoring is based on how close your guess is to the actual year, with more forgiveness for older battles (guessing within 50 years of a 2000-year-old battle is easier than for a 100-year-old one).

## Features

- 157 campaigns spanning 1274 BCE to 1991
- Hints available (at a point cost) that provide date ranges for mentioned technologies
- Difficulty settings (easy/medium/hard)
- Tracks high scores locally
- Supports BCE dates (enter as "490 BCE" or "-490")

## Running Locally

Just open `index.html` in a browser. No build step required.

## Deployment

Currently deployed via Firebase Hosting:

```bash
firebase deploy --project codex-e63e6
```

## Contributing

Feel free to:
- Add new campaigns (see `CAMPAIGN_STANDARDS.md` for guidelines)
- Fix historical inaccuracies
- Improve the UI
- Fork it to add new features (map guessing, multiplayer, etc.)

## License

MIT License - see LICENSE file
