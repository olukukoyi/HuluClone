const API_KEY = "<b79b4a2d0d33d7383a6a5981d191ddf9>";

const Requests = {
  fetchTrending: `/trending/all/week?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=9648`,
  fetchScifi: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=16`,
  fetchTv: `/discover/movie?api_key=b79b4a2d0d33d7383a6a5981d191ddf9&with_genres=10770`,
};

export default Requests;
