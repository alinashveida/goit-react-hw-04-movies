import PageHeading from "../components/PageHeading/PageHeading";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/moviesApi";
import { Link, useRouteMatch } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";

export default function HomeView() {
  // const { url } = useRouteMatch()
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
  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MovieList movies={movies} />}
    </>
  );
}
