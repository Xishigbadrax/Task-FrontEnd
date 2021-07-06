import React from "react";
import css from "./style.module.css";
import Search from "../Search";
import Button from "../Button";

const Subscribe = () => (
  <div>
    <p className={css.Sub}>Subscribe</p>
    <p className={css.Text1}>
      Sign up for emails and receive early access to new arrivals, sales, events
      + more.
    </p>
    <Search class="Submit" placeholder="Enter your email address" />
    <Button color="Button4" text="SUBMIT" />
    <p className={css.Text2}>
      By signing up, you will receive Gobi Cashmere offers, promotions and other
      commercial messages. You are also agreeing to Gobi Cashmere's Privacy
      Policy. You may unsubscribe at any time.
    </p>
  </div>
);

export default Subscribe;
