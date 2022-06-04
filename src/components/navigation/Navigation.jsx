
import { NavLink } from 'react-router-dom';
import s from "./Navigation.module.css";


export default function Navigation() {
    return (
        <nav>
            <NavLink to='/'
                style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
                className={s.link}
            >
                Movies
            </NavLink>    
       </nav>
    )
};






