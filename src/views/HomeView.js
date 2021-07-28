import PageHeading from "../components/PageHeading/PageHeading";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/moviesApi";
import MovieList from "../components/MovieList/MovieList";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";
import Status from "../services/Status";

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  const onButtonLoadMore = (event) => {
    setPage((page) => page + 1);

    scrollToEnd();
  };

  const scrollToEnd = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  useEffect(() => {
    setStatus(Status.PENDING);
    async function fetchMovies() {
      try {
        const movies = await fetchTrendingMovies(page);

        setMovies((state) => [...state, ...movies]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error.message);
      }
    }

    fetchMovies();
  }, [page]);
  return (
    <main>
      {status === Status.PENDING && (
        <>
          <Spinner />
        </>
      )}

      {status === Status.REJECTED && <>{error.message}</>}

      {status === Status.RESOLVED && (
        <>
          <PageHeading text="Trending today" />
          {movies && (
            <>
              <MovieList movies={movies} />
              <Button onClick={onButtonLoadMore} />
            </>
          )}
        </>
      )}
    </main>
  );
}
