import React from "react";
import s from "../MyPosts.module.css";
import {ActionCreator} from "../../../../../redux/store";
import {ActionProfilePageCreators} from "../../../../../redux/redusers/profile_page_reducer";


const AddPostBlock = (props) => {


    const addText = () => {
        let action = ActionProfilePageCreators.setProfilePost()
        props.dispatch(action)
    }

    const AddValueInPost = (event) => {
        let text = event.target.value
        let action = ActionProfilePageCreators.updatePostValue(text)
        props.dispatch(action)
    }

    return (
        <div className={s.inputBlock}>
            <div>
                <textarea onChange={AddValueInPost}

                          value={props.NewPostValue}
                          cols="20"
                          rows="5"/>
            </div>

            <button onClick={addText}>Добавить постичек !!!</button>
        </div>
    );
};

export default AddPostBlock;

