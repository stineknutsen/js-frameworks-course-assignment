export default function getDiscountPercentage(price, discountedPrice) {
  if (!discountedPrice || discountedPrice >= price) return 0;
  return Math.round(((price - discountedPrice) / price) * 100);
}
