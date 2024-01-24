import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Dreams Group</a>
        </div>

        <div className="navbar-center">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
