import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <NavLink to="/" className="nav-link" exact activeClassName="">
      Home
    </NavLink>
    <NavLink to="/lambda-list" className="nav-link" activeClassName="active">
      LIST (lambda)
    </NavLink>
    <NavLink to="/no-lambda-list" className="nav-link" activeClassName="active">
      LIST (reference)
    </NavLink>
    <NavLink to="/lambda-page" className="nav-link" activeClassName="active">
      PAGE (lambda)
    </NavLink>
    <NavLink to="/no-lambda-page" className="nav-link" activeClassName="active">
      PAGE (reference)
    </NavLink>
  </nav>
);

export default Nav;
