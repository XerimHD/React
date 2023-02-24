import React from "react";
import s from './Dec.module.css';
import Info from "./Info/Info";
const Dec = () => {
    return (
        <div className={s.dec}>
         <div className={s.item}>
            <img src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg" alt="" />
         </div>
            <Info/>
        </div>

    )
}

export default Dec;