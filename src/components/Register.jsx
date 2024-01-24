import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;

    const email = form.email.value;

    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      Swal.fire({
        title: "Try Again!",
        text: "Password Must be 6 characters long",
        icon: "warning",
        imageWidth: 400,
        imageHeight: 200,
      });

      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        profileUpdate(name, photo, createdUser);
        navigate("/");
        if (createdUser) {
          Swal.fire({
            title: "Great!",

            text: "Register Successful",
            icon: "success",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Try Again",

            text: "Existing Gmail",
            icon: "warning",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      });
  };

  const profileUpdate = (name, photo, createdUser) => {
    updateProfile(createdUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="photo url"
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
                placeholder="Your password"

                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
