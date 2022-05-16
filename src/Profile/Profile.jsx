import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let profileInfoElement = props.state.profileInfoData.map(item => <ProfileInfo ava={item.ava} name={item.name} dataOfBirth={item.dataOfBirth} city={item.city} education={item.education} website={item.website} />);
    return (
        <div>
            {profileInfoElement}
            <MyPosts
                newPostText={props.state.newPostText}
                postData={props.state.postData}
                dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;