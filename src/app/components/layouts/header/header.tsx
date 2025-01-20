import React from "react";
import classes from "@/app/components/layouts/header/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";

const header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.tell} style={{ width: "180px" }}>
        <div style={{ margin: "10px", fontSize: "x-large" }}>
          <FontAwesomeIcon icon={faPhone} className="" />
        </div>
        <p className={classes.namber}>(06)1234-5678</p>
      </div>
      <div className={classes.name} style={{ width: "50px" }}>
        <div style={{ margin: "10px", fontSize: "x-large" }}>
          <FontAwesomeIcon icon={faEnvelope} className="" />
        </div>
        <p>bistro@.com</p>
      </div>
      <div className={classes.icons}>
        <div className={classes.name} style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faSquareXmark} className="" />
          </div>
        </div>
        <div className={classes.name} style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faSquareXmark} className="" />
          </div>
        </div>
        <div className={classes.name} style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faSquareXmark} className="" />
          </div>
        </div>
        <div className={classes.name} style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faSquareXmark} className="" />
          </div>
        </div>
        {/* <div className={classes.name} style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faFacebook} className="" />
          </div>
        </div>
        <div className={classes.name} style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faInstagram} className="" />
          </div>
        </div>
        <div className={classes.name} style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faTwitter} className="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default header;
