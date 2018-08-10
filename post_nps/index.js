//Returns the category of the customer based on the NPS score,
const getCategory = nps => {
  if (nps > 8) return 'promoter';
  if (nps > 6) return 'passive';
  return 'detractor';
};

if (changes && changes.user) {
  const { nps_rating } = changes.user;
  // If the NPS Rating Changes
  if (nps_rating[0] !== undefined) {
    hull.traits(
      {
        // Tells you if the latest score was an increase or a drecrease.
        direction: nps_rating[1] > nps_rating[0] ? 'increase' : 'decrease',
        category: getCategory(nps_rating[1])
      },
      { source: 'nps' }
    );
  }
}
