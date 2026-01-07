# Recruitment Scraper

This directory contains tools for automatically filling recruitment forms using Playwright.

## Files
- `runScraper.ts` – main scraper logic
- `config.json` – form data (ignored by git)
- `KE_FullStackDeveloper.pdf` – sample CV (ignored by git)

## Usage
1. Configure your data in `config.json`.
2. Run the scraper: `npm run scraper` or directly via `ts-node`.
3. Results and logs will appear in the console.

## Important
- Do not commit personal data files (`config.json`, PDF CV files) – they are ignored by `.gitignore`.
