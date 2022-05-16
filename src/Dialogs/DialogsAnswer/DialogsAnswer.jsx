import React from "react";
import style from './DialogsAnswer.module.css';

const DialogsAnswer = (props) => {
    return (
        <div className={style.dialogAnswer}>
            {props.text}
        </div>
    );
}

export default DialogsAnswer;
