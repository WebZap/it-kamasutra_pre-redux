import React from "react";

import s from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import CenterBlock from "./components/CenterBlock/CenterBlock";

const App = ( props ) => {
    return (
        <div className={s.appWrapper}>
            <Header />
            <Navbar state={props.state} />
            <CenterBlock dispatch={props.dispatch}
                         state={props.state}/>
        </div>
    );
};
export default App;
