import React from "react";
import css from "./style.module.css";
import Img from "../../assets/2nd-1.png";

const SecondImg1 = (props) => (
  <div>
    <img className={css[props.ImgClass]} src={Img} alt="img1" />
  </div>
);

export default SecondImg1;
