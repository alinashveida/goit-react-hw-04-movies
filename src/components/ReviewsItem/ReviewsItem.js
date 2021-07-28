import styled from "./ReviewsItem.module.css";

export default function ReviewsItem({ review }) {
  return (
    <li>
      <h3 className={styled.title}>Author: {review.author}</h3>
      <p className={styled.text}>{review.content}</p>
    </li>
  );
}
