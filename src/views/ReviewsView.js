import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../services/moviesApi";
import { useParams } from "react-router";
import ReviewsList from "../components/ReviewsList/ReviewsList";
import Spinner from "../components/Spinner/Spinner";
import Status from "../services/Status";

export default function ReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);
    async function fetchReviews() {
      try {
        const reviews = await fetchMovieReviews(movieId);

        setReviews(reviews);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error.message);
      }
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews && (
        <>
          {status === Status.PENDING && (
            <>
              <Spinner />
            </>
          )}

          {status === Status.REJECTED && <>{error.message}</>}

          {status === Status.RESOLVED && (
            <>
              {reviews.length > 0 ? (
                <ReviewsList reviews={reviews} />
              ) : (
                <p>We dont have any reviews for this movie</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
