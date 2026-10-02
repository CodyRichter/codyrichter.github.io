# Cody Richter Codes

Personal site for [cody.richter.codes](https://cody.richter.codes), built with Next.js (static export), TypeScript, and Mantine.

Requires Node 22+ (`.nvmrc` pins 26): `nvm use`

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Local dev server at http://localhost:3000           |
| `npm run build`     | Static export into `out/`                           |
| `npm start`         | Serve `out/` locally, as GitHub Pages would         |
| `npm run typecheck` | `tsc --noEmit`                                      |
| `npm run lint`      | ESLint                                              |
| `npm run deploy`    | Build, then publish `out/` to the `gh-pages` branch |

Page content lives in `src/sections/` (and `src/data/` for projects and work history).
`public/.nojekyll` must stay: without it GitHub Pages ignores the `_next/` folder.
