import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/moviesApi";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { useRouteMatch } from "react-router-dom";

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await fetchMovieDetails(movieId);
        console.log(movie);
        setMovie(movie);
      } catch (error) {
        console.log("error");
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
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
          score={movie.vote_count}
          // url={url}
        ></MovieDetails>
      )}
    </>
  );
}
