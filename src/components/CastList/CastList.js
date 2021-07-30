import CastItem from "../CastItem/CastItem";
import styled from "./CastList.module.css";

export default function CastList({ cast }) {
  return (
    <ul className={styled.castList}>
      {cast.map((actor) => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </ul>
  );
}
