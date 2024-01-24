import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)


const handleLogOut = ()=>{
  logOut()
  .then(()=>{})
  .then((error)=> console.log(error))
}

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            Dreams Group
          </Link>
        </div>
        <div className="navbar-center gap-5">
          <button className="text-accent">
          <Link to='/'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            </Link>
          </button>
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="navbar-end gap-5">
          <button className="text-accent active">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
           
          </button>
          <button className="text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
