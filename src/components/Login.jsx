import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        if (user) {
          Swal.fire({
            title: "Great!",

            text: "Successfully Login",
            icon: "success",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Try Again!",

            text: "Password Wrong ",
            icon: "warning",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
navigate(from, { replace: true });
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 px-6">
            Please login your email & password or google.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="flex justify-between">
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <Link
                    to="/register"
                    href="#"
                    className="label-text-alt link link-hover underline"
                  >
                    Do not have account? Go Register
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control px-8 pb-8">
            <button onClick={handleGoogleLogin} className="btn btn-success">
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
