import React from "react";
import s from "./Header.module.css";
const Header = () => {
    return (
        <header className={s.header}>
            <img
                className={s.image}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
            />
        </header>
    );
};

export default Header;
