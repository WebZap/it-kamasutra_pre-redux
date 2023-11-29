import React from "react";
import s from "./AddMessage.module.css";
import { ActionDialogPageCreators } from "../../../../redux/redusers/dialog_page_reducer";

const AddMessage = ({ NewMessageValue, dispatch }) => {
    return (
        <div className={s.messageBlock}>
            <textarea
                onChange={onMessageChange}
                name="message"
                cols="20"
                rows="5"
                className={s.textArea}
                value={NewMessageValue}
            />

            <button onClick={addMessage}>Add message!</button>
        </div>
    );
};

export default AddMessage;
