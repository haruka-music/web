import React from "react";
import Image from "next/image";
import classes from "@/app/pages/HomePage/Family/family.module.css";
import eat from "../../../../../public/eat.jpg";
import Button from "@/app/components/elements/button/button";

const family = () => {
  return (
    <>
      <section className={classes.section}>
        <figure className={classes.figure}>
          <Image
            className={classes.image}
            src={eat}
            alt="猫"
            width={400}
            height={400}
          />
          <figcaption className={classes.figcaption}>
            <h1 className={classes.headline}>
              We provide healthy
              <br />
              food for your family.
            </h1>
            <p className={classes.description}>
              Our story began with a vision to create a unique dining
              <br />
              experience that merges fine dining,exceptional service,and a
              <br />
              vibant ambiance.Rooted in city's rich culture,we aim to
              <br />
              honor our local roots while infusing a global palate.
              <br />
              <br />
              <br />
              At place,we believe that dining is not just about food,but also
              about the
              <br />
              overall experience.Our staff,renonwned for their warmth and
              dedication,
              <br />
              strives to make every visit an unforgettable event.
            </p>
            <Button />
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default family;
