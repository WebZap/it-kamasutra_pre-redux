import React from "react";
import s from "./CenterBlock.module.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const CenterBlock = (props) => {
    let state = props.state;

    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Profile
                            postsData={state.profilePage.postsData}
                            NewPostValue={state.profilePage.NewPostValue}
                            dispatch={props.dispatch}
                        />
                    }
                />
                <Route
                    path="/dialogs/"
                    element={
                        <Dialogs
                            dispatch={props.dispatch}
                            messageData={state.dialogPage.messageData}
                            dialogsData={state.dialogPage.dialogsData}
                            NewMessageValue={state.dialogPage.newMessageData}
                        />
                    }
                />
                <Route path="/news" element={<News />} />
                <Route path="/my-music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
};

export default CenterBlock;
