# IBM Bob Collaboration Log
### Project: Come Back and Finish — Ivy Tech Credit Audit Prototype
**Session Date:** November 20, 2026
**Mode:** Plan

---

## Overview

This log captures the full dialogue between the user and IBM Bob during the planning session for the *Come Back and Finish* Credit Audit prototype. It records every prompt, every clarifying question, every decision, and every artifact produced — in the order they happened.

---

## Turn 1 — Initial Prompt

**User:**
> Become an expert on a persona and build a plan or a project scaffold to solve the problem of a returning adult who stopped out years ago with credits and does not know what still counts or how close they are to finishing. The story that should be told should follow "As a returning adult, I can see how my past credits apply today so that I can finish what I started."

**Bob's action:**
Loaded the `create-plan` skill. Began structured requirements gathering before writing any plan.

---

## Turn 2 — Clarifying Question: Project Type

**Bob asked:**
> What kind of project are we building?

**Options offered:** Web application, data pipeline, full-stack scaffold, or prototype with mock data.

**User chose:**
> A working prototype / proof-of-concept using mock data. It will include taking in a list of past courses, comparing them to a current program, and showing the remaining requirements.

---

## Turn 3 — Clarifying Question: Tech Stack

**Bob asked:**
> What tech stack should the prototype use?

**Options offered:** React + TypeScript, plain HTML/CSS/JS, Python FastAPI + frontend, Next.js full-stack.

**User chose:**
> Plain HTML/CSS/JavaScript — fast to scaffold, easy to demo in a browser with no build step.

---

## Turn 4 — Clarifying Question: How Credits Are Provided

**Bob asked:**
> How should the student's past credits be provided to the prototype?

**Options offered:** Pre-loaded mock transcript, manual form input, file upload, or persona dropdown.

**User chose:**
> Pre-loaded mock transcript hardcoded in a JSON file — the demo shows a fixed returning student persona. A sample older transcript and current program requirements.

---

## Turn 5 — Clarifying Question: Output Format

**Bob asked:**
> What should the credit audit output look like to the returning student?

**Options offered:** Three-section dashboard, progress bar + table, side-by-side view, or step-by-step wizard.

**User chose:**
> A dashboard with three sections: credits that transfer and apply, credits that are expired or no longer count, and remaining requirements still needed to graduate. A "Come back and finish" planner that shows how past credits apply to the current program.

---

## Turn 6 — Clarifying Question: Matching Rule

**Bob asked:**
> What rule determines whether a past credit "still counts" vs. is "expired"?

**Options offered:** Age-based expiry, course equivalency only, both combined, or keep it simple for prototype.

**User chose:**
> Keep it simple for the prototype — all past credits match if the subject area aligns; expiry logic can be added later.

---

## Turn 7 — Clarifying Question: Degree Program

**Bob asked:**
> What degree program should the mock data represent?

**Options offered:** BS Computer Science, AA Business Administration, BS Nursing, or generic "Bachelor of Applied Studies."

**User chose:**
> Keep it generic — a fictional "Bachelor of Applied Studies" so the concept is universally clear without domain specifics.

---

## Turn 8 — First Plan Produced

**Bob's action:**
Wrote the initial plan file at [`docs/implementation-plan.md`](../docs/implementation-plan.md) with:
- Top-level prototype overview
- Five sub-tasks: scaffold, mock data, matching engine, dashboard UI, README
- Data flow diagram
- Out-of-scope list

Bob then presented the plan in chat with a Mermaid data flow diagram, a sub-task summary table, and three validation questions for the user.

---

## Turn 9 — Pivot: Strategic Foundation First

**User:**
> Back track. Create a chosen persona, pillar, solution, and a measurable 2030 metric.

**Bob's action:**
Recognized the request as a shift from prototype-first to strategy-first. Asked one clarifying question before rewriting.

**Bob asked:**
> What institution or organization context is this for?

**Options offered:** University/community college, state/national workforce initiative, edtech product, or institution-agnostic.

**User chose:**
> A university or community college — the metric should tie to completion rates, re-enrollment numbers, or degrees conferred.

Bob then asked a follow-up about persona depth (rich individual vs. segmented archetype). The user cancelled that question and said:

---

## Turn 10 — Strategic Anchor: Ivy Tech 2030

**User:**
> The metric should be anchored to Ivy Tech's Strategic Plan 2030; Student-Centered Journey.

**Bob's action:**
Attempted to browse the provided URL (`https://www.ivytech.edu/about-ivy-tech/college-operations/strategic-plan`) — confirmed it cannot browse live URLs. Asked the user to provide key details directly or confirm use of the publicly known pillar name.

**User confirmed:**
> The specific pillar is "Student-Centered Journey" — use that name, the general goal of improving completion rates for returning adults, and make the 2030 metric about re-enrolled stop-out students who complete a credential.

---

## Turn 11 — Plan Rewritten with Strategic Foundation

**Bob's action:**
Rewrote [`returning-adult-credit-audit-plan.md`](returning-adult-credit-audit-plan.md) entirely, prepending a full **Strategic Foundation** section before the prototype sub-tasks. The four layers added:

**Persona — Jordan Rivera**
- Age 34, Indianapolis, warehouse supervisor, single parent
- Stopped out 2016 with 58 credits after family health crisis
- Employer requiring credential for promotion already earned
- Core need: *"Tell me what I already have and show me what's left."*
- Barriers: uncertainty about which credits count, no time for advisor appointments, distrust from prior experience
- Motivations: promotion, children, personal pride

**Pillar — Ivy Tech Strategic Plan 2030: Student-Centered Journey**
- Commits to removing friction across the student lifecycle
- Targets stop-out students specifically
- Focuses on credit recognition, re-enrollment barriers, and adult learner support

**Solution — Credit Audit Dashboard: "Come Back and Finish"**
- Three-question, three-section dashboard
- Design principle: student answers "Am I closer than I thought?" before closing the tab

**Measurable 2030 Metric**
- Goal: 1,000 Ivy Tech stop-out students per year complete a credential within 24 months of return by Dec 31, 2030
- Metric ladder: prototype engagement → pilot conversion → 2030 completion

---

## Turn 12 — README Requested

**User:**
> Now create a README with five sections: the problem, the solution, the AI or technical approach, the pillar and statewide strategy, and how IBM Bob was used.

**Bob's action:**
Wrote [`README.md`](README.md) at the workspace root with the five sections as specified:

1. **The Problem** — Jordan Rivera's story; the systemic stop-out problem; the wall of uncertainty
2. **The Solution** — The Credit Audit Dashboard; the three sections; the design principle
3. **The Technical Approach** — Architecture diagram; key components; matching rule; run instructions
4. **The Pillar and Statewide Strategy** — Ivy Tech 2030 Student-Centered Journey; full metric ladder
5. **How IBM Bob Was Used** — Four steps: strategic framing, foundation building, plan writing, README authoring; what this demonstrates about Bob as a planning partner

---

## Turn 13 — Collaboration Log Requested

**User:**
> Extract the logs of how we worked together.

**Bob's action:**
Read the current state of [`README.md`](../README.md) to confirm external edits were preserved. Wrote this collaboration log at [`logs/collaboration-log.md`](collaboration-log.md).

---

## Artifacts Produced

| File | Description |
|---|---|
| [`docs/implementation-plan.md`](../docs/implementation-plan.md) | Full implementation plan with strategic foundation + 5 prototype sub-tasks |
| [`README.md`](../README.md) | Project-facing narrative document with 5 sections |
| [`logs/collaboration-log.md`](collaboration-log.md) | This file — full session log |

---

## Decision Log

| Decision | Chosen Direction | Rationale |
|---|---|---|
| Project type | Prototype with mock data | Fastest path to demonstrating the user story without backend complexity |
| Tech stack | Plain HTML/CSS/JS | No build step, runs in any browser, shareable in a folder |
| Credit input | Pre-loaded JSON transcript | Keeps demo focused; file upload is a future enhancement |
| Output format | Three-section dashboard + banner | Matches the three questions every stop-out student actually has |
| Matching rule | Subject-area alignment only | Simple enough to build and explain in a demo; expiry rules deferred |
| Degree program | Generic "Bachelor of Applied Studies" | Domain-neutral; keeps the concept universally legible |
| Institution anchor | Ivy Tech Community College | Ties the prototype to a real strategic plan and real student population |
| 2030 metric | 1,000 stop-out credential completions/year | Specific, countable, directly tied to Student-Centered Journey pillar |

---

## What Bob Did Not Do

- Did not speculate about Ivy Tech's strategic plan numbers — confirmed the pillar name with the user before writing
- Did not browse a live URL — was transparent about that limitation and asked for confirmation
- Did not start writing code or scaffolding until the strategy was confirmed
- Did not invent persona details beyond what was needed to make the story credible and functional
- Did not add scope (authentication, real SIS integration, mobile-first design) beyond what was requested

---

*Session conducted in IBM Bob — Plan mode.*
*All artifacts are saved in the workspace at `/Users/oomeh/.bob/playground/`.*
