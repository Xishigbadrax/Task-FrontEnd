import React from "react";
import css from "./style.module.css";
import Img from "../../assets/extend.png";

const SearchExtend = (props) => {
  let classes = [css.SearchExtend, css.Close];

  if (props.showExtend) {
    classes = [css.SearchExtend, css.Open];
  }

  return (
    <div className={classes.join(" ")}>
      <p className={css.Text1}>Press</p>
      <p className={css.Text2}>enter</p>
      <p className={css.Text3}>to select</p>
      <p className={css.Text4}>↑↓</p>
      <p className={css.Text5}>to navigate, esc to dismiss</p>
      <div className={css.White}></div>
      <img className={css.Img1} src={Img} alt="model" />
      <p className={css.Pa1}>Chill Summer Essential Set</p>
      <p className={css.Price1_1}>$899</p>
      <p className={css.Price2_1}>$620.32</p>

      <img className={css.Img2} src={Img} alt="model" />
      <p className={css.Pa2}>Chill Summer Essential Set</p>
      <p className={css.Price1_2}>$899</p>
      <p className={css.Price2_2}>$620.32</p>

      <img className={css.Img3} src={Img} alt="model" />
      <p className={css.Pa3}>Chill Summer Essential Set</p>
      <p className={css.Price1_3}>$899</p>
      <p className={css.Price2_3}>$620.32</p>

      <img className={css.Img4} src={Img} alt="model" />
      <p className={css.Pa4}>Chill Summer Essential Set</p>
      <p className={css.Price1_4}>$899</p>
      <p className={css.Price2_4}>$620.32</p>
      <div className={css.Sidebar}>
        <p>Sweater</p>
        <p>Basic</p>
        <p>Cardigans</p>
        <p>Hoodies</p>
        <p>Crew Necks</p>
        <p>Turtle Necks</p>
        <p>V Necks</p>
        <p>Vests & Tops</p>
      </div>
    </div>
  );
};
export default SearchExtend;
