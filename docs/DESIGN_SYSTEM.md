---
title: Design System Audit
authoritative: false
source: jessiorg/executivechat markdown corpus
style: clinical
---

# Design System Audit

## Summary

The repository does not expose a formal tokenized design system. It does expose a stable editorial system:

- monochrome, neutral, and low-noise presentation
- metadata-first page structure
- tables as the primary organizing primitive
- short, declarative copy
- sparse hierarchy with very little ornament

The implementation style reads closer to an operating manual than a marketing site.

## Observed foundation

| Attribute | Observed pattern | Practical reading |
|---|---|---|
| Color | No explicit palette in source | Use white, near-black, and restrained gray only |
| Typography | System-like, direct, information-dense | Use a clean sans-serif family with clear hierarchy |
| Layout | Index pages, section blocks, tables | Keep spacing functional and predictable |
| Components | MOCs, session indexes, status tables | Prefer composable records over decorative cards |
| Voice | Clinical, exact, minimally emotional | Write like an internal reference document |

## Color system

The source does not define colors directly. The visual system implied by the content is:

- background: white or very light neutral
- text: black or near-black
- borders: light neutral gray
- secondary text: muted gray
- emphasis: one restrained dark accent, used sparingly

Recommended implementation tokens:

| Token | Use |
|---|---|
| `--color-bg` | Page background |
| `--color-surface` | Panels, sheets, drawers |
| `--color-border` | Table rules, dividers, input outlines |
| `--color-text` | Primary copy |
| `--color-muted` | Metadata, hints, timestamps |
| `--color-accent` | Active state, selected nav item, link emphasis |

Clinical rule: do not add decorative color unless it carries state.

## Typography

The source favors information density over expressive typography.

Recommended stack:

- `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
- small, consistent metadata labels
- medium-weight section headings
- strong numeric and date legibility

Hierarchy:

1. page title
2. section heading
3. subgroup heading
4. task or record line
5. metadata and note text

## Spacing and structure

- generous page padding
- compact vertical rhythm inside task groups
- thin dividers instead of shadows
- left alignment for all operational content
- no decorative radius inflation

The source material uses tables to keep lists legible. This should remain the default when the data is structured.

## Component patterns

Observed reusable patterns in the repository:

- frontmatter blocks with title, type, project, status, and date
- MOC or index pages that summarize a collection
- sectioned markdown documents with stable filenames
- tables for status and inventory
- bullet lists for concise decision records
- archive separation for inactive material

Recommended UI primitives:

- shell layout
- bucket section
- area heading
- project heading
- task row
- status chip
- metadata line

## Voice and content

The writing style is dry, direct, and controlled.

Rules:

- state facts before commentary
- prefer short sentences
- avoid promotional language
- avoid exclamation points
- use labels and tables when precision matters

## Todo module translation

The Todo module should follow the Things 3 model, but rendered in the repository’s existing clinical tone.

Primary buckets:

- Today
- Upcoming
- Anytime
- Someday

Secondary grouping:

- Area headings
- Project headings

Behavior:

- Today contains the active work set
- Upcoming contains dated future work
- Anytime contains tasks with no date constraint
- Someday contains deferred work and ideas
- Areas provide broad context
- Projects sit beneath areas and collect related tasks

Visual treatment:

- flat, calm, minimal
- strong separation between buckets
- clear headings for area and project nesting
- task rows with a checkbox, title, and one-line metadata

## Supabase auth support

The structure should remain compatible with Supabase auth by keeping the following boundaries:

- `src/lib/supabase/client.ts` for browser sessions
- `src/lib/supabase/server.ts` for server session access
- `src/middleware.ts` for session hydration
- `src/components/auth/*` for login and signed-in states
- `src/pages/login.astro` or an equivalent auth entry point

No auth UI should override the neutral system.
