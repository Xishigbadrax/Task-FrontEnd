import React from "react";
import css from "./style.module.css";
import Button from "../Button";

const Sale = () => {
  return (
    <div>
      <p className={css.Summer}>SUMMER</p>
      <p className={css.Sale}>Sale</p>
      <p className={css.Upto}>UPTO</p>
      <p className={css.Sixty}>60%</p>
      <p className={css.Ff}>FF</p>
      <Button text="SHOP NOW" color="Button" />
    </div>
  );
};

export default Sale;
