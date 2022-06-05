import PropTypes from 'prop-types';
import ListItem from '../../views/list/ListItem';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map(movie => (
            <ListItem movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};