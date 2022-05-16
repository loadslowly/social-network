import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.header}>
            <div className={style.ava}>
                <img src={props.ava} />
            </div>
            <div className={style.description}>
                <h3>{props.name}</h3>
                <p id={"first"}>Date of Birth: {props.dataOfBirth}</p>
                <p>City: {props.city}</p>
                <p>Education: {props.education}</p>
                <p>Website: {props.website}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;