// ---------------------------------------------------------------------------
// QUIZ SCORING LOGIC
// ---------------------------------------------------------------------------
// This is plain, deterministic code - no AI involved in this step. That
// matters for the pitch: we can point at this file and explain exactly why
// someone got the suggestions they got.
//
// How it works, step by step:
//
// 1. The user answers 6 questions. Every option they could pick carries
//    1-2 "tags" - short labels for the kind of thinking it shows
//    (e.g. "debugging", "people", "visual"). See quiz.js.
//
// 2. countTags() walks through the user's chosen answers and counts how
//    many times each tag shows up in total. Picking two options tagged
//    "debugging" across the quiz means a tag count of debugging: 2.
//
// 3. Every role in roles.js lists its own 2-3 tags. scoreRole() adds up
//    the user's tag counts for just that role's tags. That sum is the
//    role's score - roles whose tags match what the user picked most
//    score highest.
//
// 4. getTopRoles() scores every role this way, sorts them highest score
//    first, and returns the top three. If two roles tie on score, the one
//    listed first in roles.js wins the tiebreak (that's what the explicit
//    `a.index - b.index` comparison below does).
//
// 5. getReasoningForRole() finds one real answer the user picked that
//    explains why a role showed up, so we can quote it back to them
//    instead of inventing a justification.
// ---------------------------------------------------------------------------

// Count how often each tag appears across the user's chosen answers.
// `answers` is an array of the option objects the user picked, one per
// question (in the same order as quiz.js). A slot can be null if a
// question hasn't been answered yet.
export function countTags(answers) {
  const counts = {};
  for (const answer of answers) {
    if (!answer) continue;
    for (const tag of answer.tags) {
      counts[tag] = (counts[tag] || 0) + 1;
    }
  }
  return counts;
}

// A role's score is just the sum of the user's counts for that role's own
// tags. A tag the role doesn't list contributes nothing.
export function scoreRole(role, tagCounts) {
  return role.tags.reduce((total, tag) => total + (tagCounts[tag] || 0), 0);
}

// Score every role and return the top `count` (default 3), highest score
// first. Ties are broken by each role's original position in roles.js.
export function getTopRoles(answers, roles, count = 3) {
  const tagCounts = countTags(answers);

  const scored = roles.map((role, index) => ({
    role,
    score: scoreRole(role, tagCounts),
    index, // keeps track of original role order for the tiebreak below
  }));

  scored.sort((a, b) => b.score - a.score || a.index - b.index);

  return scored.slice(0, count).map(({ role, score }) => ({ role, score }));
}

// Find a real reason to show the user why a role was suggested: the tag
// this role scored highest on, and one answer they actually picked that
// carries that tag. We never invent this text - only quote what they chose.
// Returns null if the user has no answers carrying any of the role's tags
// (shouldn't happen once all 6 questions are answered, but handled safely).
export function getReasoningForRole(role, answers) {
  const tagCounts = countTags(answers);

  const topTag = [...role.tags].sort(
    (a, b) => (tagCounts[b] || 0) - (tagCounts[a] || 0)
  )[0];

  const matchingAnswer = answers.find(
    (answer) => answer && answer.tags.includes(topTag)
  );

  if (!matchingAnswer) return null;

  return { tag: topTag, text: matchingAnswer.text };
}
