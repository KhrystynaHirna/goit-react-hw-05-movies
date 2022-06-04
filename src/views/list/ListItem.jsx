import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './ListItem.module.css';

export default function ListItem({ movie }) {
    const location = useLocation();

    return (
        <>
            <li className={s.item}>
                <Link to={`/movies/$movie.id`}
                    state={{ from: location }}
                    className={s.link}
                >
                    {movie.title}
                </Link>
            </li>
        </>
    );
}

ListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};