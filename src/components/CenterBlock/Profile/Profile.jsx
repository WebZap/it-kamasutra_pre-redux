import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     dispatch = {props.dispatch}
                     NewPostValue={props.NewPostValue}
            />
        </main>
    );
};

export default Profile;
