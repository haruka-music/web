import React from "react";
import Image from "next/image";
import eat from "../../../../public/eat.jpg";
import classes from "@/app/pages/HomePage/home.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faGlassWater } from "@fortawesome/free-solid-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import Family from "@/app//pages/HomePage/Family/family";
import Event from "@/app/pages/HomePage/Events/event";
import Card from "@/app/pages/HomePage/City/city";

const home = () => {
  return (
    <>
      <div className={classes.bistro}>
        <strong className={classes.strong}>
          Best food for <br />
          your taste
          <br />
          <button className={classes.button}>Book A Table</button>
          <button className={classes.button}>Explore Menu</button>
        </strong>
        <div className={classes.ImageParticles}></div>
        <div className={classes.images}>
          <Image src={eat} alt="猫" />
        </div>
      </div>
      <section className={classes.section}>
        <h1 className={classes.headline}>Browse Our Menu</h1>

        {/* <ul className={`${classes.Grid} ${classes.col4}`}> */}
        <ul className={classes.Grid}>
          <li className={classes.GridItem}>
            <dl className={classes.future}>
              <dt className={classes.FutureIcon}>
                <FontAwesomeIcon icon={faBowlFood} className={classes.icon} />
              </dt>
              <dd className={classes.FutureHeadline}>Breakfast</dd>
              <dd className={classes.description}>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
              <div className={classes.LinkMenu}>
                <Link className={classes.Link} to="/">
                  Explore Menu
                </Link>
              </div>
            </dl>
          </li>
          <li className={classes.GridItem}>
            <dl className={classes.future}>
              <dt className={classes.FutureIcon}>
                <FontAwesomeIcon icon={faBowlFood} className={classes.icon} />
              </dt>
              <dd className={classes.FutureHeadline}>Main Dishes</dd>
              <dd className={classes.description}>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
              <div className={classes.LinkMenu}>
                <Link className={classes.Link} to="/">
                  Explore Menu
                </Link>
              </div>
            </dl>
          </li>
          <li className={classes.GridItem}>
            <dl className={classes.future}>
              <dt className={classes.FutureIcon}>
                <FontAwesomeIcon icon={faGlassWater} className={classes.icon} />
              </dt>
              <dd className={classes.FutureHeadline}>Drinks</dd>
              <dd className={classes.description}>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
              <div className={classes.LinkMenu}>
                <Link className={classes.Link} to="/">
                  Explore Menu
                </Link>
              </div>
            </dl>
          </li>
          <li className={classes.GridItem}>
            <dl className={classes.future}>
              <dt className={classes.FutureIcon}>
                <FontAwesomeIcon
                  icon={faCakeCandles}
                  className={classes.icon}
                />
              </dt>
              <dd className={classes.FutureHeadline}>Desserte</dd>
              <dd className={classes.description}>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
              <div className={classes.LinkMenu}>
                <Link className={classes.Link} to="/">
                  Explore Menu
                </Link>
              </div>
            </dl>
          </li>
        </ul>
      </section>

      <Family />
      <Event />
      <Card />
    </>
  );
};

export default home;
