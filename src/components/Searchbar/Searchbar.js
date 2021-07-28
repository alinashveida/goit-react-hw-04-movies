import styled from "./Searchbar.module.css";
import { toast } from "react-toastify";

export default function Searchbar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const movieName = event.target.elements.movieName.value;

    if (movieName === "") {
      toast.error("Введите текст");
      return;
    }
    onSubmit(movieName);

    event.target.elements.movieName.value = "";
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <input
        className={styled.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        name="movieName"
      ></input>

      <button className={styled.button} type="submit">
        <span></span>
      </button>
    </form>
  );
}
