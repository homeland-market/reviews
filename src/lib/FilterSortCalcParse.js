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

  totalStarReviewCount(reviews, rating) {
    return reviews.reduce((acc, review) => acc + (review.rating === rating ? 1 : 0), 0);
  },

};

export const Parse = {

  parseDate(date) {
    const splitDate = date.substring(0, date.indexOf('T')).split('-');
    const month = splitDate[1];
    const day = splitDate[2];
    const year = splitDate[0];
    return `${month}/${day}/${year}`;
  },

  showingReviewsOfText(filterCondition, reviewDisplayCount, filteredReviews) {
    const prefix = filteredReviews.length ? '1-' : '0-';
    const suffix = reviewDisplayCount > filteredReviews.length
      ? filteredReviews.length : reviewDisplayCount;
    const totalReviewsCount = filteredReviews.length;
    return `Showing ${prefix}${suffix} of ${totalReviewsCount} `;
  },

  reviewsWithText(filterCondition) {
    if (filterCondition !== 0 && typeof filterCondition === 'number') {
      return `reviews with "${filterCondition} stars".`;
    }
    if (filterCondition !== '' && typeof filterCondition === 'string') {
      return `reviews with "${filterCondition}".`;
    }
    return 'reviews.';
  },

  showMoreReviewsNumber(filteredReviewsLength, reviewDisplayCount) {
    const remainingReviewAmount = filteredReviewsLength - reviewDisplayCount;
    const showAmount = remainingReviewAmount >= 10 ? 10 : remainingReviewAmount;
    return `Show ${showAmount} More Reviews`;
  },

};
