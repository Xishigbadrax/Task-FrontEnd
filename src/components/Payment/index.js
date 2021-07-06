import React from "react";
import { FaApplePay } from "react-icons/fa";
import { SiGooglepay, SiVisa, SiMastercard, SiPaypal } from "react-icons/si";
import css from "./style.module.css";

const Payment = () => (
  <div>
    <FaApplePay className={css.P1} />
    <SiGooglepay className={css.P2} />
    <SiVisa className={css.P3} />
    <SiMastercard className={css.P4} />
    <SiPaypal className={css.P5} />
  </div>
);

export default Payment;
