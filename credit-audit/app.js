// ============================================================
// Credit Audit — app.js
// Come Back and Finish Planner — Ivy Tech IT Challenge 2026
// ============================================================

// ------------------------------------------------------------------
// 1. MATCHING ENGINE
// ------------------------------------------------------------------

/**
 * runAudit(transcript, program)
 *
 * Takes raw transcript and program JSON objects and classifies
 * each transcript credit into one of two buckets, and returns
 * the remaining (unmet) program requirements as a third bucket.
 *
 * Returns: { applied, unmatched, remaining }
 *   applied   – credits that satisfy a program requirement
 *   unmatched – credits with no matching requirement
 *   remaining – requirements not met by any transcript credit
 */
function runAudit(transcript, program) {
  // Copy the requirements pool so we can remove matched ones
  const pendingRequirements = program.requirements.map(r => Object.assign({}, r));

  const applied = [];
  const unmatched = [];

  // Walk every transcript credit and try to find a matching requirement
  for (const credit of transcript.credits) {
    // Find the first pending requirement whose subjectArea matches this credit
    const matchIndex = pendingRequirements.findIndex(
      req => req.subjectArea === credit.subjectArea
    );

    if (matchIndex !== -1) {
      // Match found — record which requirement was satisfied
      applied.push({
        credit: credit,
        satisfies: pendingRequirements[matchIndex]
      });
      // Remove the satisfied requirement from the pending pool (each req met once)
      pendingRequirements.splice(matchIndex, 1);
    } else {
      // No match — this credit doesn't count toward the current program
      unmatched.push(credit);
    }
  }

  // Whatever is still in the pending pool is "remaining"
  const remaining = pendingRequirements;

  return { applied, unmatched, remaining };
}

/**
 * computeSummary(auditResult, totalRequired)
 *
 * Returns high-level numbers for the summary banner.
 */
function computeSummary(auditResult, totalRequired) {
  const creditsApplied = auditResult.applied.reduce(
    (sum, item) => sum + item.credit.credits, 0
  );
  const creditsRemaining = auditResult.remaining.reduce(
    (sum, req) => sum + req.credits, 0
  );
  const pct = Math.round((creditsApplied / totalRequired) * 100);
  return { creditsApplied, creditsRemaining, pct };
}

// ------------------------------------------------------------------
// 2. RENDER HELPERS
// ------------------------------------------------------------------

function renderSummaryBanner(student, summary, programName) {
  const banner = document.getElementById('summary-banner');
  document.getElementById('student-name').textContent = student.name;
  document.getElementById('program-name').textContent = programName;
  document.getElementById('credits-applied').textContent = summary.creditsApplied;
  document.getElementById('credits-remaining').textContent = summary.creditsRemaining;
  document.getElementById('pct-label').textContent = summary.pct + '%';
  document.getElementById('progress-fill').style.width = summary.pct + '%';
  banner.style.display = 'block';
}

function renderApplied(appliedList) {
  const container = document.getElementById('applied-list');
  const heading = document.getElementById('applied-heading');
  heading.textContent = `Credits That Apply (${appliedList.length})`;

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
  const heading = document.getElementById('unmatched-heading');
  heading.textContent = `Credits That No Longer Count (${unmatchedList.length})`;

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
  const heading = document.getElementById('remaining-heading');
  heading.textContent = `Still Needed to Graduate (${remainingList.length})`;

  if (remainingList.length === 0) {
    container.innerHTML = '<p class="empty-note">All requirements are already met — you can graduate!</p>';
    return;
  }

  // Group by category
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
// 3. DATA LOADING + BOOTSTRAP
// ------------------------------------------------------------------

/**
 * loadData()
 *
 * Fetches both JSON files, runs the audit, and renders the dashboard.
 * NOTE: This page must be served over HTTP (e.g. python3 -m http.server 8080)
 * rather than opened as a file:// URL to avoid CORS restrictions on fetch().
 */
async function loadData() {
  try {
    const [transcriptRes, programRes] = await Promise.all([
      fetch('data/transcript.json'),
      fetch('data/program.json')
    ]);

    if (!transcriptRes.ok) throw new Error('Could not load transcript.json');
    if (!programRes.ok) throw new Error('Could not load program.json');

    const transcript = await transcriptRes.json();
    const program = await programRes.json();

    // Run the matching engine
    const auditResult = runAudit(transcript, program);
    const summary = computeSummary(auditResult, program.totalCreditsRequired);

    // Render each section
    renderSummaryBanner(transcript.student, summary, program.program);
    renderApplied(auditResult.applied);
    renderUnmatched(auditResult.unmatched);
    renderRemaining(auditResult.remaining);

    // Hide loading message
    document.getElementById('loading').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

  } catch (err) {
    document.getElementById('loading').textContent =
      'Error loading data: ' + err.message +
      ' — Make sure you are serving this page over HTTP (see README).';
    console.error(err);
  }
}

// Kick off on page load
document.addEventListener('DOMContentLoaded', loadData);
