import { lazy, Suspense } from "react";
import PageHeading from "../PageHeading/PageHeading";
import { NavLink } from "react-router-dom";
import styled from "./MovieDetails.module.css";
import { useRouteMatch, useLocation } from "react-router-dom";
import { Route, useHistory } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import noAvatar from "../../images/default.jpg";

import PropTypes from "prop-types";

const CastView = lazy(() =>
  import("../../views/CastView" /*webpackChunkName: "cast-view" */)
);
const ReviewsView = lazy(() =>
  import("../../views/ReviewsView" /*webpackChunkName: "reviews-view" */)
);

export default function MovieDetails({
  title,
  release_date,
  poster_path,
  overview,
  id,
  name,
  genres,
  vote,
}) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const location = useLocation();

  console.log(location);

  const goBack = () => {
    history.push(location?.state?.from ?? "/");
    // history.goBack()
  };

  return (
    <>
      <button className={styled.btnGoBack} type="button" onClick={goBack}>
        Go back
      </button>

      <div className={styled.wraper}>
        <img
          className={styled.poster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noAvatar
          }
          alt="{movie.title}"
        />
        <div className={styled.wraperDescr}>
          <PageHeading
            text={`${title} (${release_date && release_date.slice(0, 4)})`}
          />

          <p className={styled.subTitle}>User Score: {vote}</p>

          <h2 className={styled.subTitle}>Overview</h2>
          <p className={styled.text}>{overview}</p>
          <h2 className={styled.subTitle}>Genres</h2>
          <ul>
            {genres.map((movie) => (
              <li key={movie.id} className={styled.text}>
                -{movie.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr></hr>

      <p className={styled.subTitle}>Additional information</p>
      <ul>
        <li className={styled.linkWraper}>
          <NavLink
            activeClassName={styled.activeLink}
            className={styled.link}
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
        </li>
        <li className={styled.linkWraper}>
          <NavLink
            activeClassName={styled.activeLink}
            className={styled.link}
            NavLink
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr></hr>

      <Suspense fallback={<Spinner />}>
        <Route path="/movies/:movieId/cast">
          <CastView />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <ReviewsView />
        </Route>
      </Suspense>
    </>
  );
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  genres: PropTypes.array,
  vote: PropTypes.number,
};
