# CalculatorMint

SEO-focused calculator marketplace built with Next.js. Accurate free tools plus keyword-rich guides so each calculator can rank on Google.

## Live calculators

- **[ABV Calculator](/calculators/abv-calculator)** — alcohol by volume from OG/FG (SG or Plato), standard + alternate formulas, apparent attenuation, ASBC calories

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## SEO notes

- App Router metadata, canonical URLs, Open Graph
- `sitemap.xml` and `robots.txt`
- JSON-LD for Organization, WebSite, WebApplication, FAQPage, Article
- Dedicated blog post supporting the ABV calculator keywords

Set your production domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Accuracy (ABV)

Verified against Brewer's Friend defaults (OG 1.050, FG 1.010, standard):

| Metric | Expected |
| --- | --- |
| ABV | 5.25% |
| Apparent attenuation | 79% |
| Calories (12 oz) | 163.7 |
| OG / FG (°P) | 12.39 / 2.56 |
