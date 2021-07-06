import React from "react";
import FooterAllText from "../FooterAllText";
import Payment from "../Payment";
import css from "./style.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

const Footer = () => (
  <div>
    <div className={css.Footer1}></div>
    <div className={css.Container}></div>
    <FooterAllText />
    <Payment />
    <p className={css.Text1}>All content Copyright © 2020 GOBI Cashmere</p>
    <p className={css.Text2}>FOLLOW US</p>
    <FaFacebookF className={css.Fb} />
    <FaInstagram className={css.Ins} />
    <FaTwitter className={css.Twit} />
    <FaYoutube className={css.You} />
    <p className={css.Text3}>Global - English</p>
    <IoIosGlobe className={css.Globe} />
  </div>
);

export default Footer;
