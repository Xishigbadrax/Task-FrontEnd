import React from "react";
import css from "./style.module.css";

const Button = (props) => (
  <button className={css[props.color]}>{props.text}</button>
);

export default Button;
