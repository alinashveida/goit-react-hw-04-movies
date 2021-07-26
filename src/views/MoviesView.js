import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/moviesApi";

export default function MoviesView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log("error");
      }
    }

    fetchMovies();
  }, []);
  return <div></div>;
}
