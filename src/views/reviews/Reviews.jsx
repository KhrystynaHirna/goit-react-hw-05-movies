import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api/Api';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return reviews.length === 0 ? (
    <p className={s.text}>We don't have any reviews for this movie</p>
  ) : (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3 className={s.title}>{author}</h3>
          <p className={s.text}>{content}</p>
        </li>
      ))}
    </ul>
  );
}