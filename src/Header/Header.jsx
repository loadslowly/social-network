import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <div className={style.logo}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/733/733579.png'} alt={'twitter'}/>
                </div>
            </div>
        </header>
    );
}

export default Header;