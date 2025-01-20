import React from "react";
import Image from "next/image";
import eat from "../../../../public/eat.jpg";
import classes from "@/app/pages/LoginPage/login.module.css";

const login = () => {
  return (
    <>
      <div className={classes.bistro}>
        <strong className={classes.strong}>
          Best food for <br />
          your taste
        </strong>
        <div className={classes.ImageParticles}></div>
        <div className={classes.images}>
          <Image src={eat} alt="猫" />
        </div>
        <button className={classes.button}>Book A Table</button>
        <button className={classes.button}>Explore Menu</button>
      </div>
      <section className={classes.section}>section</section>
    </>
  );
};

export default login;
