import React from "react";
import css from "./style.module.css";
import SecondImg1 from "../SecondImg1";
import SecondImg2 from "../../assets/2nd-2.png";
import SecondImg3 from "../../assets/2nd-3.png";
import Button from "../Button";

const Second = () => (
  <div>
    <p className={css.Winter}>WINTER SPICE 2020</p>
    <p className={css.Txt}>
      Infusion of summer pieces and cashmere silk blends.
    </p>
    <Button text="SHOP NOW" color="Button2" />
    <SecondImg1 ImgClass="Img1" />
    <img className={css.img2} src={SecondImg2} alt="img2" />
    <img className={css.img3} src={SecondImg3} alt="img3" />
    <p className={css.Txt2}>
      Infusion of summer pieces and cashmere silk blends.
    </p>
  </div>
);

export default Second;
