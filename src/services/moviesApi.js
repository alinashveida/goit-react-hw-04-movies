const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "9eee26d1e10566f0d10b658e6506ea91";

export async function fetchTrendingMovies() {
  const URL = `${BASE_URL}/trending/all/day?api_key=${KEY}`;
  const responce = await fetch(URL);
  const responceJson = await responce.json();
  const data = responceJson.results;
  console.log(data);
  return data;

  //   return fetch(URL).then((responce) => {
  //     if (responce.ok) {
  //       return responce.json()
  //     }

  //     return Promise.reject(new Error('Error'))
  //   })
}

export async function fetchSearchMovies(movie) {
  const URL = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`;

  const responce = await fetch(URL);
  const responceJson = await responce.json;
  const data = responceJson.data;

  return data;

  //   return fetch(URL).then((responce) => {
  //     if (responce.ok) {
  //       return responce.json()
  //     }

  //     return Promise.reject(new Error('Error'))
  //   })
}

export async function fetchMovieDetails(movie_id) {
  const URL = `${BASE_URL}//movie/${movie_id}?api_key=${KEY}&language=en-US`;

  const responce = await fetch(URL);

  const responceJson = await responce.json();
  //   const data = responceJson

  return responceJson;
}

export async function fetchMovieCredits(movie_id) {
  const URL = `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`;

  const responce = await fetch(URL);
  const responceJson = await responce.json;
  const data = responceJson.data;

  return data;
}

export async function fetchMovieReviews(movie_id) {
  const URL = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`;

  const responce = await fetch(URL);
  const responceJson = await responce.json;
  const data = responceJson.data;

  return data;
}
