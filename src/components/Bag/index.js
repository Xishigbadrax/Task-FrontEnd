import React from "react";
import css from "./style.module.css";
import { BsBagFill } from "react-icons/bs";

const Bag = (props) => {
  return (
    <div>
      <BsBagFill className={css[props.class]} />
    </div>
  );
};

export default Bag;
