import MovieItem from "../MovieItem/MovieItem";
import styled from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={styled.movieList}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
