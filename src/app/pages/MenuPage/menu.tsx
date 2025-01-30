import React from "react";
import Image from "next/image";
import classes from "@/app/pages/MenuPage/menu.module.css";

const menu = () => {
  return (
    <>
      <strong className={classes.strong}>
        Our Menu
        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to chenge to create a truly happens.
        </p>
      </strong>
      <button className={classes.button}>All</button>
      <button className={classes.button}>Breakfast</button>
      <button className={classes.button}>Main Dishes</button>
      <button className={classes.button}>Drinks</button>
      <button className={classes.button}>Dessorts</button>
      <section className={classes.section}>
        <ul className={classes.Grid}>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <a href="#" className={classes.CardLink}>
                <span className={classes.label}>New</span>
                <image></image>
                <div className={classes.info}>
                  <h1 className={classes.price}>$9.99</h1>
                  <h2 className={classes.headline}>Fried Egge</h2>
                  <p className={classes.description}>
                    Made with eggs. lettuce,salt,oil
                    <br />
                    and other ingredients.
                  </p>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default menu;
