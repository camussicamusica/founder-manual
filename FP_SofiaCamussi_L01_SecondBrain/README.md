---
type: reference
updated: 2026-10-03
source_type: synthesis
source: this folder, assembled from the files listed in 01-sources/ and 02-market/
tags: [readme, pareto-talent, second-brain, entry-point]
---

# Pareto Talent mini Second Brain

A small, linked knowledge base about Pareto Talent, built for the Pareto Talent Bootcamp 7 final project (Part 1) by Sofia Camussi. It is plain Markdown so any AI (Claude, ChatGPT, Gemini) or any person can read it. It is trained on three source types and is meant to answer one question well: how do we get a qualified founder from a lead magnet to a call about the Right Hand Program?

## How an AI should use this brain
1. Read [[_MOC]] first (the root map), then the `_MOC.md` of the folder you need.
2. Read the frontmatter of a file before the body. `type`, `source_type`, `source` and `tags` tell you what the file is and where its facts came from.
3. Follow the `[[wikilinks]]` to related files. Do not guess; if a fact is not in a file, say it is not in the brain.
4. Only use a number if its row says VERIFIED-SITE or VERIFIED-TRANSCRIPT. Anything marked UNVERIFIED or CONFLICT stays out of copy. The approved list is in [[proof-bank]].
5. Cite the file name when you use a fact, for example "(source: [[pareto-talent-identity]])".
6. Operating rules for the AI are in [[CLAUDE]].

## The three source types and where each lives
| Source type | What it is here | Folder |
|---|---|---|
| public-page | Live pages of paretotalent.com and its funnels, read on 2026-10-03 | [[01-sources/public-pages/_MOC]] |
| transcript | Recorded bootcamp sessions (Day 1 and Day 10) | [[01-sources/transcripts/_MOC]] |
| document | The Day 10 final-project deck and the bootcamp frameworks sheet | [[01-sources/documents/_MOC]] |
| synthesis | Our own conclusions, always linked back to the sources above | [[00-context/_MOC]], [[02-market/_MOC]], [[03-strategy/_MOC]], [[99-log/_MOC]] |

## Folder map
- `00-context/` who Pareto is, how it sounds, how it looks: [[pareto-talent-identity]], [[brand-voice]], [[visual-identity]]
- `01-sources/` raw material, one file per source group: [[home-page]], [[matching-and-call]], [[wall-of-love]], [[existing-lead-magnets]], [[day-01-pareto-story]], [[day-10-final-project-brief]], [[final-project-guidelines]], [[bootcamp-frameworks]]
- `02-market/` three competitor lead magnets and what they have in common: [[competitor-athena-delegation-assessment]], [[competitor-magic-100-ea-tasks]], [[competitor-belay-delegation-worksheet]], [[market-patterns]]
- `03-strategy/` decisions built on the research: [[icp]], [[personas]], [[proof-bank]], [[lead-magnet-brief]]
- `99-log/` how this brain was built: [[2026-10-03-build-log]]

## Conventions
- Filenames are kebab-case. Every file has YAML frontmatter with `type`, `updated`, `source_type`, `source`, `tags`.
- Every folder has an `_MOC.md` (map of content) listing what is inside.
- Status labels: VERIFIED-SITE (printed on a Pareto page), VERIFIED-TRANSCRIPT (said on the recording), UNVERIFIED (one weak source or an estimate), CONFLICT (sources disagree), OBSERVED and INFERRED (competitor research only).
- Transcript line numbers are file line numbers in the original `.txt` files.

## Known limits
- No form was submitted anywhere. Post-opt-in steps of competitors are labelled OBSERVED (seen in public page code) or INFERRED.
- The official project guidelines document (a separate Drive folder) was not available to this build. See [[final-project-guidelines]] for what is and is not covered.
- The brain holds only Day 1 and Day 10 as transcript files; the other days are represented through [[bootcamp-frameworks]].
