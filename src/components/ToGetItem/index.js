import React from "react";
import css from "./style.module.css";

const ToGetItem = (props) => (
  <div>
    <img className={css[props.classImg]} src={props.uri} alt="Img" />
    <p className={css[props.classText]}>{props.text}</p>
    <div>
      <text className={css[props.price1]}>$ 299.00</text>
      <text className={css[props.price2]}>$ 79.00</text>
    </div>
  </div>
);

export default ToGetItem;
