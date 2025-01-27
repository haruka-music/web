import React from "react";
import Image from "next/image";
import eat from "../../../../public/eat.jpg";
import classes from "@/app/pages/HomePage/home.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

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

        <ul>
          <li>
            <dl>
              <dt>
                <FontAwesomeIcon icon={faBowlFood} className={classes.icon} />
              </dt>
              <dd>Breakfast</dd>
              <dd>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
              <Link className={classes.Link} to="/">
                Explore Menu
              </Link>
            </dl>
          </li>
        </ul>
      </section>
    </>
  );
};

export default home;
