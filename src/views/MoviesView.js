import { useState, useEffect } from "react";
import { fetchSearchMovies } from "../services/moviesApi";
import Searchbar from "../components/Searchbar/Searchbar";
import MovieList from "../components/MovieList/MovieList";
import Button from "../components/Button/Button";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router";
import Spinner from "../components/Spinner/Spinner";
import Status from "../services/Status";

export default function MoviesView() {
  const [movieName, setMovieName] = useState("");
  const [moviesList, setmoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const onSubmit = (movieName) => {
    setMovieName(movieName);
    setmoviesList([]);

    setPage(1);

    history.push({
      ...location,
      search: `query=${movieName}`,
    });

    console.log(movieName);
  };

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
    if (!movieName) {
      return;
    }
    setStatus(Status.PENDING);
    async function fetchMovies() {
      try {
        const movies = await fetchSearchMovies(movieName, page);

        if (movies.length === 0) {
          toast.error("По вашему запросу ничего не найдено");
        }
        setmoviesList((state) => [...state, ...movies]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error.message);
      }
    }

    fetchMovies();
  }, [movieName, page]);
  return (
    <>
      {status === "idle" && <Searchbar onSubmit={onSubmit}></Searchbar>}

      {status === Status.PENDING && (
        <>
          <Spinner />
        </>
      )}

      {status === Status.REJECTED && <>{error.message}</>}

      {status === Status.RESOLVED && (
        <>
          <Searchbar onSubmit={onSubmit}></Searchbar>
          {moviesList && (
            <>
              <MovieList movies={moviesList} />
              {moviesList.length > 19 && <Button onClick={onButtonLoadMore} />}
            </>
          )}
        </>
      )}
    </>
  );
}
