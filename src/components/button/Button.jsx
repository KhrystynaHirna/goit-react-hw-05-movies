import PropTypes from "prop-types";
import s from "./Button.module.css";

export default function Button({ onClick }) {
    return (
        <div className={s.Container}>
            <button type="button" className={s.Button} onClick={onClick}>
            Go back
           </button>
        </div>
        
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};