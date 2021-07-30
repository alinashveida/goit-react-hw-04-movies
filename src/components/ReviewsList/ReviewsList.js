import ReviewsItem from "../ReviewsItem/ReviewsItem";

export default function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
