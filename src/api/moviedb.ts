import axios from "axios";

//config

const apiBaseUrl = "https://api.themoviedb.org/3";

//endpoints
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const popularMoviesEndpoint = `${apiBaseUrl}/movie/popular?api_key=${apiKey}`;
const popularSeriesTvEndpoint = `${apiBaseUrl}/tv/popular?api_key=${apiKey}`;
const providersTvEndpoint = `${apiBaseUrl}/watch/providers/tv?api_key=${apiKey}`;

//dynamic endpoints
const detailMovie = (id) => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const detailSerie = (id) => `${apiBaseUrl}/tv/${id}?api_key=${apiKey}`;

export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;

async function apiCall(endpoint: string, params?: string) {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : { language: "pt-br", watch_region: "br" },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};

export const fetchPopularMovies = () => {
  return apiCall(popularMoviesEndpoint);
};

export const fetchPopularSeriesTv = () => {
  return apiCall(popularSeriesTvEndpoint);
};

export const fetchMovieDetails = (id) => {
  return apiCall(detailMovie(id));
};

export const fetchSerieDetails = (id) => {
  return apiCall(detailSerie(id));
};

export const fetchProvidersTv = () => {
  return apiCall(providersTvEndpoint);
};
