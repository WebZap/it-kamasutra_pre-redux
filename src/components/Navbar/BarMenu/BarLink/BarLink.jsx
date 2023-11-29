import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../BarMenu.module.css";

const BarLink = ({path, nameLink}) => {

    const styleActive = ({isActive}) => isActive ? s.active : s.item;
    return (
        <li className="item">
            <NavLink to={path} className={styleActive}>{nameLink}</NavLink>
        </li>
    );
};

export default BarLink;