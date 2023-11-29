import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostBlock from "./AddPostBlock/AddPostBlock";


const MyPosts = (props) => {

    let messages = props.postsData.map(item=> <Post key={item.id} message={item.message} countLike={item.countLikes} img={item.img}/>)


    return (
        <div className={s.postsBlock}>
            My posts
            <AddPostBlock dispatch={props.dispatch}
                          NewPostValue={props.NewPostValue}

            />
            <div>NewPost</div>
            <div>
                {messages}
            </div>
        </div>
    );
};

export default MyPosts;
