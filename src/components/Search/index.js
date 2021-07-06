import React from "react";
import css from "./style.module.css";

const Search = (props) => {
  return (
    <div onClick={props.toggleExtend}>
      <input
        className={css[props.class]}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Search;
