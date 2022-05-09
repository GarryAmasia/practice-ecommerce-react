import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
// import { ReactComponent as AnchorLogo } from "../../assets/logo-anchor.png";
import anchor from "../../assets/logo-anchor.png";
import "./navigation.style.scss";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={anchor} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          <Link className="nav-link" to="sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
