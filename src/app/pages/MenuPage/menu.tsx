import React from "react";
import classes from "@/app/pages/MenuPage/menu.module.css";
import Card from "../../../../future/Menu/Card/card";

const menu = () => {
  return (
    <>
      <strong className={classes.strong}>
        <p className={classes.SpHeadline}>Our Menu</p>
        <p className={classes.Spdescription}>
          We consider all the drivers of change gives you the components
          <br />
          you need to chenge to create a truly happens.
        </p>
      </strong>
      <nav className={classes.ButtonNav}>
        <button className={classes.button}>All</button>
        <button className={classes.button}>Breakfast</button>
        <button className={classes.button}>Main Dishes</button>
        <button className={classes.button}>Drinks</button>
        <button className={classes.button}>Dessorts</button>
      </nav>
      <Card />
    </>
  );
};

export default menu;
