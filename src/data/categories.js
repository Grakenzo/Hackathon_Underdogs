// Categories shown on the Start screen.
// Only "technology" is wired up to the quiz right now. The rest are
// placeholders so the screen shows the full shape of the product -
// they're rendered greyed out with a "coming soon" label and are not
// clickable (see CategoryCard.jsx).
export const categories = [
  { id: 'technology', name: 'Technology', enabled: true },
  { id: 'business-admin', name: 'Business and admin', enabled: false },
  { id: 'health-community', name: 'Health and community', enabled: false },
  { id: 'creative-media', name: 'Creative and media', enabled: false },
  { id: 'hospitality-retail', name: 'Hospitality and retail', enabled: false },
  { id: 'trades-construction', name: 'Trades and construction', enabled: false },
];
