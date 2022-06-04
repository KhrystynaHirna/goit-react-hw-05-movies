const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '797c8d09920f943adb703c8d278f5556';

async function fetchMovies(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
    return fetchMovies(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
}
export function fetchSearchMovies(query) {
    return fetchMovies(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
}
export function fetchMoviesInfo(id) {
    return fetchMovies(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
}
export function fetchMoviesReviews(id) {
    return fetchMovies(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
}
export function fetchMoviesActors(id) {
    return fetchMovies(`${BASE_URL}movie/${id}/actors?api_key=${API_KEY}`);
}