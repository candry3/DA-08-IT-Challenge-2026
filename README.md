# Come Back and Finish
### A Credit Audit Tool for Returning Adult Learners at Ivy Tech Community College

---

## 1. The Problem

Ivy Tech has tens of thousands of Hoosiers who started college, earned real credits, and stopped out before finishing. They did not fail — life intervened. A family crisis. A job offer that couldn't wait. A rent payment that couldn't.

For years, those credits have sat unclaimed, and the path back has felt impossibly unclear.

Meet **Jordan Rivera**.

Jordan enrolled at Ivy Tech in 2013, earned 58 credits toward a Bachelor of Applied Studies, and stopped out in 2016. Today, Jordan is a 34-year-old warehouse supervisor in Indianapolis — a single parent — whose employer is requiring a credential for a promotion that has already been earned on the floor. Jordan knows those old transcripts exist somewhere, but has no idea which credits still count, how close the finish line actually is, or whether starting over is even worth it.

The uncertainty is the wall.

> *"Tell me what I already have and show me what's left. Don't make me start over."*

This is not Jordan's problem alone. It is a systemic one. Stop-out students are not new students — they are returning students who deserve a different experience than a first-time enrollee. Today, getting that answer requires scheduling an advisor appointment, waiting, and navigating a process designed for people with far more time than Jordan has. Most stop-out students never make it past that friction.

---

## 2. The Solution

**Come Back and Finish** is a Credit Audit Dashboard that gives a returning student — in one session, without an appointment — a plain-language answer to three questions:

| Question | Dashboard Section |
|---|---|
| What credits do I already have that count toward my degree today? | ✅ Credits That Apply |
| What credits I took no longer fit the current program? | ⚠️ Credits That No Longer Count |
| What do I still need to finish? | 📋 Remaining Requirements |

A **"Come Back and Finish" summary banner** at the top of the dashboard shows the student their name, the number of credits that apply, a visual progress bar toward the 120-credit goal, and how many credits remain.

The design principle is simple: **the student should be able to answer "Am I closer than I thought?" before they close the tab.**

This prototype demonstrates the full experience using Jordan Rivera's mock transcript and the current Bachelor of Applied Studies requirements. No advisor appointment needed. No login. No forms to fill out. Just an honest answer.

---

## 3. The Technical Approach

The prototype is built with **plain HTML, CSS, and JavaScript** — no framework, no build step, no dependencies. It runs by serving a single folder from a local HTTP server.

**Repository structure:**

```
DA-08-IT-Challenge-2026/
├── README.md                          ← This file
├── prototype/
│   └── credit-audit-dashboard.html   ← Working prototype (open in browser)
├── presentation/
│   └── slides.html                   ← Full presentation deck
├── docs/
│   ├── impact-statement.md           ← One-page impact summary
│   ├── implementation-plan.md        ← Full prototype build plan (5 sub-tasks)
│   ├── future-vision.md              ← How this connects to the 2030 future of college
│   ├── persona.md                    ← Four strategic layers (persona, pillar, solution, metric)
│   └── strategic-pillars.docx        ← Ivy Tech 2030 Strategic Pillars reference
├── source-data/
│   ├── case_data.js                  ← All CSV data as a single JS-loadable file
│   ├── student.csv
│   ├── older_transcript.csv
│   ├── program_requirements.csv
│   ├── course_mapping.csv
│   ├── holds.csv
│   └── spring_2027_schedule.csv
├── challenge-instructions/
│   └── challenge-brief-page-[1-5].jpg
├── assets/
│   └── qr-code.png
└── logs/
    └── collaboration-log.md          ← Full IBM Bob planning session log
```

**Architecture:**

```
source-data/older_transcript.csv  ──┐
                                     ├──► runAudit()  ──► { applied, unmatched, remaining }
source-data/program_requirements.csv ┘         │
                                               ▼
                                     computeSummary()  ──► credits applied, % complete
                                               │
                                     renderDashboard() ──► DOM sections + progress bar
```

**Key components (all self-contained in `prototype/credit-audit-dashboard.html`):**

- **Transcript data** — Renee (S5001): 14 past courses, Fall 2017–Spring 2019, sourced from `source-data/older_transcript.csv`.
- **Program data** — Three selectable programs (Business AAS, Business Ops Certificate, HR Certificate) from `source-data/program_requirements.csv`.
- **`runAudit()`** — The matching engine. For each past credit, searches the current program for a matching course. Matched credits are classified as *applied*; unmatched are flagged.
- **`computeSummary()`** — Computes credits applied, credits still needed, and percentage complete.
- **`renderDashboard()`** — Builds the DOM from the audit result. Rendering is kept strictly separate from logic.

**Matching rule (prototype):** Course equivalency + subject-area alignment. The prototype also handles retired course remapping (e.g., IVYT 101 → COLL 101) and grade-based applicability. Credit expiry rules are a future enhancement.

**To run:**
```bash
# Just open the file — no server needed
open prototype/credit-audit-dashboard.html
```

---

## 4. The Pillar and Statewide Strategy

This project is a direct expression of Ivy Tech's **Strategic Plan 2030 — Student-Centered Journey** pillar.

The Student-Centered Journey pillar commits Ivy Tech to removing friction at every stage of the student lifecycle — from first contact through credential completion — with a specific focus on students who already have a relationship with the college. It recognizes that stop-out students are not strangers. They are Ivy Tech students who left and deserve a clear, respectful path back.

The pillar targets:
- Proactive, personalized outreach to stop-out students
- Seamless credit recognition and transfer pathways
- Reduction of administrative barriers that delay re-enrollment decisions
- Support structures that meet adult learners where they are in life

**Come Back and Finish** operationalizes these commitments as a student-facing tool.

**Measurable 2030 Goal:**

By December 31, 2030, **1,000 Ivy Tech stop-out students per year** who use the Credit Audit Dashboard re-enroll and complete a credential within 24 months of their return.

| Stage | Metric | Target |
|---|---|---|
| Prototype | Demo viewers who ask a re-enrollment follow-up question | > 60% |
| Pilot — Year 1 | Stop-out students who begin an application after using the tool | 25% conversion |
| **2030** | **Stop-out students who complete a credential after returning** | **1,000 / year** |

Every credential conferred to a stop-out student who returned because they finally understood their progress is a counted outcome under Ivy Tech's 2030 completion goals. Jordan Rivera is not a demographic. Jordan is the person this strategy was written for.

---

## 5. How IBM Bob Was Used

IBM Bob — an AI-powered technical planning and development assistant — was used to accelerate every phase of this project from first idea to working prototype plan.

**Step 1 — Persona and strategic framing.**
The conversation started with a user story: *"As a returning adult, I can see how my past credits apply today so that I can finish what I started."* Bob was prompted to think like a product strategist, not just a developer. Through a structured dialogue, Bob asked clarifying questions about the institution, the audience, and the intended outcome before writing a single line of plan. This discipline — anchoring to strategy before jumping to code — is core to how Bob operates.

**Step 2 — Building the strategic foundation.**
Bob constructed the four-layer strategic foundation: the persona (Jordan Rivera), the pillar (Ivy Tech 2030 Student-Centered Journey), the solution framing (Credit Audit Dashboard), and the measurable 2030 metric (1,000 stop-out credential completions per year). Each layer was grounded in the user's answers — Bob did not speculate or invent numbers it could not support.

**Step 3 — Writing the plan.**
Bob produced a structured implementation plan in [`docs/implementation-plan.md`](docs/implementation-plan.md) breaking the prototype into five independently executable sub-tasks — scaffold, mock data, matching engine, dashboard UI, and README — each with intent, expected outcomes, ordered steps, and relevant context. The plan is designed to be handed to Bob's Agent mode for implementation, one sub-task at a time.

**Step 4 — Writing this README.**
Bob authored this README from the plan's strategic foundation, translating the technical plan into a narrative that works for a dean, a product owner, a developer, and a student — all at once.

**What this demonstrates:**
IBM Bob is not just a code generator. It is a planning partner that asks the right questions, maintains discipline between strategy and implementation, grounds every claim in evidence, and produces artifacts that are ready to use — not prompts that require extensive cleanup. The entire arc from "here is a user story" to a grounded plan with persona, pillar, metric, prototype architecture, and project README was accomplished in a single planning session.

---

*Prototype built for Ivy Tech Community College — Strategic Plan 2030, Student-Centered Journey.*
*This is a demonstration using mock data. No real student records were used.*
