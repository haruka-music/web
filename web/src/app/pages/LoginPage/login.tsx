import React from "react";
import Image from "next/image";
import eat from "../../../../public/eat.jpg";
import classes from "@/app/pages/LoginPage/login.module.css";

const login = () => {
  return (
    <div className={classes.image}>
      <strong>
        Best food for <br />
        your taste
      </strong>
      <div className={classes.ImageParticles}></div>
      <div className={classes.images}>
        <Image src={eat} width={300} height={200} alt="猫" />
      </div>
      <button>Book A Table</button>
      <button>Explore Menu</button>
    </div>
  );
};

export default login;
