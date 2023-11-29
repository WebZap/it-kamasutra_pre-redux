import store from "./redux/store";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import React from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));

let state = store.getState()
console.log(state)
const rerenderEntireTree = (state) => {

    root.render(
        <Router>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </Router>
    );
}
rerenderEntireTree(state)

store.subscribe(rerenderEntireTree)

