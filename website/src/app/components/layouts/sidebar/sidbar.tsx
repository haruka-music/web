import React from "react";
import classes from "@/app/components/layouts/sidebar/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const sidbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div style={{ margin: "10px", fontSize: "x-large" }}>
          <FontAwesomeIcon icon={faPizzaSlice} className="" />
        </div>
        <h1 className={classes.namber}>Bistro will</h1>
      </div>
      <div className={classes.Sidebar}>
        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/Home">
              Home
            </Link>
          </li>
        </ul>

        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/Player">
              About
            </Link>
          </li>
        </ul>

        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/Toolphoto">
              Menu
            </Link>
          </li>
        </ul>

        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/Movies">
              Pages
            </Link>
          </li>
        </ul>

        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidbar;
