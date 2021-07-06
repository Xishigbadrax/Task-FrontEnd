import React from "react";
import css from "./style.module.css";
import Img1 from "../../assets/women-1.png";
import Img2 from "../../assets/women-2.png";

const Women = () => (
  <div>
    <p className={css.Txt}>WOMEN</p>
    <img className={css.Img1} src={Img1} alt="Img1" />
    <img className={css.Img2} src={Img2} alt="Img2" />
    <img className={css.Img3} src={Img1} alt="Img3" />
  </div>
);

export default Women;
