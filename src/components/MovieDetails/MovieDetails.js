import PageHeading from "../PageHeading/PageHeading";
import { Link } from "react-router-dom";
import styled from "./MovieDetails.module.css";

export default function MovieDetails({
  title,
  release_date,
  poster_path,
  overview,
  id,
  name,
  genres,
  url,
  score,
}) {
  return (
    <>
      <PageHeading text={`${title}(${release_date.slice(0, 4)})`} />
      <img
        className={styled.poster}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="{movie.title}"
      />
      <p className={styled.overview}>User Score: {score}%</p>

      <h2 className={styled.subTitle}>Overview</h2>
      <p className={styled.overview}>{overview}</p>
      <h2 className={styled.subTitle}>Genres</h2>
      <ul>
        {genres.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
      <p className={styled.subTitle}>Additional information</p>
      <ul>
        <li>
          <Link
          // to={`/${url}/cast`}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link>Reviews</Link>
        </li>
      </ul>
    </>
  );
}
