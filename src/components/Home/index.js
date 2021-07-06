import React from "react";
import img1 from "../../assets/1.png";
import css from "./style.module.css";
import Sale from "../Sale";

const Home = (props) => {
  return (
    <div onClick={props.hideExtend}>
      <div>
        <img className={css.img1} src={img1} alt="img1" />
        <Sale />
      </div>
    </div>
  );
};

export default Home;
