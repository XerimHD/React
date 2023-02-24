import React from "react";
import { Link } from "react-router-dom";
import s from './Navbar.module.css';
function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to={"/profile"}>Profile</Link>
            </div>
            <div className={s.item}>
                <Link to={"/dialogs"}>Messages</Link>
            </div>
            <div className={s.item}>
                <Link to={"/News"} >News</Link>
            </div>
            <div className={s.item}>
                <Link to={"/Music"}>Music</Link>
            </div>
            <div className={s.item}>
                <Link to={"/Settings"}>Settings</Link>
            </div>
            <div>
                Friends
                
            </div>
        </nav>
    )
}

export default Navbar;