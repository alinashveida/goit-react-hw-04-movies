import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "../services/moviesApi";
import CastList from "../components/CastList/CastList";
import Spinner from "../components/Spinner/Spinner";
import Status from "../services/Status";

export default function CastView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);
    async function fetchMovieCast() {
      try {
        const movieCredits = await fetchMovieCredits(movieId);
        console.log(movieCredits);
        setCast(movieCredits);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error.message);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && (
        <>
          <Spinner />
        </>
      )}

      {status === Status.REJECTED && <>{error.message}</>}

      {status === Status.RESOLVED && <>{cast && <CastList cast={cast} />}</>}
    </>
  );
}
