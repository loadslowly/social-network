import React from "react";
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const Sidebar = (props) => {
    let friendsElement = props.state.map(item => <Friends name={item.name} image={item.image} />);


    return (
        <div>
            <nav className={style.sidebar}>
                <div><NavLink to={'/news'}     className={({ isActive }) => (isActive ? `${style.active}` : "")}>News</NavLink></div>
                <div><NavLink to={'/dialogs'}  className={({ isActive }) => (isActive ? `${style.active}` : "")}>Messages</NavLink></div>
                <div><NavLink to={'/profile'}  className={({ isActive }) => (isActive ? `${style.active}` : "")}>Profiles</NavLink></div>
                <div><NavLink to={'/music'}    className={({ isActive }) => (isActive ? `${style.active}` : "")}>Music</NavLink></div>
                <div><NavLink to={'/settings'} className={({ isActive }) => (isActive ? `${style.active}` : "")}>Settings</NavLink></div>
            </nav>
            <div className={style.friends}>
                <h3>Friends</h3>
                <div>
                    <div className={style.friendBlock}>
                        {friendsElement}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;