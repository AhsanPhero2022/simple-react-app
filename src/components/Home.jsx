import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <div>
     {
      user?  <div>
      
      <div className="bg-white p-8 w-1/2 mx-auto rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 uppercase text-center text-syan-500 ">This is dreams group Company</h1>
          <div className="mb-4">
            <img
              src={user?.photoURL
              }
              alt="Image"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="flex justify-between items-center">
          <h1>
            Name: {user?.displayName}
          </h1>
          <h1>
            Email: {user?.email}
          </h1>
          </div>
        </div>
      </div>
      : 
      <div className="flex justify-center items-center h-screen bg-gray-100">
        
      <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 uppercase text-center text-syan-500 ">Please login to continue</h1>
        <div className="mb-4">
          <img
            src="https://media.licdn.com/dms/image/C5112AQFAnlORI0m62w/article-cover_image-shrink_600_2000/0/1520152448307?e=2147483647&v=beta&t=GFUZ64OXeyzCtHb-TrOdOB0Z4cZuK5QqZfvwuy54LXE"
            alt="Secure Image"
            className="w-full h-auto rounded"
          />
        </div>
        <Link to='/login'>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">
          Login
        </button>
        </Link>
        <div className="flex justify-between">
          <a href="#" className="text-blue-500">
            Forgot Password?
          </a>
          <Link to="/register" className="text-blue-500">
            Create Account
          </Link>
        </div>
      </div>
    </div>
     }
    </div>
  );
};

export default Home;
