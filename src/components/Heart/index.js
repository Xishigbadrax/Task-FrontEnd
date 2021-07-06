import React from "react";
import css from "./style.module.css";
import { FaRegHeart } from "react-icons/fa";

const Heart = (props) => {
  return (
    <div>
      <FaRegHeart className={css[props.class]} />
    </div>
  );
};

export default Heart;
