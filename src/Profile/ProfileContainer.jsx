import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    let profileInfoElement = props.store.getState().profilePage.profileInfoData.map(item => <ProfileInfo ava={item.ava} name={item.name} dataOfBirth={item.dataOfBirth} city={item.city} education={item.education} website={item.website} />);
    return (
        <div>
            {profileInfoElement}
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;