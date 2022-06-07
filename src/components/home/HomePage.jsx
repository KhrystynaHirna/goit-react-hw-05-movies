import { useState, useEffect } from 'react';
import * as api from '../../api/Api';
import MovieList from '../movie/MovieList';
import s from './HomePage.module.css';

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(data => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      <MovieList movies={popularMovies} />
    </>
  );
}