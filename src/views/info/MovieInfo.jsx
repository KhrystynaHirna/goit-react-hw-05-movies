import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  Routes,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import * as api from '../../api/Api';
import s from './MovieInfo.module.css';
import Button from 'components/button/Button';

const Cast = lazy(() =>
  import('../cast/Cast' /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import('../reviews/Reviews' /* webpackChunkName: "reviews-view" */)
);

export default function MovieInfo() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const { title, genres, overview, vote_average } = movie;
  const userScore = vote_average * 10;
  const src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
  let movieGenres = [];
  const [page] = useState(location.state.from);
  let navigate = useNavigate();

  function onClick() {
    navigate(page);
  }

  if (genres) {
    movie.genres.map(({ name }) => movieGenres.push(name));
  }

  useEffect(() => {
    api.fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <>
        <Button onClick={onClick} />
        <div className={s.wrapper}>
          <img src={src} alt={movie.title} className={s.img} />
          <div className={s.info}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.text}>User score: {userScore}%</p>
            <h3 className={s.title}>Overview</h3>
            <p className={s.text}>{overview}</p>
            <h3 className={s.title}>Genres</h3>
            <p className={s.text}>{movieGenres.join(', ')}</p>
          </div>
        </div>
        <div>
          <h3 className={s.title}>Additional information</h3>
          <nav className={s.nav}>
            <NavLink
              to={`cast`}
              state={{ from: location }}
              className={s.navItem}
              style={({ isActive }) => ({
                color: isActive ? 'purple' : 'black',
              })}
            >
              Cast
            </NavLink>
            <NavLink
              to={`reviews`}
              state={{ from: location }}
              className={s.navItem}
              style={({ isActive }) => ({
                color: isActive ? 'purple' : 'black',
              })}
            >
              Reviews
            </NavLink>
          </nav>
          <Suspense fallback={<div>Please wait...</div>}>
            <Routes>
              <Route exact path="/cast" element={<Cast />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </div>
      </>
    )
  );
}