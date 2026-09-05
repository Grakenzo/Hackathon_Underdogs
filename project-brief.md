Project Brief
MentorME Futura Remix Hackathon — Track 1: Future of Work and International Talent

Deadline: Sunday 14:30 (deadline and pitch are the same moment)


1. The problem
Two problems stack on top of each other.

People don't know what job to aim for. "I don't know what to do" is where a lot of students actually are. Career advice assumes you already have a target. Most people don't, and the ones who say "I want to work in IT" don't realise IT is forty different jobs with completely different requirements.

Even once they pick one, they can't read the job ad. Australian job ads are full of language nobody teaches: STAR method, selection criteria, Blue Card, award classifications, essential vs desirable. Seek and Indeed display that text. They don't explain it. A capable person reads it, assumes the role isn't for them, and closes the tab.

The MentorME brief names this directly as a barrier for international talent: understanding local recruitment processes.
2. Who it's for (TU/ TA)
An international student or a migrant, who is unsure what role to target and has never applied for an Australian job before.
3. What we're building
A two-stage tool.

Stage 1 — The hook. User picks a broad area of interest. A short, light quiz (6–8 questions) built around "what am I actually good at." At the end it suggests three specific roles, with a line of reasoning for each.

It suggests. It does not decide. That's stated on screen.

Stage 2 — The useful part. Once they pick a role, we show them what jobs in Brisbane actually ask for. Three simple things:

What the words mean. Job ads are full of terms people don't know. Blue Card. RSA. STAR method. AO3. We explain each one in normal English.
What you really need. Ads mix must-haves and nice-to-haves together. "Forklift licence required" means you can't apply without it. "Retail experience preferred" means you can. We split them into two lists, so people stop giving up on jobs they were allowed to apply for.
What to get ready. A simple to-do list, slow things first. A certificate might take a few days, so start it now. Referee phone numbers take five minutes, do that later.

The important bit: we get all of this from real job ads we collected ourselves, not from the AI making things up. That means we can say things like "8 out of 10 Brisbane ads for this job asked for weekend availability" — a real number we can point to.
4. Why this isn't Chat GPT/ Seek (or other competitors)
(wording later)

Seek shows you one job ad and displays its requirements as written. It never explains them, and it never shows you the pattern across every ad for that role.

Our line: Seek shows you one job ad. We show you what every Brisbane employer for that role is actually asking for — and what it means.

Competitors exist and we name them. Seekario.ai is the closest Australian one, but it generates applications. We do the step before that: helping someone understand what's being asked in the first place.
5. How it works
User answers the quiz
Our own code maps answers to roles using simple tags (our logic, not the model's, so we can explain it)
The AI reads the real ads we collected for that role and extracts requirements as structured data
Our code counts, ranks and renders the three sections
Every requirement shown traces back to real ads

Why AI is needed: job ads have no fixed format. Reading unstructured text written differently by every employer is the thing a language model does that a database can't.

What AI does not do: it doesn't decide anyone's career, and it doesn't make any decision about a person. It suggests, and the user decides.
6. Impact and how we'd measure it
Proxy indicators, honestly labelled as proxies:

Applications completed rather than abandoned
Self-reported confidence before and after
Time taken to produce a first draft response

We'd need a real user test before claiming anything stronger.
7. Implementation
A university careers service or migrant employment service could run this as a free web tool. No integration needed, no personal data stored.

Next steps if it continued: more roles and more ads; a browser extension so the decode happens on the Seek page itself; personalised evidence matching against the user's own background.
8. Limitations we accept
The quiz suggests roles based on a short questionnaire. It's a starting point, not advice, and we say so on screen
Coverage is limited to the roles and ads we collected
Data is a snapshot in time — job ads change
Anything regulatory links to the authoritative source rather than being explained from the model's memory
We have not tested with real users yet
We tested against [N] real Brisbane ads and it handled [N] well — the failures are listed
9. Tech
Web app. LLM for reading ads and extracting structured data. Our own code for the quiz mapping, the counting, and the rendering. Real Brisbane job ads collected manually as the data source.
10. Pitch running order
Problem → target user → solution → demo → technology → impact → implementation and next steps.

5 minutes total including the demo. Then 5–10 minutes of judges' questions.

Q&A prep — assign one person each:

How does it work, what breaks it, why an LLM
Who's the user, what's the evidence
How did you test it, what does the accuracy number mean
Impact metric, implementation, next steps

Expect: "how is this different from Seek / from ChatGPT?" Answer: real ads from Brisbane, aggregate patterns rather than one listing at a time, structured consistent output, and a tested accuracy figure.

