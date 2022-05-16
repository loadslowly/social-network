import React from "react";
import style from './App.module.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className={style.main}>
                    <Sidebar state={props.state.sideBarFriends}/>
                    <div className={style.content}>
                        <Routes>
                            <Route path="/" element = {<Profile state={props.state.profilePage}         dispatch={props.dispatch}/>  }/>
                            <Route path="/profile" element = {<Profile state={props.state.profilePage}  dispatch={props.dispatch}/>}/>
                            <Route path="/dialogs/*" element = {<Dialogs state={props.state.dialogsPage}/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
