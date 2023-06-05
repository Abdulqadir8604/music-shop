export const getDiscountedPricePercentage = (originalPrice, discountedPrice) => {
    return Math.round((originalPrice - discountedPrice) / originalPrice * 100);
    };