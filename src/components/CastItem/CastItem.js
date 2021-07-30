import styled from "./CastItem.module.css";
import noAvatar from "../../images/default.jpg";
import PropTypes from "prop-types";

export default function CastItem({ actor }) {
  return (
    <li>
      <img
        className={styled.imgActor}
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : noAvatar
        }
        // src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
        alt={actor.name}
      />
      <h3 className={styled.actorName}>{actor.name}</h3>
      <p className={styled.actorCharacter}>Character : {actor.character}</p>
    </li>
  );
}

CastItem.propTypes = {
  actor: PropTypes.object,
};
