import React from "react";
import s from "./BarMenu.module.css";
import { NavLink } from "react-router-dom";
import BarLink from "./BarLink/BarLink";

const BarMenu = (props) => {
    const barLinks = props.barMenuLinks.map((link) => (
        <BarLink key={link.id} path={link.path} nameLink={link.nameLink} />
    ));

    return (
        <nav className={s.nav}>
            <ul className={s.nav_content}>{barLinks}</ul>
        </nav>
    );
};

export default BarMenu;
