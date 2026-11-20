# 2026 Ivy Tech IT Challenge — Case 8: Come Back and Finish Planner

**Challenge Track:** Data Analytics, Applied Artificial Intelligence, and Informatics  
**Challenge Title:** The Future of Ivy Tech: Build the 2030 Experience with IBM Bob  
**Team Repository:** DA-08-IT-Challenge-2026

---

## Problem Statement

Returning adult students who stopped out years ago with credits don't know what still counts or how close they are to finishing. There is no easy, self-service way for them to see which of their past credits apply to a current program and how many requirements remain before they can graduate.

---

## Solution Description

A **"Come Back and Finish" credit planner** — a web-based tool that lets a returning adult student:

1. Input (or upload) a list of past courses/credits
2. Select a current Ivy Tech program
3. Instantly see which credits apply, which requirements are already met, and what remains to finish

The tool is a minimal, single-page interface backed by sample transcript data and program requirement data. It provides a clear, human-readable roadmap so the student can make a confident re-enrollment decision.

> **Seed idea (from challenge brief):** "Come back and finish" planner that shows how past credits apply to a current program. This is a starting point — the solution serves this persona and problem as defined.

---

## Selected Challenge Pillar & Persona

| Field | Value |
|---|---|
| **Persona** | Returning adult who stopped out years ago with credits |
| **Strategic Plan 2030 Pillar** | Student-Centered Journey |
| **Statewide Strategy** | Establish Transparent Success Roadmaps |
| **A-Ivy Focus Area** | Advising and success planning |
| **Seed 2030 Metric** | Re-enrollment and completion of stopped-out students |
| **Starter User Story** | *"As a returning adult, I can see how my past credits apply today so that I can finish what I started."* |

**Strategic Plan 2030 reference:** https://www.ivytech.edu/about-ivy-tech/college-operations/strategic-plan/

---

## AI Approach & Architecture

IBM Bob was used as the **core development partner** throughout the entire build:

- **Part 1 – Discover & Define:** Bob helped translate the user story into a build plan and project scaffold, and suggested a measurable 2030 metric aligned to the Strategic Plan.
- **Part 2 – Build:** Bob generated the prototype code (HTML/CSS/JS), reviewed the data model for credits vs. program requirements, and iterated on the UI to match the persona's needs.
- **Part 3 – Roadblock / Pilot Feedback:** Bob helped incorporate pilot feedback findings directly into the existing build without starting from scratch.
- **Part 4 – Ship & Defend:** Bob helped draft this README, the 2030 Impact Statement, and the IBM Bob session log.

**Data:** Sample older transcript data and made-up program requirements. No real student or employee information is used.

**A-Ivy Principles followed:**
- AI supports people and does not replace them
- Answers grounded in approved sources
- Users always have a path to a human
- Personal data is protected
- A person remains in charge of high-impact decisions
- Designed for accessibility

---

## How IBM Bob Was Used

IBM Bob served as the AI development co-pilot for every phase:

1. Turned the raw user story into a structured build plan and file scaffold
2. Generated and iterated on prototype code
3. Reviewed pilot feedback and suggested targeted code modifications to address at least two of the three findings
4. Drafted documentation (README sections, Impact Statement outline)
5. Provided architectural recommendations for keeping the solution accessible and deployable by 2030

A full log of the IBM Bob session is included in [`BOB_SESSION_LOG.md`](./BOB_SESSION_LOG.md).

---

## What You Turn In (Checklist)

- [x] Working code in this public repository with a commit history judges can follow
- [x] README with five required sections (problem, solution, AI/technical approach, pillar & persona, how IBM Bob was used)
- [x] One-page 2030 Impact Statement (`IMPACT_STATEMENT.md`)
- [x] Log of how the team and IBM Bob worked together (`BOB_SESSION_LOG.md`)
- [x] Live demonstration of the prototype running end to end — https://ivy-tech-da08-2026.pages.dev

---

## Scoring Summary (100 points)

| Part | Description | Points |
|---|---|---|
| Part 1: Discover and Define | Chosen persona, pillar, strategy, solution, and a measurable 2030 metric | 0–25 |
| Part 2: Build with IBM Bob | A working prototype or proof of concept using IBM Bob | 0–20 |
| Part 3: The Roadblock | Existing prototype modified to address at least two of three pilot feedback findings | 0–20 |
| Part 4: Ship and Defend | Public repo with complete README + Impact Statement | 0–20 |
| Documentation and Teamwork | Organized report with steps, commands, results, and active contribution from all members | 0–10 |
| Professionalism | Followed all instructions, showcased teamwork, maintained a professional approach | 0–5 |
| **Total** | | **100** |

---

## Phase Timeline

| Phase | Suggested Time | Done When |
|---|---|---|
| Part 1 – Discover & Define | 10 min | Can name persona, strategy, and at least one measurable metric |
| Part 2 – Build with IBM Bob | 30 min | Working prototype you'd be confident showing to your persona |
| Part 3 – The Roadblocks | 75 min | Working demo includes changes responding to at least two pilot findings |
| Part 4 – Finalize & Showcase | 60 min | Submission includes README + Impact Statement; prototype demoed to judges |

---

## Working Prototype

**🌐 Live demo:** https://ivy-tech-da08-2026.pages.dev

The prototype is a web app. See [`/credit-audit`](./credit-audit/) for source code. Hosted on Cloudflare Pages from the `ian` branch.

**To run locally:**
```bash
cd credit-audit
python3 -m http.server 8080
# then open http://localhost:8080
```
