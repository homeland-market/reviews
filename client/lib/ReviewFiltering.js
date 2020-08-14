export const getStartPercentagesFills = (reviews) => {
  let reviewStars = 5;
  const starPercentages = {};
  const reviewTotal = reviews.length;
  const filter = (starNumber) => reviews.reduce((acc, review) => acc
    + (review.rating === starNumber ? 1 : 0), 0);
  while (reviewStars > 0) {
    const starTotals = filter(reviewStars);
    if (starTotals === 0) {
      starPercentages[reviewStars] = 0;
    } else {
      starPercentages[reviewStars] = ((starTotals / reviewTotal) * 100).toFixed(1);
    }
    reviewStars -= 1;
  }
  return starPercentages;
};

export default getStartPercentagesFills;
