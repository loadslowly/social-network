import React from "react";
import style from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={style.friendBlockItem}>
            <img className={style.friendAva} src={props.image}/>
            <p>{props.name}</p>
        </div>
    );
}

export default Friends;