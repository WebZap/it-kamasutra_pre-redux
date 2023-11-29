import React from 'react';
import s from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"/>
            </div>
            <div className={s.descriptionBlock}>photo + descr</div>
        </div>
    );
};

export default ProfileInfo;