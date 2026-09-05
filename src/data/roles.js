// Roles the quiz can point someone toward, and the tags that define each
// one. See scoring.js for how these tags turn into a ranked list.
//
// Tag vocabulary (shared with quiz.js): debugging, systems, organising,
// process, visual, design, people, communication.
//
// hasData: true means we've actually collected real job ads for this role
// and Screen 4 (RoleDetailScreen) has something to show. Roles without
// data show a "requirements coming soon" label instead of a detail page.
import itSupportData from './it-support.json';

export const roles = [
  {
    id: 'it-support',
    name: 'IT support officer',
    tags: ['debugging', 'people', 'communication'],
    hasData: true,
    data: itSupportData,
  },
  {
    id: 'qa-tester',
    name: 'QA tester',
    tags: ['debugging', 'systems', 'process'],
    hasData: false,
  },
  {
    id: 'business-analyst',
    name: 'Business analyst',
    tags: ['organising', 'process', 'communication'],
    hasData: false,
  },
  {
    id: 'frontend-developer',
    name: 'Frontend developer',
    tags: ['visual', 'design', 'debugging'],
    hasData: false,
  },
];
