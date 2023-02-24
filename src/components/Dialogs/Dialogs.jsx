import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom"
import DialogItem from './DialogItem/DialogsItem'
import Massage from './Massage/Massage'










const Dialogs = (props) => {
    let mes = React.createRef();
    let mesElement = () => {
        let text = mes.current.value;
        alert(text);

    }
    return (
        <div className={s.dialogs}>
            <div className={s.ditems}>

                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)}


            </div>
            <div className={s.massages}>
               {props.massages.map(m => <Massage massage={m.massage} />)} 
            </div>
            <div className={s.tb}>
                <textarea ref={mes}></textarea>
                <button onClick={mesElement}>→</button>
            </div>

        </div>

    )
}

export default Dialogs;