import React from "react";
import style from "./buttons.module.css";

function Buttons({ numberClickHandler, operationClickHandler, equalsClickHandler, negativeToggleClickHandler, decimalClickHandler, deleteClickHandler }) {

  return (
    <div className={style.buttonsDiv}>
      <button className={style.wideButton} onClick={deleteClickHandler}>Del</button>
      <button className={style.button} onClick={negativeToggleClickHandler}>+/-</button>
      <button className={style.opButton} onClick={operationClickHandler}>/</button>

      <button className={style.button} onClick={numberClickHandler}>7</button>
      <button className={style.button} onClick={numberClickHandler}>8</button>
      <button className={style.button} onClick={numberClickHandler}>9</button>
      <button className={style.opButton} onClick={operationClickHandler}>X</button>

      <button className={style.button} onClick={numberClickHandler}>4</button>
      <button className={style.button} onClick={numberClickHandler}>5</button>
      <button className={style.button} onClick={numberClickHandler}>6</button>
      <button className={style.opButton} onClick={operationClickHandler}>-</button>

      <button className={style.button} onClick={numberClickHandler}>1</button>
      <button className={style.button} onClick={numberClickHandler}>2</button>
      <button className={style.button} onClick={numberClickHandler}>3</button>
      <button className={style.opButton} onClick={operationClickHandler}>+</button>

      <button className={style.wideButton} onClick={numberClickHandler}>0</button>
      <button className={style.button} onClick={decimalClickHandler}>.</button>
      <button className={style.opButton} onClick={equalsClickHandler}>=</button>
    </div>
  );
}

export default Buttons;