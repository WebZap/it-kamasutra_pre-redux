import React from "react";
import s from "./Dialogs.module.css";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const Dialogs = ({ dialogsData, messageData, NewMessageValue, dispatch }) => {
    let dialogs = dialogsData.map((item) => (
        <Dialog key={item.id} userName={item.userName} id={item.id} />
    ));
    let messages = messageData.map((item) => (
        <Message key={item.id} message={item.userMessage} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogs}</div>
            <div className={s.messages}>
                <div>{messages}</div>
                <AddMessage
                    dispatch={dispatch}
                    NewMessageValue={NewMessageValue}
                />
            </div>
        </div>
    );
};

export default Dialogs;
