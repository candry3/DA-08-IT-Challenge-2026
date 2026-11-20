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

**Architecture:**

```
data/transcript.json  ──┐
                         ├──► runAudit()  ──► { applied, unmatched, remaining }
data/program.json     ──┘         │
                                  ▼
                         computeSummary()  ──► credits applied, % complete
                                  │
                         renderDashboard() ──► DOM sections + progress bar
```

**Key components:**

- **`data/transcript.json`** — Jordan Rivera's mock transcript: 15 past courses, ~58 credits, subject areas spanning English, Math, Sciences, Social Sciences, and Electives, taken 2013–2016.
- **`data/program.json`** — The Bachelor of Applied Studies program: ~32 requirements, 120 credits total, organized into General Education, Core Requirements, Concentration, and Electives.
- **`runAudit(transcript, program)`** — The matching engine. For each past credit, it searches the current program requirements for a matching `subjectArea`. Matched credits are classified as *applied*; unmatched credits are flagged; unmet requirements become the remaining list.
- **`computeSummary(auditResult)`** — Computes credits applied, credits still needed, and percentage complete.
- **`renderDashboard()`** — Builds the DOM from the audit result. Rendering is kept strictly separate from logic.

**Matching rule (prototype):** Subject-area alignment. A past credit applies if its subject area matches the subject area of an unmet current requirement. Each requirement can only be satisfied once. Credit expiry rules and course-code equivalency matching are future enhancements.

**To run:**
```bash
cd credit-audit
python3 -m http.server 8080
# Open http://localhost:8080
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
Bob produced a structured implementation plan in [`returning-adult-credit-audit-plan.md`](returning-adult-credit-audit-plan.md) breaking the prototype into five independently executable sub-tasks — scaffold, mock data, matching engine, dashboard UI, and README — each with intent, expected outcomes, ordered steps, and relevant context. The plan is designed to be handed to Bob's Agent mode for implementation, one sub-task at a time.

**Step 4 — Writing this README.**
Bob authored this README from the plan's strategic foundation, translating the technical plan into a narrative that works for a dean, a product owner, a developer, and a student — all at once.

**What this demonstrates:**
IBM Bob is not just a code generator. It is a planning partner that asks the right questions, maintains discipline between strategy and implementation, grounds every claim in evidence, and produces artifacts that are ready to use — not prompts that require extensive cleanup. The entire arc from "here is a user story" to a grounded plan with persona, pillar, metric, prototype architecture, and project README was accomplished in a single planning session.

---

*Prototype built for Ivy Tech Community College — Strategic Plan 2030, Student-Centered Journey.*
*This is a demonstration using mock data. No real student records were used.*
