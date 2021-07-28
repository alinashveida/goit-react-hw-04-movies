import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/moviesApi";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Spinner from "../components/Spinner/Spinner";
import Status from "../services/Status";

export default function MovieDetailsView() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);
    async function fetchMovie() {
      try {
        const movie = await fetchMovieDetails(movieId);
        console.log(movie);
        setMovie(movie);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error.message);
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <main>
      {status === Status.PENDING && (
        <>
          <Spinner />
        </>
      )}

      {status === Status.REJECTED && <>{error.message}</>}

      {status === Status.RESOLVED && (
        <>
          {movie && (
            <MovieDetails
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              overview={movie.overview}
              id={movie.id}
              name={movie.name}
              genres={movie.genres}
              vote={movie.vote_average}
            ></MovieDetails>
          )}
        </>
      )}
    </main>
  );
}
