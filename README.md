# pbot.dionlabs.ai

Public, single-page showcase for [pbot](https://github.com/dion-labs/pbot), separate from the local Android control dashboard. Contains only public brand assets and illustrative workflow content. No account data, API calls, device access, or hosted control plane.

## Development

```sh
npm ci
npm run dev
```

## Cloudflare Pages deployment

Source: https://github.com/dion-labs/pbot-site

Cloudflare Pages project: `pbot-site`. Production domain: https://pbot.dionlabs.ai.
Pages origin: https://pbot-site.pages.dev.

Pushing to `main` triggers a production build and deployment. Other branches and pull requests get preview deployments through the Cloudflare GitHub integration.

- Build command: `npm run build`
- Output directory: `out`
- Root directory: repository root
- Node version: 22.16.0 (`.node-version`)

No runtime secrets, device access, or control API are deployed. `npm start` previews the built output locally using Wrangler Pages.

## Content and identity

Product claims and setup instructions are based on the pbot README and public documentation. The workflow display is explicitly illustrative and never connects to a running bot. Original mascot and favicon are copied from pbot's public brand assets. Keep Pokémon artwork and private runtime screenshots out of this site.

Verification: production static export, TypeScript check, lint, and Cloudflare Git build. Browser interaction testing has not been performed.

## Missing pages

`public/404.html` is copied to the output root during the build. Cloudflare
Pages uses it to return HTTP 404 for unknown paths instead of falling back to
the homepage. Keep this file when changing the build or hosting configuration.
