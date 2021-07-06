import React from "react";
import css from "./style.module.css";
import logoImg from "../../assets/GOBI.png";
import logoTxt from "../../assets/cashmere for all.png";

const Logo = () => (
  <div>
    <img className={css.Logo} src={logoImg} alt="logoImg" />

    <img className={css.LogoTxt} src={logoTxt} alt="logoTxt" />
  </div>
);

export default Logo;
