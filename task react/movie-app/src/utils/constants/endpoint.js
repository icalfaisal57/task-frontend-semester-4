const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?page=1&api_key=${API_KEY}`,
    TRENDING: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    TOPRATED : `${BASE_URL}/movie/top_rated?page=1&api_key=${API_KEY}`,
    RECOMMENDATION(id){
    return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`;},
    DETAIL(id)  {
    return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;}
};

const getDetailEndpoint = (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

export { ENDPOINTS, getDetailEndpoint };
