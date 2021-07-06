import React from "react";
import css from "./style.module.css";
import ToGetItem from "../ToGetItem";
import Img1 from "../../assets/img1.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img7 from "../../assets/img7.png";
import Img8 from "../../assets/img8.png";
import ToGetItem2 from "../ToGetItem2";
import Img2 from "../../assets/img2.png";
import Img6 from "../../assets/img6.png";

const ToGet = () => (
  <div>
    <p className={css.Text}>TO GET and TO GIFT</p>
    <div className={css.Container}>
      <ToGetItem
        uri={Img1}
        text="Zweiseitiger Wendemantel Mit Schmetterlingsxzds +6 color "
        classImg="Item1"
        classText="Text1"
        price1="Price1_1"
        price2="Price2_1"
      />
      <ToGetItem2
        classImg="Img1"
        uri={Img2}
        classText="Text1"
        text="Écharpe tisée avec bords contrastants et franges"
        colors="Colors1"
      />

      <ToGetItem
        uri={Img3}
        text="Трикотажный Супер Мягкий Плед Контрастного Оттенка"
        classImg="Item3"
        classText="Text3"
        price1="Price1_3"
        price2="Price2_3"
      />
      <ToGetItem
        uri={Img4}
        text="Кардиган в Стиле Колор-Блок с V-Образным Воротником"
        classImg="Item4"
        classText="Text4"
        price1="Price1_4"
        price2="Price2_4"
      />
      <ToGetItem
        uri={Img5}
        text="Écharpe tisée avec bords contrastants et franges"
        classImg="Item5"
        classText="Text5"
        price1="Price1_5"
        price2="Price2_5"
      />
      <ToGetItem2
        classImg="Img2"
        uri={Img6}
        classText="Text2"
        text="Écharpe tisée avec bords contrastants et franges"
        colors="Colors2"
      />
      <ToGetItem
        uri={Img7}
        text="Трикотажный Супер Мягкий Плед Контрастного Оттенка"
        classImg="Item7"
        classText="Text7"
        price1="Price1_7"
        price2="Price2_7"
      />
      <ToGetItem
        uri={Img8}
        text="Кардиган в Стиле Колор-Блок с V-Образным Воротником"
        classImg="Item8"
        classText="Text8"
        price1="Price1_8"
        price2="Price2_8"
      />
    </div>
  </div>
);

export default ToGet;
