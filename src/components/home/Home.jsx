import { useState, useEffect } from 'react';
import * as Api from '../../api/Api';
import MovieList from '../movie/MovieList';
import s from './Home.module.css';

export default function Home() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        Api.fetchPopularMovies().then(data => setPopularMovies(data.results));
    }, []);

    return (
        <>
            <h2 className={s.title}>
                Trending today
            </h2>
            <MovieList movies={popularMovies} />
        </>
    )
};