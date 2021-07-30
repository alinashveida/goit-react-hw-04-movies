import { Link, useLocation } from "react-router-dom";
import styled from "./MovieItem.module.css";
import noAvatar from "../../images/default.jpg";

export default function MovieItem({ movie }) {
  const location = useLocation();

  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location },
        }}
      >
        <img
          className={styled.poster}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : noAvatar
          }
          alt={movie.title || movie.name}
        />
        <h2 className={styled.movieTitle}>{movie.title || movie.name}</h2>
      </Link>
    </li>
  );
}
