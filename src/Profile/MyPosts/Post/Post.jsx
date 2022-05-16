import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.news_block}>
                <div className={style.news_ava}>
                    <img src={props.img} />
                </div>
                <div className={style.information}>
                    <h4>{props.message}</h4>
                </div>
            </div>
            <div className={style.likes}>
                <p>{"Like: " + props.likesCount}</p>
            </div>
        </div>
    );
}

export default Post;