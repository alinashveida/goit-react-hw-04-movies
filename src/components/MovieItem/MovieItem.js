import { Link } from "react-router-dom";
import styled from "./MovieItem.module.css";
import noAvatar from "../../images/default.jpg";

export default function MovieItem({ movie }) {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}>
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
