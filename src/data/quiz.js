// The six quiz questions. One question is shown per screen (see
// QuizScreen.jsx). Each option carries 1-2 tags from a shared vocabulary:
// debugging, systems, organising, process, visual, design, people,
// communication.
//
// Those tags are what scoring.js counts up to work out which roles (see
// roles.js) suit the user. Keep option "text" written the way a person
// would actually say it out loud - it gets quoted back to the user on the
// suggestions screen as the reasoning for each role, so it needs to read
// naturally in a sentence like: You picked "..." so debugging roles came up.
export const quizQuestions = [
  {
    id: 'q1',
    question: "It's 2am and something's broken. What's actually going on in your brain?",
    options: [
      { text: 'this is kind of fun, I want to find exactly what broke', tags: ['debugging'] },
      { text: "I need a system so this never happens again", tags: ['systems', 'process'] },
      { text: "I'm texting someone to see if they're having the same problem", tags: ['people', 'communication'] },
      { text: 'I just want it to look fine again, worry about why later', tags: ['visual'] },
    ],
  },
  {
    id: 'q2',
    question: 'Pick your ideal group project role, no shame:',
    options: [
      { text: "the one quietly fixing everyone's broken slides at midnight", tags: ['debugging', 'visual'] },
      { text: "the one with the spreadsheet tracking who's doing what", tags: ['organising'] },
      { text: 'the one explaining the plan to the confused group chat', tags: ['communication'] },
      { text: 'the one making sure every step follows the actual brief', tags: ['process'] },
    ],
  },
  {
    id: 'q3',
    question: "Your 'for fun' Sunday project is...",
    options: [
      { text: 'finally working out why your wifi keeps dropping', tags: ['debugging', 'systems'] },
      { text: 'reorganising your files and photos into folders that make sense', tags: ['organising', 'systems'] },
      { text: "redesigning your Instagram grid or a friend's flyer", tags: ['visual', 'design'] },
      { text: "finally replying to everyone you've been ghosting", tags: ['people', 'communication'] },
    ],
  },
  {
    id: 'q4',
    question: "A friend's confused about something. What do you actually enjoy about helping?",
    options: [
      { text: 'finds the exact moment they got lost', tags: ['debugging', 'people'] },
      { text: "breaking it into steps so it's never confusing again", tags: ['process'] },
      { text: 'drawing it out so it just clicks', tags: ['visual', 'design'] },
      { text: 'just talking it through, no diagrams needed', tags: ['people', 'communication'] },
    ],
  },
  {
    id: 'q5',
    question: 'Which compliment would actually make your day?',
    options: [
      { text: "wow, you found the problem so fast", tags: ['debugging'] },
      { text: 'this is so easy to follow now', tags: ['process', 'communication'] },
      { text: 'okay this actually looks really good', tags: ['visual', 'design'] },
      { text: "you're so easy to talk to about this stuff", tags: ['people', 'communication'] },
    ],
  },
  {
    id: 'q6',
    question: "Last one - what's your villain origin story in a group chat?",
    options: [
      { text: 'reply-all with a screenshot of the exact error', tags: ['debugging'] },
      { text: 'turn a messy plan into a colour-coded list', tags: ['organising', 'process'] },
      { text: "redo the whole doc's formatting without being asked", tags: ['visual', 'design'] },
      { text: 'become the unofficial group therapist', tags: ['people', 'communication'] },
    ],
  },
];
