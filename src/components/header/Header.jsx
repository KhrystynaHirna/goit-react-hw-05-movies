import Navigation from '../navigation/Navigation';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header} >
      <Navigation />
    </header>
  )
};
