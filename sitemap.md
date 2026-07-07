# Sitemap — shamique-khan.vercel.app

## Claim
Technical depth and shipped systems substitute for years of industry experience I don't have yet.

## One action
Get a reviewer to open GitHub / a case study and take a call or intro seriously.

## Pages

| Page | File | Purpose | Status |
|---|---|---|---|
| Home | `index.html` | Hero + claim, About snippet, certs preview | Live |
| Projects | `projects.html` | Case studies proving the claim | Live — needs cut from 20 items to 3–4 featured case studies |
| Certificates | `certificates.html` | Credential backup, secondary proof | Live |
| Contact | *(section in index.html)* | The one action | Needs to become explicit, not buried |

## Known issues to fix before next iteration
- `index-redesign.html`, `index-scandinavian.html`, `portfolio.html` are unused homepage drafts — archive to a `/drafts` folder or delete so the root isn't ambiguous about which page is live.
- `DESIGN.md` currently documents Figma's marketing site, not this portfolio — replace with this project's actual design tokens or remove.
- Root-level `.xlsx`/`.json` inventory files and project subfolders (`advisor/`, `fincheck/`, `nifty50/`, `sensex/`, `Tools/`, `scripts/`) should move to a `/data` or separate repo so the portfolio root only contains site files.
- Projects page needs to narrow to 3–4 case studies (Quant ML, Scandium Labs, SK-AutoD, interpretability paper) rather than a 20-item flat list, per the "small sitemap, every page earns its place" brief.

## Pressure-test prompt (run in Claude Project, paste output below)
"Here's my sitemap: Home / Projects / Certificates / Contact. My claim is [claim above]. My one action is [GitHub click / call booking]. Does every page pull weight toward that action, or is anything hedging, generic, or missing?"

**Output:** *(paste your Claude Project response here)*

**One thing I'll change:** *(fill in after running the prompt)*
