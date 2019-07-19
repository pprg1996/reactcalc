import React from "react";
import style from "./display.module.css";

function Display({ print }) {
  return (
    <div className={style.displayDiv}>
      <span className={style.print}>{print}</span>
    </div>
  );
}

export default Display;