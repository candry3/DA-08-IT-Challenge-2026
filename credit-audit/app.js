// ============================================================
// Credit Audit — app.js
// Come Back and Finish Planner — Ivy Tech IT Challenge 2026
// Data is inlined so the page works on any static host (no fetch needed)
// ============================================================

// ------------------------------------------------------------------
// 1. INLINE DATA
// ------------------------------------------------------------------

const TRANSCRIPT = {
  "student": {
    "name": "Jordan Rivera",
    "id": "STU-2016-00492",
    "lastEnrolled": "2016-05-15"
  },
  "credits": [
    { "courseCode": "ENG-101",  "title": "English Composition I",           "subjectArea": "English",                   "credits": 3, "grade": "B",  "yearTaken": 2013 },
    { "courseCode": "ENG-102",  "title": "English Composition II",          "subjectArea": "English Composition II",    "credits": 3, "grade": "B+", "yearTaken": 2013 },
    { "courseCode": "MAT-121",  "title": "College Algebra",                 "subjectArea": "Mathematics",               "credits": 3, "grade": "C+", "yearTaken": 2013 },
    { "courseCode": "MAT-211",  "title": "Calculus I",                      "subjectArea": "Calculus",                  "credits": 4, "grade": "C",  "yearTaken": 2014 },
    { "courseCode": "BIO-101",  "title": "Introduction to Biology",         "subjectArea": "Biology",                   "credits": 3, "grade": "A",  "yearTaken": 2013 },
    { "courseCode": "BIO-101L", "title": "Introduction to Biology Lab",     "subjectArea": "Biology Lab",               "credits": 1, "grade": "A",  "yearTaken": 2013 },
    { "courseCode": "CHE-101",  "title": "Introduction to Chemistry",       "subjectArea": "Chemistry",                 "credits": 3, "grade": "B-", "yearTaken": 2014 },
    { "courseCode": "PSY-101",  "title": "Introduction to Psychology",      "subjectArea": "Psychology",                "credits": 3, "grade": "A",  "yearTaken": 2013 },
    { "courseCode": "SOC-111",  "title": "Introduction to Sociology",       "subjectArea": "Sociology",                 "credits": 3, "grade": "A-", "yearTaken": 2014 },
    { "courseCode": "HIS-101",  "title": "World History I",                 "subjectArea": "History",                   "credits": 3, "grade": "B",  "yearTaken": 2014 },
    { "courseCode": "COM-101",  "title": "Introduction to Communication",   "subjectArea": "Communication",             "credits": 3, "grade": "A",  "yearTaken": 2015 },
    { "courseCode": "CIS-101",  "title": "Introduction to Computers",       "subjectArea": "Computer Information Systems","credits": 3, "grade": "A", "yearTaken": 2015 },
    { "courseCode": "BUS-101",  "title": "Introduction to Business",        "subjectArea": "Business",                  "credits": 3, "grade": "B",  "yearTaken": 2015 },
    { "courseCode": "ECO-201",  "title": "Macroeconomics",                  "subjectArea": "Economics",                 "credits": 3, "grade": "B+", "yearTaken": 2015 },
    { "courseCode": "PHI-101",  "title": "Introduction to Philosophy",      "subjectArea": "Philosophy",                "credits": 3, "grade": "B",  "yearTaken": 2015 },
    { "courseCode": "ART-101",  "title": "Art Appreciation",                "subjectArea": "Fine Arts",                 "credits": 3, "grade": "A-", "yearTaken": 2016 },
    { "courseCode": "PED-101",  "title": "Physical Education",              "subjectArea": "Physical Education",        "credits": 1, "grade": "A",  "yearTaken": 2013 },
    { "courseCode": "NUR-110",  "title": "Introduction to Nursing Concepts","subjectArea": "Nursing",                   "credits": 3, "grade": "C",  "yearTaken": 2016 },
    { "courseCode": "MUS-101",  "title": "Music Appreciation",              "subjectArea": "Music",                     "credits": 3, "grade": "A",  "yearTaken": 2016 },
    { "courseCode": "SPE-101",  "title": "Public Speaking",                 "subjectArea": "Speech",                    "credits": 3, "grade": "B+", "yearTaken": 2016 }
  ]
};

const PROGRAM = {
  "program": "Bachelor of Applied Studies",
  "totalCreditsRequired": 120,
  "requirements": [
    { "id": "REQ-ENG-1",  "title": "English Composition I",             "subjectArea": "English",                    "credits": 3, "category": "General Education" },
    { "id": "REQ-ENG-2",  "title": "English Composition II",            "subjectArea": "English Composition II",     "credits": 3, "category": "General Education" },
    { "id": "REQ-SPE-1",  "title": "Public Speaking",                   "subjectArea": "Speech",                     "credits": 3, "category": "General Education" },
    { "id": "REQ-MAT-1",  "title": "College Algebra or higher",         "subjectArea": "Mathematics",                "credits": 3, "category": "General Education" },
    { "id": "REQ-SCI-1",  "title": "Natural Science with Lab",          "subjectArea": "Biology",                    "credits": 3, "category": "General Education" },
    { "id": "REQ-SCI-2",  "title": "Natural Science Lab Component",     "subjectArea": "Biology Lab",                "credits": 1, "category": "General Education" },
    { "id": "REQ-PSY-1",  "title": "Introduction to Psychology",        "subjectArea": "Psychology",                 "credits": 3, "category": "General Education" },
    { "id": "REQ-SOC-1",  "title": "Social Science Elective",           "subjectArea": "Sociology",                  "credits": 3, "category": "General Education" },
    { "id": "REQ-HUM-1",  "title": "Humanities Elective",               "subjectArea": "Philosophy",                 "credits": 3, "category": "General Education" },
    { "id": "REQ-COM-1",  "title": "Interpersonal Communication",       "subjectArea": "Communication",              "credits": 3, "category": "General Education" },
    { "id": "REQ-BUS-1",  "title": "Introduction to Business",          "subjectArea": "Business",                   "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-ECO-1",  "title": "Macroeconomics",                    "subjectArea": "Economics",                  "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-CIS-1",  "title": "Computer Applications",             "subjectArea": "Computer Information Systems","credits": 3, "category": "Core Requirements" },
    { "id": "REQ-MGT-1",  "title": "Principles of Management",          "subjectArea": "Management",                 "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-MGT-2",  "title": "Organizational Behavior",           "subjectArea": "Organizational Behavior",    "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-MGT-3",  "title": "Project Management",                "subjectArea": "Project Management",         "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-FIN-1",  "title": "Personal Finance",                  "subjectArea": "Finance",                    "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-MKT-1",  "title": "Introduction to Marketing",         "subjectArea": "Marketing",                  "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-LAW-1",  "title": "Business Law",                      "subjectArea": "Business Law",               "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-ACC-1",  "title": "Principles of Accounting I",        "subjectArea": "Accounting",                 "credits": 3, "category": "Core Requirements" },
    { "id": "REQ-CON-1",  "title": "Applied Leadership",                "subjectArea": "Leadership",                 "credits": 3, "category": "Concentration" },
    { "id": "REQ-CON-2",  "title": "Strategic Planning",                "subjectArea": "Strategic Planning",         "credits": 3, "category": "Concentration" },
    { "id": "REQ-CON-3",  "title": "Data Analysis for Decision Making", "subjectArea": "Data Analysis",              "credits": 3, "category": "Concentration" },
    { "id": "REQ-CON-4",  "title": "Ethics in the Workplace",           "subjectArea": "Ethics",                     "credits": 3, "category": "Concentration" },
    { "id": "REQ-CON-5",  "title": "Human Resources Management",        "subjectArea": "Human Resources",            "credits": 3, "category": "Concentration" },
    { "id": "REQ-CON-6",  "title": "Capstone: Applied Project",         "subjectArea": "Capstone",                   "credits": 3, "category": "Concentration" },
    { "id": "REQ-CON-7",  "title": "Global Business Perspectives",      "subjectArea": "Global Business",            "credits": 3, "category": "Concentration" },
    { "id": "REQ-CON-8",  "title": "Technology in the Workplace",       "subjectArea": "Workplace Technology",       "credits": 3, "category": "Concentration" },
    { "id": "REQ-ELE-1",  "title": "Elective I",                        "subjectArea": "History",                    "credits": 3, "category": "Electives" },
    { "id": "REQ-ELE-2",  "title": "Elective II",                       "subjectArea": "Fine Arts",                  "credits": 3, "category": "Electives" },
    { "id": "REQ-ELE-3",  "title": "Elective III",                      "subjectArea": "Statistics",                 "credits": 3, "category": "Electives" },
    { "id": "REQ-ELE-4",  "title": "Elective IV",                       "subjectArea": "Environmental Science",      "credits": 3, "category": "Electives" },
    { "id": "REQ-ELE-5",  "title": "Elective V",                        "subjectArea": "Political Science",          "credits": 3, "category": "Electives" },
    { "id": "REQ-ELE-6",  "title": "Elective VI — Free Choice",         "subjectArea": "Chemistry",                  "credits": 3, "category": "Electives" }
  ]
};

// ------------------------------------------------------------------
// 2. MATCHING ENGINE
// ------------------------------------------------------------------

function runAudit(transcript, program) {
  const pendingRequirements = program.requirements.map(r => Object.assign({}, r));
  const applied = [];
  const unmatched = [];

  for (const credit of transcript.credits) {
    const matchIndex = pendingRequirements.findIndex(
      req => req.subjectArea === credit.subjectArea
    );
    if (matchIndex !== -1) {
      applied.push({ credit: credit, satisfies: pendingRequirements[matchIndex] });
      pendingRequirements.splice(matchIndex, 1);
    } else {
      unmatched.push(credit);
    }
  }

  return { applied, unmatched, remaining: pendingRequirements };
}

function computeSummary(auditResult, totalRequired) {
  const creditsApplied = auditResult.applied.reduce((sum, item) => sum + item.credit.credits, 0);
  const creditsRemaining = auditResult.remaining.reduce((sum, req) => sum + req.credits, 0);
  const pct = Math.round((creditsApplied / totalRequired) * 100);
  return { creditsApplied, creditsRemaining, pct };
}

// ------------------------------------------------------------------
// 3. RENDER HELPERS
// ------------------------------------------------------------------

function renderSummaryBanner(student, summary, programName) {
  document.getElementById('student-name').textContent = student.name;
  document.getElementById('program-name').textContent = programName;
  document.getElementById('credits-applied').textContent = summary.creditsApplied;
  document.getElementById('credits-remaining').textContent = summary.creditsRemaining;
  document.getElementById('pct-label').textContent = summary.pct + '%';
  document.getElementById('progress-fill').style.width = summary.pct + '%';
  document.getElementById('summary-banner').style.display = 'block';
}

function renderApplied(appliedList) {
  const container = document.getElementById('applied-list');
  document.getElementById('applied-heading').textContent = `Credits That Apply (${appliedList.length})`;
  if (appliedList.length === 0) {
    container.innerHTML = '<p class="empty-note">No credits matched current program requirements.</p>';
    return;
  }
  appliedList.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card card-applied';
    card.innerHTML = `
      <div class="card-title">${item.credit.title}</div>
      <div class="card-meta">
        <span class="tag tag-code">${item.credit.courseCode}</span>
        <span class="tag tag-credits">${item.credit.credits} cr</span>
        <span class="tag tag-grade">Grade: ${item.credit.grade}</span>
        <span class="tag tag-year">${item.credit.yearTaken}</span>
      </div>
      <div class="card-satisfies">✔ Satisfies: <strong>${item.satisfies.title}</strong> <span class="category-badge">${item.satisfies.category}</span></div>
    `;
    container.appendChild(card);
  });
}

function renderUnmatched(unmatchedList) {
  const container = document.getElementById('unmatched-list');
  document.getElementById('unmatched-heading').textContent = `Credits That No Longer Count (${unmatchedList.length})`;
  if (unmatchedList.length === 0) {
    container.innerHTML = '<p class="empty-note">All past credits matched a current requirement — great!</p>';
    return;
  }
  unmatchedList.forEach(credit => {
    const card = document.createElement('div');
    card.className = 'card card-unmatched';
    card.innerHTML = `
      <div class="card-title">${credit.title}</div>
      <div class="card-meta">
        <span class="tag tag-code">${credit.courseCode}</span>
        <span class="tag tag-credits">${credit.credits} cr</span>
        <span class="tag tag-grade">Grade: ${credit.grade}</span>
        <span class="tag tag-year">${credit.yearTaken}</span>
      </div>
      <div class="card-note">⚠ No matching requirement in current program.</div>
    `;
    container.appendChild(card);
  });
}

function renderRemaining(remainingList) {
  const container = document.getElementById('remaining-list');
  document.getElementById('remaining-heading').textContent = `Still Needed to Graduate (${remainingList.length})`;
  if (remainingList.length === 0) {
    container.innerHTML = '<p class="empty-note">All requirements are already met — you can graduate!</p>';
    return;
  }
  const byCategory = {};
  remainingList.forEach(req => {
    if (!byCategory[req.category]) byCategory[req.category] = [];
    byCategory[req.category].push(req);
  });
  Object.entries(byCategory).forEach(([category, reqs]) => {
    const group = document.createElement('div');
    group.className = 'req-group';
    const groupHeading = document.createElement('h3');
    groupHeading.className = 'req-group-heading';
    groupHeading.textContent = category;
    group.appendChild(groupHeading);
    reqs.forEach(req => {
      const card = document.createElement('div');
      card.className = 'card card-remaining';
      card.innerHTML = `
        <div class="card-title">${req.title}</div>
        <div class="card-meta">
          <span class="tag tag-code">${req.id}</span>
          <span class="tag tag-credits">${req.credits} cr needed</span>
          <span class="tag tag-area">${req.subjectArea}</span>
        </div>
      `;
      group.appendChild(card);
    });
    container.appendChild(group);
  });
}

// ------------------------------------------------------------------
// 4. BOOTSTRAP — runs immediately, no fetch needed
// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const auditResult = runAudit(TRANSCRIPT, PROGRAM);
  const summary = computeSummary(auditResult, PROGRAM.totalCreditsRequired);

  renderSummaryBanner(TRANSCRIPT.student, summary, PROGRAM.program);
  renderApplied(auditResult.applied);
  renderUnmatched(auditResult.unmatched);
  renderRemaining(auditResult.remaining);

  document.getElementById('loading').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
});
