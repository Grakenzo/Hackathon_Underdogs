# Limitations and trade-offs

Stating these honestly is part of responsible AI use. Each one is also a pointer to what comes next.

## Current limitations

**One role has data.** IT support officer is the only role with a full requirements breakdown. The quiz suggests three roles, but only IT support opens the detail screen. The other three show "coming soon." Adding a role means collecting ten more ads and running the same extraction — the pipeline scales but we haven't run it yet.

**Ten ads is a small sample.** Ten ads gives a real signal but not a statistically robust one. A count of "9 of 10" is directionally useful, not a guarantee. A production version would need a much larger and continuously updated dataset.

**The data is a snapshot.** Job ads change. Requirements that appeared in September 2026 may not reflect the market in three months. The extraction ran once and the results are static.

**The quiz measures preference, not aptitude.** Picking "finds the bug at 2am" says something about how you like to work. It says nothing about whether you can actually do it. The suggestions are a starting point for exploration, not an assessment of capability.

**Not tested with real users.** We validated the quiz flow internally. We have not sat a real international student in front of it and watched them use it. Usability and comprehension of the plain-English explanations are untested assumptions.

**The AI explanation layer is authored.** The counts in `it-support.json` come from the real ads. The plain-English explanations were written by us, not extracted verbatim. They reflect our interpretation of what a newcomer needs to know — not a guaranteed neutral reading.

## What human oversight looks like here

The app makes no automated decision about any person. Every output is informational and advisory. The suggestion screen says explicitly: "Suggestions to explore, not predictions. You decide what fits." The role detail screen says: "Every number here comes from an ad we collected. Nothing is estimated."

A human — the user — reads the information and decides whether to apply.

## What comes next

- Collect ads for QA tester, business analyst and frontend developer
- Grow the IT support dataset to 50+ ads for more reliable counts
- Run a user test with five international students and fix what confuses them
- Add a way to paste a specific job ad and decode it against the collected data
- Build a browser extension so the decode happens on the Seek page itself
