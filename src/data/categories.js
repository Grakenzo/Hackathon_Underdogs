// Categories shown on the Start screen, ported from
// pathfinder-prototype-v4.html's CATEGORIES constant.
// Only "technology" is wired up to the quiz right now. The rest are
// placeholders so the screen shows the full shape of the product -
// they're rendered greyed out with a "Soon" label and are not
// clickable (see CategoryCard.jsx).
export const categories = [
  { id: 'technology', name: 'Technology', enabled: true },
  { id: 'business', name: 'Business', enabled: false },
  { id: 'health', name: 'Health', enabled: false },
  { id: 'creative', name: 'Creative', enabled: false },
  { id: 'hospitality', name: 'Hospitality', enabled: false },
  { id: 'trades', name: 'Trades', enabled: false },
];
