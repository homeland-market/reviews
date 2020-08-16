export const Filter = {
  byRating(reviews, target) {
    return reviews.filter((review) => review.rating === target);
  },
  byText(reviews, target) {
    return reviews.filter((review) => review.comment.toLowerCase().includes(target));
  },
};

export const Sort = {
  includesCustomerPhotos(reviews) {
    return reviews.sort((a, b) => (a.img === null) - (b.img === null) || +(a > b) || -(a < b));
  },
  mostRecent(reviews) {
    return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  },
  mostHelpful(reviews) {
    return reviews.sort((a, b) => b.helpful - a.helpful);
  },
};

export const Calc = {
  getStartPercentagesFills(reviews) {
    let reviewStars = 5;
    const starPercentages = {};
    const reviewTotal = reviews.length;
    const filter = (starNumber) => reviews.reduce((acc, review) => acc
      + (review.rating === starNumber ? 1 : 0), 0);
    while (reviewStars > 0) {
      const starTotals = filter(reviewStars);
      if (starTotals === 0) {
        starPercentages[reviewStars] = '0';
      } else {
        starPercentages[reviewStars] = ((starTotals / reviewTotal) * 100).toFixed(1);
      }
      reviewStars -= 1;
    }
    return starPercentages;
  },
  getTotalReviewAverageScore(reviews) {
    const reviewTotal = reviews.reduce((acc, review) => acc + (review.rating || null), 0);
    const totalReviewAverage = (reviewTotal / reviews.length).toFixed(1);
    return totalReviewAverage;
  },
};
