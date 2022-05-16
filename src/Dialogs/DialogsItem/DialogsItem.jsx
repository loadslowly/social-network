import React from "react";
import style from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div>
            <div className={style.dialog + ' ' + style.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogsItem;