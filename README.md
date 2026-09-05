# Pathfinder

A mobile-first career-discovery quiz for people who don't know what job to aim
for. Six quick, casual questions turn into a shortlist of roles worth
exploring, and for the one role with real data behind it (IT support officer),
a full breakdown of what Brisbane employers actually ask for — built from 10
real job ads, not guesses.

## Why it exists

Job ads are full of jargon and inflated requirements that scare people off
roles they're actually qualified for. Pathfinder does two things instead:

- **A quiz, not a form.** Six questions about how you like to work, each
  answer tagged with the kind of thinking it shows (debugging, people,
  organising, and so on). A small, plain scoring function — no AI model, no
  black box — counts those tags and suggests three roles, with the reasoning
  shown as a quote of the answer you actually picked.
- **A real requirements breakdown, not a stereotype.** The role detail screen
  reads directly from a dataset of real job ads: which skills genuinely came
  up most, which ones only sound official ("essential" vs "desirable"), and a
  plain-English glossary for terms like "Entra ID" or "Level 1 support" —
  aimed at people (including international students) with no prior exposure
  to the local job market's vocabulary.

## How it works

- **Start** — pick a category (only Technology has data so far; others are
  visibly disabled) or jump straight into the quiz.
- **Quiz** — six questions, one per screen, with a small reaction animation
  after each answer showing a real stat from the job-ad data tied to what you
  picked.
- **Suggestions** — your top three matching roles, each with a one-line quote
  of the answer that drove the match. Only roles with collected data are
  clickable.
- **Role detail** — three tabs: a glossary of job-ad terms in plain English,
  a must-have/nice-to-have breakdown with how many of the 10 ads mentioned
  each one, and a checklist of what to prepare before applying.

## Tech

Plain React + Vite. No router (screens are just component state), no UI
library, no backend — everything lives in `src/data/`:

- `categories.js` — the six career categories shown on the start screen
- `quiz.js` — the six questions, their options, tags, and reaction lines
- `roles.js` — the four candidate roles and the tags that define each one
- `scoring.js` — the tag-counting/scoring logic that turns quiz answers into
  role suggestions
- `it-support.json` — the actual job-ad dataset behind the IT support officer
  detail screen

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or later.

```bash
cd C:\Users\Grakenzo\Hackathon_Underdogs\Hackathon_Underdogs
npm install
npm run dev
```

Then open the URL it prints — **http://localhost:3000** by default (see
`vite.config.js`).



**`npm error ... no such file or directory, open 'package.json'`.** You ran
the command outside the project folder. `cd` into the folder that contains
this repo's `package.json` first (check with `dir package.json`), then
retry.
