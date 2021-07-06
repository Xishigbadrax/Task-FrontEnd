import React from "react";
import css from "./style.module.css";
import Menu from "../Menu";
import Logo from "../Logo";
import Search from "../Search";
import Heart from "../Heart";
import Bag from "../Bag";
import { MdClear } from "react-icons/md";

const Toolbar = (props) => (
  <div className={css.Header}>
    <Menu />
    <Logo />
    <div className={css.Right}>
      <Search
        toggleExtend={props.toggleExtend}
        class="Search"
        placeholder="Search"
      />
    </div>
    <div className={css.ToolbarIcons}>
      <Heart class="Heart" />
      <Bag class="Bag" />
    </div>
    <MdClear className={css.Clear} />
  </div>
);

export default Toolbar;
