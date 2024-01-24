import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Dreams Group</a>
        </div>

        <div className="navbar-center">
          <Link
          to="login"
          className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
