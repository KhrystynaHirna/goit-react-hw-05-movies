import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api/Api';
import s from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

  useEffect(() => {
    api.fetchMovieActors(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul className={s.list}>
          {actors.map(({ id, name, profile_path, character }) => (
            <li key={id} className={s.item}>
              {profile_path ? (
                <img
                  src={`${src}${profile_path}`}
                  alt={name}
                  className={s.img}
                />
              ) : (
                <img
                  src="https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png"
                  alt={name}
                  className={s.img}
                />
              )}
              <h3 className={s.title}>{name}</h3>
              <p className={s.text}>Character:</p>
              <h4 className={s.subTitle}>{character}</h4>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}