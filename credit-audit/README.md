# Credit Audit Prototype — Come Back and Finish Planner

> *"As a returning adult, I can see how my past credits apply today so that I can finish what I started."*

A plain HTML/CSS/JavaScript tool that takes a mock student transcript and a mock degree program and instantly shows:

1. **Credits That Apply** — past courses whose subject area matches a current requirement
2. **Credits That No Longer Count** — past courses with no match in the current program
3. **Still Needed to Graduate** — program requirements not yet satisfied

No build tools. No login. No server-side code. Open one file and you're done.

---

## How to Run

The page fetches JSON files at runtime, so it must be served over HTTP — not opened as a `file://` URL.

**Option 1 — Python (fastest)**
```bash
cd credit-audit
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

**Option 2 — Node `serve`**
```bash
npx serve credit-audit
```

That's it. No `npm install`, no build step.

---

## File Structure

```
credit-audit/
├── index.html          # Page shell + section scaffolding
├── style.css           # All styling (reset, cards, progress bar, colors)
├── app.js              # Matching engine + DOM rendering
└── data/
    ├── transcript.json # Mock student transcript (Jordan Rivera)
    └── program.json    # Mock degree requirements (Bachelor of Applied Studies)
```

---

## Mock Data

### `data/transcript.json`

Represents a fictional returning student — **Jordan Rivera** — who last enrolled in May 2016 with approximately 60 earned credits across English, Math, Sciences, Social Sciences, and electives.

Schema:
```json
{
  "student": { "name": "...", "id": "...", "lastEnrolled": "YYYY-MM-DD" },
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

To demo a different student, replace the `student` object and swap the `credits` array with any courses you like. The **`subjectArea` field is the matching key** — it must match a `subjectArea` in `program.json` for a credit to apply.

### `data/program.json`

Represents the current **Bachelor of Applied Studies** (120 credits total) with requirements across four categories: General Education, Core Requirements, Concentration, and Electives.

Schema:
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

---

## Future Enhancements

- **Advisor review flag** — mark old credits (10+ years) for human advisor confirmation before applying
- **File upload** — let students paste or upload a real transcript instead of editing JSON
- **Credit expiry rules** — automatically flag courses that fall outside an institution's freshness window
- **Degree pathway recommendations** — suggest which remaining requirements to take first based on prerequisites
- **SIS integration** — pull live transcript data from Ivy Tech's student information system
- **Accessibility audit** — full WCAG 2.1 AA pass, screen-reader testing
