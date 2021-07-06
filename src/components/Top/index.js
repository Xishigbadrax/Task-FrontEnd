import React from "react";
import css from "./style.module.css";
import { IoIosGlobe } from "react-icons/io";

const Top = () => (
  <div className={css.Top}>
    <div>
      <IoIosGlobe className={css.Ellipse} />
    </div>
    <div className={css.Top1}>Global -English</div>

    <div className={css.Top2}>RETURNING AN ORDER?</div>

    <a className={css.Top1Txt} href="/">
      Click for more info
    </a>

    <div>
      <a className={css.A1} href="/">
        SIGN IN
      </a>
      <a className={css.A2} href="/">
        SIGN UP
      </a>
    </div>
  </div>
);

export default Top;
