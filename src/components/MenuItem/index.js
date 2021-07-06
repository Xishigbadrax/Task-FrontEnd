import React from "react";
import css from "./style.module.css";
import { BrowserRouter, Link } from "react-router-dom";

const MenuItem = (props) => (
  <BrowserRouter>
    <div>
      <Link to="/" className={css[props.class]}>
        {props.text}
      </Link>
    </div>
  </BrowserRouter>
);

export default MenuItem;
