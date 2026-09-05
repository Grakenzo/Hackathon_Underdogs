// ================================================================
// SCORING — count tags across answers, score roles, take top 3.
// This is deliberately our own code, not a model call, so we can
// explain every suggestion.
// ================================================================
//
// How it works, step by step:
// 1. The user answers 6 questions. Every option they could pick carries
//    1-2 "tags" - short labels for the kind of thinking it shows
//    (e.g. "debugging", "people", "visual"). See quiz.js.
// 2. We count how many times each tag shows up across their answers.
// 3. Every role lists its own 2-3 tags. A role's score is the sum of
//    the user's tag counts for just that role's tags.
// 4. Sort roles by score, highest first, and take the top 3.
export function scoreRoles(answers, roles) {
  const counts = {};
  answers.forEach((a) => a.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  return roles
    .map((r) => ({ ...r, score: r.tags.reduce((s, t) => s + (counts[t] || 0), 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

// Find the answer that contributed most to a given role.
export function reasonFor(role, answers) {
  let best = null;
  let bestHits = -1;
  answers.forEach((a) => {
    const hits = a.tags.filter((t) => role.tags.includes(t)).length;
    if (hits > bestHits) {
      bestHits = hits;
      best = a;
    }
  });
  return best;
}
