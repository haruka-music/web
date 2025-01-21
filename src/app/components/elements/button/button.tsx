import React from "react";
import classes from "../button/button.module.css";

const button = () => {
  return (
    <div className={classes.button}>
      <button className={classes.submit} type="submit">
        送信
      </button>
    </div>
  );
};

export default button;
