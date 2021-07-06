import React from "react";
import css from "./style.module.css";

const FooterText = (props) => (
  <div>
    <p className={`${css[props.class1]} ${css[props.class2]}`}>{props.text}</p>
  </div>
);

export default FooterText;
