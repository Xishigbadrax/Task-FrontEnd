import React from "react";
import css from "./style.module.css";
import El1 from "../../assets/el1.png";
import El2 from "../../assets/el2.png";
import El3 from "../../assets/el3.png";
import El4 from "../../assets/el4.png";
import El5 from "../../assets/el5.png";
import El6 from "../../assets/el6.png";
import El7 from "../../assets/el7.png";

const ToGetItem2 = (props) => (
  <div>
    <img className={css[props.classImg]} src={props.uri} alt="Img" />
    <p className={css[props.classText]}>{props.text}</p>
    <div className={css[props.colors]}>
      <div className={css.el}>
        <img src={El1} alt="El1" />
        <img src={El2} alt="El2" />
        <img src={El3} alt="El3" />
        <img src={El4} alt="El4" />
        <img src={El5} alt="El5" />
        <img src={El6} alt="El6" />
        <img src={El7} alt="El7" />
        <text className={css.Seventeen}>+17</text>
      </div>
    </div>
  </div>
);

export default ToGetItem2;
