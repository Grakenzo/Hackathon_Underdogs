# Pathfinder

A mobile-first career-discovery quiz for people who don't know what job to aim
for. Six quick, casual questions turn into a shortlist of roles worth
exploring, and for the one role with real data behind it (IT support officer),
a full breakdown of what Brisbane employers actually ask for — built from 10
real job ads, not guesses.

## Why it exists

Job ads are full of jargon and inflated requirements that scare people off
roles they're actually qualified for. Pathfinder does two things instead:

* **A quiz, not a form.** Six questions about how you like to work, each
  answer tagged with the kind of thinking it shows (debugging, people,
  organising, and so on). A small, plain scoring function — no AI model, no
  black box — counts those tags and suggests three roles, with the reasoning
  shown as a quote of the answer you actually picked.
* **A real requirements breakdown, not a stereotype.** The role detail screen
  reads directly from a dataset of real job ads: which skills genuinely came
  up most, which ones only sound official ("essential" vs "desirable"), and a
  plain-English glossary for terms like "Entra ID" or "Level 1 support" —
  aimed at people (including international students) with no prior exposure
  to the local job market's vocabulary.

## How it works

* **Start** — pick a category (only Technology has data so far; others are
  visibly disabled) or jump straight into the quiz.
* **Quiz** — six questions, one per screen, with a small reaction animation
  after each answer showing a real stat from the job-ad data tied to what you
  picked.
* **Suggestions** — your top three matching roles, each with a one-line quote
  of the answer that drove the match. Only roles with collected data are
  clickable.
* **Role detail** — three tabs: a glossary of job-ad terms in plain English,
  a must-have/nice-to-have breakdown with how many of the 10 ads mentioned
  each one, and a checklist of what to prepare before applying.

## Tech

Plain React + Vite. No router (screens are just component state), no UI
library, no backend — everything lives in `src/data/`:

* `categories.js` — the six career categories shown on the start screen
* `quiz.js` — the six questions, their options, tags, and reaction lines
* `roles.js` — the four candidate roles and the tags that define each one
* `scoring.js` — the tag-counting/scoring logic that turns quiz answers into
  role suggestions
* `it-support.json` — the actual job-ad dataset behind the IT support officer
  detail screen

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or later.

### Windows

### Step 1 — Get the code
 
Open **PowerShell** or **Command Prompt** (search for either in the Start menu).
 
If you haven't cloned it yet:
 
```powershell
cd %USERPROFILE%\Documents
git clone https://github.com/Grakenzo/Hackathon_Underdogs.git
cd Hackathon_Underdogs
```
 
If you already have it cloned, just `cd` into that folder instead. Confirm you're in the right place:
 
```powershell
dir package.json
```
 
You should see `package.json` listed.
 
### Step 2 — Install and run
 
```powershell
npm install
npm run dev
```
 
### Step 3 — Open in browser
 
Open the URL it prints — `http://localhost:3000` by default.
 
To stop the server, press `Ctrl+C` in PowerShell or Command Prompt.
 
---
 
## If something goes wrong
 
**"npm is not found"** — Node didn't install correctly. Reinstall from [nodejs.org](https://nodejs.org), close and reopen your terminal, try again.
 
**"git is not found"** — Install Git from [git-scm.com](https://git-scm.com), close and reopen your terminal, try again.
 
**"Port 3000 already in use"** — Something else is using that port. Either stop that process or open `vite.config.js` and change the port number.
 
**App loads but looks broken** — Run `npm install` again. A dependency may not have installed correctly.

### macOS / linux

## Prerequisites
 
Make sure you have Node.js installed (version 18 or higher). Check with:
 
```bash
node -v
```
 
If that fails, install Node from [nodejs.org](https://nodejs.org) or via Homebrew:
 
```bash
brew install node
```
 
## Step 1 — Get the code
 
If you haven't cloned it yet:
 
```bash
cd ~/Documents
git clone https://github.com/Grakenzo/Hackathon_Underdogs.git
cd Hackathon_Underdogs
```
 
If you already have it cloned somewhere, just `cd` into that folder instead. Confirm you're in the right place:
 
```bash
ls package.json
```
 
You should see `package.json` printed back.
 
## Step 2 — Install and run
 
```bash
npm install
npm run dev
```
 
## Step 3 — Open in browser
 
Open the URL it prints — `http://localhost:3000` by default.
 
To stop the server, press `Ctrl+C` in Terminal.
