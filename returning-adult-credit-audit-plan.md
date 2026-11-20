# Returning Adult Credit Audit — Prototype Plan

## User Story

> "As a returning adult, I can see how my past credits apply today so that I can finish what I started."

---

## Top-Level Overview

Build a **plain HTML/CSS/JavaScript prototype** (no framework, no build step) that demonstrates the full user story for a returning adult student.

The prototype loads a **mock transcript** (old credits) and a **mock degree program** (current requirements for a fictional *Bachelor of Applied Studies*) from JSON files. It then runs a simple **subject-area matching engine** to produce a **three-section credit audit dashboard**:

1. **Credits That Apply** — past courses whose subject area matches a current requirement.
2. **Credits That No Longer Count** — past courses with no match in the current program.
3. **Remaining Requirements** — current degree requirements not yet satisfied by any past credit.

A "**Come Back and Finish**" summary banner ties the three sections together and tells the student concisely where they stand.

**Scope:**
- Greenfield project — no existing codebase.
- Mock data only; no backend, no authentication.
- Expiry logic is explicitly out of scope for this prototype; it can be layered in later.
- Code must run by opening `index.html` directly in a browser.

---

## Sub-Tasks

---

### Sub-Task 1 — Project Scaffold

**Status:** `[ ] pending`

**Intent:**
Create the folder structure and empty files so every subsequent sub-task has a stable home. Establishing the scaffold first prevents merge conflicts and makes the project immediately openable in a browser (even if blank).

**Expected Outcomes:**
- A folder `credit-audit/` exists at the workspace root.
- It contains `index.html`, `style.css`, `app.js`, and a `data/` folder with two empty JSON files.
- Opening `index.html` in a browser shows a blank page with no console errors.

**Todo List:**
1. Create `credit-audit/` directory.
2. Create `credit-audit/index.html` with standard HTML5 boilerplate, a `<link>` to `style.css`, and a `<script src="app.js">` tag.
3. Create `credit-audit/style.css` as an empty file.
4. Create `credit-audit/app.js` as an empty file (single `console.log("audit ready")` to confirm load).
5. Create `credit-audit/data/transcript.json` as an empty JSON object `{}`.
6. Create `credit-audit/data/program.json` as an empty JSON object `{}`.

**Relevant Context:**
- No dependencies. This sub-task has no predecessor.

---

### Sub-Task 2 — Mock Data: Transcript + Degree Program

**Status:** `[ ] pending`

**Intent:**
Define the two data contracts that every other part of the prototype depends on. Getting the shape right here means the matching engine and the UI can be built against a stable schema.

**Expected Outcomes:**
- `data/transcript.json` contains a realistic mock transcript for a fictional returning student ("Jordan Rivera") who stopped out 8 years ago with ~60 credits toward a Bachelor of Applied Studies.
- `data/program.json` contains the full current degree requirements for the Bachelor of Applied Studies (120 credits total, organized by subject area/category).
- Both files are valid JSON and satisfy the schema described below.

**Schemas:**

`transcript.json`
```json
{
  "student": {
    "name": "Jordan Rivera",
    "id": "STU-2016-00492",
    "lastEnrolled": "2016-05-15"
  },
  "credits": [
    {
      "courseCode": "ENG-101",
      "title": "English Composition I",
      "subjectArea": "English",
      "credits": 3,
      "grade": "B",
      "yearTaken": 2013
    }
  ]
}
```

`program.json`
```json
{
  "program": "Bachelor of Applied Studies",
  "totalCreditsRequired": 120,
  "requirements": [
    {
      "id": "REQ-ENG-1",
      "title": "English Composition I",
      "subjectArea": "English",
      "credits": 3,
      "category": "General Education"
    }
  ]
}
```

**Todo List:**
1. Populate `transcript.json` with ~15 past courses across varied subject areas (English, Math, Sciences, Social Sciences, Electives) totaling ~60 credits, with realistic grades and years (2012–2016).
2. Populate `program.json` with ~30–35 requirements across categories: General Education, Core Requirements, Concentration, Electives — totaling 120 credits.
3. Ensure there is deliberate overlap (some transcript courses match program requirements) and deliberate gaps (some transcript courses have no match, some program requirements have no match) to make the demo compelling.

**Relevant Context:**
- The `subjectArea` field is the **matching key** used by the engine in Sub-Task 3.
- Categories in `program.json` are used for grouping in the UI (Sub-Task 4).

---

### Sub-Task 3 — Credit Matching Engine (`app.js`)

**Status:** `[ ] pending`

**Intent:**
Implement the core logic that takes the two JSON data sets and produces three classified lists: applied credits, unmatched credits, and remaining requirements. This is the "brain" of the prototype.

**Expected Outcomes:**
- `app.js` exports (or defines in module scope) a `runAudit(transcript, program)` function.
- The function returns an object with three arrays: `applied`, `unmatched`, `remaining`.
- Matching rule: a transcript credit **applies** if its `subjectArea` matches the `subjectArea` of an unmet program requirement. Each requirement can only be satisfied once (first match wins).
- Credits with no matching requirement land in `unmatched`.
- Requirements with no matching credit land in `remaining`.
- The function is covered by inline comments explaining each step.

**Matching Algorithm (plain English):**
1. Copy all program requirements into a "pending requirements" pool.
2. For each transcript credit, search the pending pool for a requirement with the same `subjectArea`.
3. If found: move the credit to `applied`, remove the requirement from the pending pool.
4. If not found: move the credit to `unmatched`.
5. Whatever remains in the pending pool becomes `remaining`.

**Todo List:**
1. Write the `runAudit(transcript, program)` function in `app.js`.
2. Add a `computeSummary(auditResult)` helper that returns: total credits applied, total credits still needed, percentage complete (applied / total required × 100).
3. Add a `loadData()` async function that fetches both JSON files using the Fetch API and calls `runAudit`.
4. Call `loadData()` on `DOMContentLoaded`.

**Relevant Context:**
- Fetch API works for local JSON files when served over HTTP (e.g., `python3 -m http.server`). Note in a README that the page should be served, not opened as a `file://` URL, to avoid CORS on fetch.
- No external libraries — vanilla JS only.

---

### Sub-Task 4 — Dashboard UI (`index.html` + `style.css`)

**Status:** `[ ] pending`

**Intent:**
Build the visual interface that presents the audit results to the returning student in three clear sections plus a summary banner. The UI should feel clear and encouraging, not bureaucratic.

**Expected Outcomes:**
- Page loads and renders the full dashboard from the mock data with no manual interaction.
- **Summary Banner ("Come Back and Finish")** at the top: student name, credits applied, credits remaining, percentage complete shown as a progress bar.
- **Section 1 — Credits That Apply**: a card or table row for each applied credit, showing course title, subject area, and the requirement it satisfies.
- **Section 2 — Credits That No Longer Count**: a card or muted row for each unmatched credit, with a note "No matching requirement in current program."
- **Section 3 — Remaining Requirements**: grouped by category (General Education, Core, etc.), each showing requirement title, subject area, and credits needed.
- Responsive enough to be readable on a laptop screen.
- Color coding: green for applied, amber/yellow for unmatched, blue/neutral for remaining.

**Todo List:**
1. Add the HTML skeleton to `index.html`: header with student name + program title, summary banner div, three section divs with placeholder headings.
2. Write JavaScript in `app.js` to render each section by building DOM elements from the audit result arrays and appending them to the section divs.
3. Write `style.css`: base reset, card styles, progress bar, color theme for each section (green/amber/blue), responsive layout using CSS Grid or Flexbox.
4. Add a footer note: "This is a prototype using sample data. Contact your advisor to confirm your official credit evaluation."

**Relevant Context:**
- DOM rendering is done in `app.js` after `runAudit` returns — keep rendering functions separate from logic functions.
- Section headings should include a count badge (e.g., "Credits That Apply (12)") computed from the audit result arrays.

---

### Sub-Task 5 — README + Demo Instructions

**Status:** `[ ] pending`

**Intent:**
Make the prototype immediately runnable by anyone who clones or opens the folder, and document how the mock data can be modified to demonstrate different student scenarios.

**Expected Outcomes:**
- `credit-audit/README.md` exists and explains: what the prototype does, how to run it (serve locally), how to modify the mock transcript to show a different student, and what future enhancements could look like.

**Todo List:**
1. Write `README.md` with a one-paragraph project description and the user story.
2. Add a "How to Run" section with the `python3 -m http.server 8080` command and browser URL.
3. Add a "Mock Data" section explaining the two JSON schemas and how to swap in a different transcript.
4. Add a "Future Enhancements" section listing: advisor review flag for old credits, file upload for real transcripts, credit expiry rules, degree pathway recommendations.

**Relevant Context:**
- No build tools, no `npm install` — keep setup instructions to two steps.

---

## Data Flow Summary

```
transcript.json  ──┐
                   ├──► runAudit() ──► { applied, unmatched, remaining }
program.json    ──┘                              │
                                                 ▼
                                      renderDashboard()
                                      ┌─────────────────────────┐
                                      │  Come Back and Finish   │  ← summary banner
                                      │  Progress: ██████░░ 58% │
                                      ├─────────────────────────┤
                                      │  ✅ Credits That Apply  │
                                      │  ⚠️  No Longer Count    │
                                      │  📋 Still Needed        │
                                      └─────────────────────────┘
```

---

## Out of Scope (Prototype)

- User authentication or student login
- Real transcript import or SIS integration
- Credit expiry / age-based rules
- Advisor workflow or approval steps
- Mobile-first / accessibility audit
- Degree pathway or course scheduling recommendations
