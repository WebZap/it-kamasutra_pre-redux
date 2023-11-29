import React from "react";
import s from "./Navbar.module.css";
import BarMenu from "./BarMenu/BarMenu";
import FriendsBox from "./FriendsBox/FriendsBox";

const Navbar = (props) => {


    return (
        <div className={s.nav}>
            <BarMenu barMenuLinks={props.state.barMenuLinks}/>
            <FriendsBox friendsBox={props.state.friendsBox}/>
        </div>
    );
};

export default Navbar;
