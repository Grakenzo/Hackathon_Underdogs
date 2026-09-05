// The six quiz questions, ported from pathfinder-prototype-v4.html's
// QUESTIONS constant. One question is shown per screen (see
// QuizScreen.jsx). Each option carries:
//   - emoji + text: what the user sees on the option card
//   - tags: from a shared vocabulary (debugging, systems, organising,
//     process, visual, design, people, communication) - scoring.js counts
//     these to work out which roles (see roles.js) suit the user
//   - reaction: the glyph + line shown in the full-screen reaction
//     overlay right after the option is picked (see QuizScreen.jsx)
export const quizQuestions = [
  {
    id: 'q1',
    text: 'Which of these would you rather do all day?',
    options: [
      {
        id: 'a',
        emoji: '🔧',
        text: 'Work out why one laptop keeps crashing',
        tags: ['debugging'],
        reaction: { glyph: '🔍', line: '10 of 10 ads listed troubleshooting. Every single one.' },
      },
      {
        id: 'b',
        emoji: '📋',
        text: 'Write the guide so nobody asks twice',
        tags: ['organising', 'process'],
        reaction: { glyph: '📚', line: '7 of 10 ads ask you to document your work.' },
      },
      {
        id: 'c',
        emoji: '🖥',
        text: 'Set up the screens and desks for a new starter',
        tags: ['systems'],
        reaction: { glyph: '📦', line: 'Called "provisioning". It shows up constantly.' },
      },
      {
        id: 'd',
        emoji: '💬',
        text: 'Explain the fix to someone who is stressed',
        tags: ['people', 'communication'],
        reaction: { glyph: '🤝', line: '9 of 10 ads want this. More than any tech skill.' },
      },
    ],
  },
  {
    id: 'q2',
    text: 'A problem lands on your desk. What feels natural?',
    options: [
      {
        id: 'a',
        emoji: '🔎',
        text: 'Dig until I find the actual cause',
        tags: ['debugging', 'systems'],
        reaction: { glyph: '🧠', line: 'Ads call this "root cause analysis".' },
      },
      {
        id: 'b',
        emoji: '📝',
        text: 'Log it properly so we can spot a pattern',
        tags: ['organising', 'process'],
        reaction: { glyph: '📊', line: 'Ticketing systems came up in 6 of 10 ads.' },
      },
      {
        id: 'c',
        emoji: '🙋',
        text: 'Ask the right person and move fast',
        tags: ['people', 'communication'],
        reaction: { glyph: '📣', line: 'Knowing when to escalate is listed as a skill.' },
      },
      {
        id: 'd',
        emoji: '🛠',
        text: 'Try the quick fix first, then go deeper',
        tags: ['debugging', 'process'],
        reaction: { glyph: '⚡', line: 'Practical. Half of support work is exactly this.' },
      },
    ],
  },
  {
    id: 'q3',
    text: 'Who would you rather spend the day around?',
    options: [
      {
        id: 'a',
        emoji: '👥',
        text: 'Different people all day, new faces',
        tags: ['people', 'communication'],
        reaction: { glyph: '🌍', line: 'Client-facing roles. 4 of 10 ads were like this.' },
      },
      {
        id: 'b',
        emoji: '👨‍💻',
        text: 'A small team, same faces, deep work',
        tags: ['systems', 'debugging'],
        reaction: { glyph: '🧩', line: 'One ad described a close-knit team of nine.' },
      },
      {
        id: 'c',
        emoji: '🏢',
        text: 'One organisation, learning it inside out',
        tags: ['organising', 'systems'],
        reaction: { glyph: '🗺', line: 'Internal IT. Fewer clients, more depth.' },
      },
      {
        id: 'd',
        emoji: '🎯',
        text: 'Mostly on my own, with clear tasks',
        tags: ['process', 'debugging'],
        reaction: { glyph: '🎯', line: 'Ads phrase this as "works independently".' },
      },
    ],
  },
  {
    id: 'q4',
    text: 'Which of these would bother you least?',
    options: [
      {
        id: 'a',
        emoji: '🔁',
        text: 'Answering the same question five times',
        tags: ['people', 'communication'],
        reaction: { glyph: '🫶', line: 'Ads ask for patience with non-technical users.' },
      },
      {
        id: 'b',
        emoji: '📟',
        text: 'Being contactable when something breaks',
        tags: ['systems', 'process'],
        reaction: { glyph: '🛡', line: 'One ad has an on-call roster. One says never.' },
      },
      {
        id: 'c',
        emoji: '🗂',
        text: 'Writing everything down as you go',
        tags: ['organising', 'process'],
        reaction: { glyph: '🧹', line: 'Documentation is a real requirement, not admin.' },
      },
      {
        id: 'd',
        emoji: '🚗',
        text: 'Driving to a client site on short notice',
        tags: ['people', 'systems'],
        reaction: { glyph: '🗺', line: '5 of 10 ads need a licence. Half of them.' },
      },
    ],
  },
  {
    id: 'q5',
    text: 'How do you prefer to learn something new?',
    options: [
      {
        id: 'a',
        emoji: '🧪',
        text: 'Break it, fix it, understand it',
        tags: ['debugging', 'systems'],
        reaction: { glyph: '🧗', line: 'One ad counts personal projects as experience.' },
      },
      {
        id: 'b',
        emoji: '🎓',
        text: 'Take a course, get the certificate',
        tags: ['process', 'organising'],
        reaction: { glyph: '📜', line: '9 of 10 mention certs. Only 1 requires one.' },
      },
      {
        id: 'c',
        emoji: '👁',
        text: 'Watch someone who knows, then copy',
        tags: ['people', 'visual'],
        reaction: { glyph: '👁', line: 'Several ads offer direct mentoring.' },
      },
      {
        id: 'd',
        emoji: '📖',
        text: 'Read the documentation properly',
        tags: ['organising', 'systems'],
        reaction: { glyph: '📘', line: 'Rarer than you think. Genuinely valued.' },
      },
    ],
  },
  {
    id: 'q6',
    text: 'End of a good day at work. What happened?',
    options: [
      {
        id: 'a',
        emoji: '💡',
        text: 'Something was broken. Now it is not.',
        tags: ['debugging', 'systems'],
        reaction: { glyph: '🎉', line: 'That is the core of every one of these ads.' },
      },
      {
        id: 'b',
        emoji: '🗄',
        text: 'A messy system finally makes sense',
        tags: ['organising', 'process'],
        reaction: { glyph: '🧹', line: 'Ads call this "process improvement".' },
      },
      {
        id: 'c',
        emoji: '🤝',
        text: 'Someone stopped panicking because of you',
        tags: ['communication', 'people'],
        reaction: { glyph: '🔆', line: 'The soft skill every ad asked for.' },
      },
      {
        id: 'd',
        emoji: '✨',
        text: 'You set something up and it just works',
        tags: ['systems', 'visual'],
        reaction: { glyph: '🌟', line: 'Deployment and configuration. Real duties.' },
      },
    ],
  },
];
