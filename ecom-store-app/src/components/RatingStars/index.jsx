import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function RatingStars({ rating, size = 16 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="gold" size={size} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="gold" size={size} />);
    } else {
      stars.push(<FaRegStar key={i} color="#ccc" size={size} />);
    }
  }
  return <div style={{ display: "flex" }}>{stars}</div>;
}
