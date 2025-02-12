import React from "react";
import Image from "next/image";
import eat from "../../../../public/eat.jpg";
import classes from "@/app/pages/HomePage/Events/event.module.css";
import Card from "../../../../../future/Menu/Card/card";

const event = () => {
  return (
    <>
      <section className={classes.section}>
        <h1 className={classes.headline}>We also ofter</h1>
      </section>
      <Card />
    </>
  );
};

export default event;
