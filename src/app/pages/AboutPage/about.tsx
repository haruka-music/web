import React from "react";
import Image from "next/image";
import classes from "@/app/pages/AboutPage/about.module.css";
import eat from "../../../../public/eat.jpg";
import video from "../../../../public/video.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const about = () => {
  return (
    <>
      <section className={classes.section}>
        <figure className={classes.figure}>
          <Image src={eat} alt="猫" width={500} height={500} />
          <figcaption>
            <h1>
              We provide healthy
              <br />
              food for your family.
            </h1>
            <p>
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
          </figcaption>
        </figure>
      </section>
      <section className={classes.section}>
        <Image src={video} alt="猫" width={1430} height={500} />
        <ul className={classes.Grid}>
          <li className={classes.GridItem}>
            <dl className={classes.future}>
              <dt className={classes.FutureIcon}>
                <FontAwesomeIcon icon={faFile} className={classes.icon} />
              </dt>
              <dd className={classes.FutureHeadline}>Breakfast</dd>
              <dd className={classes.description}>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
            </dl>
          </li>
          <li className={classes.GridItem}>
            <dl className={classes.future}>
              <dt className={classes.FutureIcon}>
                <FontAwesomeIcon icon={faList} className={classes.icon} />
              </dt>
              <dd className={classes.FutureHeadline}>Main Dishes</dd>
              <dd className={classes.description}>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
            </dl>
          </li>
          <li className={classes.GridItem}>
            <dl className={classes.future}>
              <dt className={classes.FutureIcon}>
                <FontAwesomeIcon icon={faClock} className={classes.icon} />
              </dt>
              <dd className={classes.FutureHeadline}>Drinks</dd>
              <dd className={classes.description}>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </>
  );
};

export default about;
