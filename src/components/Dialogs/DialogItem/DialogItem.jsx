import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return(
      <div className={s.dialog}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt="" />
          <NavLink className={navData => navData.isActive ? s.active : s.item } to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
  )
}

export  default  DialogItem;
