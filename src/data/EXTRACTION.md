# How the job-ad data was collected and extracted

## The ads

Ten IT support job ads were collected manually from Seek (Brisbane QLD, September 2026) and are saved in `ads/it-support/01.txt` through `10.txt`.

Companies:
1. GenTech Seeds — IT Support Specialist
2. Clubfit Software — Technical Support/Admin IT Helpdesk
3. Defy IT — Junior IT Support Officer (Level 1)
4. First Focus IT — Support Technician
5. NetVault — Level 1/2 Service Desk Engineer
6. Deployus — Service Desk Engineer
7. 3 Logix Pty Ltd — Internal IT Support
8. Fitness & Lifestyle Group — IT Support Specialist
9. DataMC — Junior Systems Administrator
10. Indie Education — ICT Officer, Application Support

## The extraction

The ten ads were passed to a language model with instructions to extract only what appeared in the ads themselves — not general IT knowledge. The model was asked to identify:

- Unfamiliar terms (jargon) with plain-English explanations
- Requirements stated as essential or required
- Requirements stated as preferred, desirable, advantageous or a bonus
- Things an applicant should prepare before applying, ordered by lead time

Counts were tallied across the ten ads. For example, "Right to work in Australia" appeared in 9 of 10 application question sets. "Certifications mentioned" appeared in 9 of 10 ads but was listed as a hard requirement in only 1.

The output is `src/data/it-support.json`, which the app reads directly at runtime. No model call happens when the app is running — the extraction ran once, offline, and the result is stored as static data. This means the app is fast, consistent, and does not depend on an API connection during the demo.

## What was authored on top

The plain-English explanations in the `terms` array were written for a newcomer audience — someone who arrived in Australia recently and has no prior exposure to local job-market vocabulary. The goal was to explain things the way a knowledgeable friend would, not the way a government website does.

The `note` field on each requirement item was written to make the count meaningful rather than just a number — for example, flagging that nine ads mentioned certifications but only one actually required one.

## What to verify

Open any of the ten `.txt` files in `ads/it-support/` and check a count against `it-support.json`. For example:
- "Right to work" appears in the employer questions of ads 01, 02, 03, 04, 05, 06, 07, 08, 09 (9 of 10).
- "Driver's licence" appears as a requirement in ads 03, 04, 05, 06, 10 (5 of 10).
- Qualification required — none. Every ad said "or equivalent experience", "or working towards one", or listed study as optional.
