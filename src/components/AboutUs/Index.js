import React from "react";
import css from "./style.module.css";
import Img1 from "../../assets/About-1.png";
import Button from "../Button";
import SecondImg1 from "../SecondImg1";

const AboutUs = () => (
  <div>
    <div className={css.Back}></div>
    <img className={css.Img1} src={Img1} alt="img1" />
    <p className={css.Text1}>ABOUT US</p>
    <p className={css.Text2}>
      Aute et officia anim consectetur consequat velit minim irure Lorem ad.
      Officia nisi sunt est eiusmod occaecat excepteur velit reprehenderit
      occaecat cillum anim ad magna aliqua. Sint enim Lorem amet in tempor non
      ea duis cillum. Cillum consectetur in in aliqua. Nostrud minim duis
      cupidatat et ea sint.
    </p>
    <Button color="Button3" text="READ MORE" />
    <SecondImg1 ImgClass="About1" />
    <SecondImg1 ImgClass="About2" />
  </div>
);

export default AboutUs;
