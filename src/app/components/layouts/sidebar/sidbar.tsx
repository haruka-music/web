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
            <Link className={classes.Link} to="/">
              Home
            </Link>
          </li>
        </ul>

        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/About">
              About
            </Link>
          </li>
        </ul>

        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/Menu">
              Menu
            </Link>
          </li>
        </ul>

        <ul className={classes.SidebarList}>
          <li className={classes.ListName}>
            <Link className={classes.Link} to="/Pages">
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

        <button className={classes.button}>
          <Link className={classes.BLink} to="/Book">
            Book A Table
          </Link>
        </button>
      </div>
    </div>
  );
};

export default sidbar;
