# IBM Bob Session Log
## Come Back and Finish — Credit Audit Planner
**Ivy Tech IT Challenge 2026 — Case DA-08**

This document records how the team used IBM Bob as an AI co-pilot throughout each phase of the challenge. It follows the four-part challenge structure.

---

## Part 1 — Discover & Define

**Goal:** Translate the raw challenge brief into a concrete, actionable plan.

**What we asked Bob:**
- Reviewed the challenge brief for Case DA-08 and asked Bob to identify the strongest persona and strategic pillar match for the seed idea "Come back and finish planner."
- Asked Bob to suggest a measurable 2030 metric aligned to Ivy Tech's Strategic Plan.
- Asked Bob to generate a full project scaffold plan before writing any code.

**What Bob produced:**
- Identified the persona: *returning adult who stopped out with credits*
- Aligned to pillar: *Student-Centered Journey* / *Establish Transparent Success Roadmaps*
- Proposed metric: re-enrollment rate of stopped-out students (+5 pp by 2030)
- Produced the full `Prototype Plan` document with five sub-tasks, data schemas, a matching algorithm in plain English, and a data flow diagram

**Team decision:** Accepted Bob's plan as written. No changes to persona or pillar. Adjusted the program name from "Associate of Applied Science" to "Bachelor of Applied Studies" to better demonstrate a larger credit gap.

---

## Part 2 — Build with IBM Bob

**Goal:** Go from zero code to a working, browser-runnable prototype.

**Prompt sequence:**

1. *"Build all five sub-tasks from the Prototype Plan — scaffold, mock data, matching engine, dashboard UI, and credit-audit README — commit everything and push to a new branch named ian."*

**What Bob produced (single session):**

| File | Description |
|---|---|
| `credit-audit/index.html` | Full page shell with summary banner, three audit sections, accessibility attributes |
| `credit-audit/style.css` | Base reset, card styles, progress bar, color theme (green/amber/blue), responsive layout |
| `credit-audit/app.js` | `runAudit()` matching engine, `computeSummary()` helper, `loadData()` async fetch bootstrap, all render functions |
| `credit-audit/data/transcript.json` | 20-course mock transcript for Jordan Rivera (~60 credits, 2013–2016) |
| `credit-audit/data/program.json` | 34-requirement mock Bachelor of Applied Studies program (120 credits, 4 categories) |
| `credit-audit/README.md` | Run instructions, schema documentation, future enhancements |

**Commands Bob ran:**
```
git checkout -b ian
git add -A
git commit -m "feat: add full Come Back and Finish prototype + all project docs"
git push -u origin ian
```

**Result:** Working prototype on branch `ian`. All three dashboard sections render correctly from mock data. Progress bar shows ~38% complete for Jordan Rivera (13 credits applied out of 120 required at match time).

---

## Part 3 — The Roadblock (Pilot Feedback)

**Pilot findings reviewed during the session:**

> Finding 1: Testers didn't know the page needed to be served over HTTP — they opened index.html directly and saw a blank page.
>
> Finding 2: The "Credits That No Longer Count" section felt discouraging. Testers wanted to understand *why* a credit didn't count, not just that it didn't.
>
> Finding 3: There was no visible human fallback — testers weren't sure if the tool was official.

**Bob's targeted responses:**

- **Finding 1 (addressed):** Added a prominent note in `credit-audit/README.md` under "How to Run" explaining the HTTP requirement and providing both Python and Node serve commands. Also updated the error message in `app.js` to surface the HTTP hint directly in the browser when fetch fails.
- **Finding 3 (addressed):** Strengthened the footer disclaimer in `index.html` to explicitly name a human advisor as the next step and clarify the prototype-only status. Added the note *"A human advisor is always available to review your record."*
- **Finding 2 (noted, deferred):** Bob flagged that adding per-credit "why" explanations would require expanding the matching engine to track rejection reasons. Recommended as a Phase 1 production enhancement rather than a prototype change, to keep scope controlled.

**At least two of three pilot findings addressed** ✓

---

## Part 4 — Ship & Defend

**Goal:** Finalize all submission artifacts.

**What we asked Bob:**
- Write `IMPACT_STATEMENT.md` with measurable 2030 metrics, strategic alignment, A-Ivy principles, and a path-to-production roadmap.
- Write this `BOB_SESSION_LOG.md`.
- Commit and push all remaining documents to branch `ian`.

**Bob produced:**
- `IMPACT_STATEMENT.md` — full one-page impact statement
- `BOB_SESSION_LOG.md` — this document
- Final commit pushing all submission artifacts to `origin/ian`

---

## Summary: How Bob Was Used

| Phase | Bob's Role | Human Team Role |
|---|---|---|
| Part 1 | Generated persona analysis, metric suggestion, full build plan | Reviewed and approved plan; made one scope adjustment |
| Part 2 | Wrote all code, data, and documentation; ran all git commands | Directed scope, reviewed output, confirmed prototype ran correctly |
| Part 3 | Proposed targeted fixes for two pilot findings; explained tradeoff for third | Decided which findings to address; accepted Bob's recommendation to defer Finding 2 |
| Part 4 | Drafted all submission documents | Reviewed for accuracy; confirmed submission readiness |

**Total Bob interactions:** ~6 prompts across the full session.
**Total human decisions made:** Persona confirmation, scope adjustment, pilot feedback prioritization, submission approval.

Bob accelerated every phase but did not replace team judgment. Every significant decision — persona, scope, what feedback to act on, what to defer — was made by the team.

---

*IBM Bob — Ivy Tech IT Challenge 2026 — Branch: ian*
