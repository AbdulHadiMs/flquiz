import React from "react";
import toast from "react-hot-toast";
import logo from '../../../assets/logo.png';
import bgImg from '../../../assets/bg-img.svg';
import { Link } from 'react-router-dom'
import { loginUser } from "../../../apicalls/users";

function Login() {
  const onFinish = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const values = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await loginUser(values);

      if (response.success) {
        toast.success(response.message);

        // ✅ Optional: store token (if backend sends it)
        if (response.data) {
          localStorage.setItem("token", response.data);
        }

        // ✅ Optional: redirect
        window.location.href = "/register";

      } else {
        toast.error(response.message);
      }

    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen px-10 bg-[#e0e1e5]">

      {/* Container */}
      {/* <div className="flex w-[80%] max-w-[1000px] h-[600px] rounded-[20px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)]"> */}
      <div className="flex flex-col md:flex-row w-full md:w-[80%] max-w-[1000px] md:h-[600px] rounded-[20px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)]">

        {/* LEFT PANEL */}
        {/* <div className="relative w-1/2 bg-[#f3ea1c] overflow-hidden hidden md:block"> */}
        <div className="relative w-full md:w-1/2 h-[250px] md:h-auto bg-[#f3ea1c] overflow-hidden">

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="absolute -top-[10px] -left-[5px] w-[120px] md:-top-[30px] md:-left-[10px] md:w-[200px]"
          />

          {/* Background Image */}
          <img
            src={bgImg}
            alt="Background"
            className="absolute inset-0 w-full h-full md:object-cover object-contain md:scale-100 scale-110 opacity-80 md:opacity-90"
          />

          {/* Button */}
          <button className="absolute top-3 right-3 md:top-5 md:right-5 px-2 py-1 md:px-3 md:py-1 rounded-full bg-black text-[#f6ec1d] text-[10px] md:text-sm flex items-center justify-center transition hover:bg-white hover:text-black hover:scale-105">
            Glaze into website →
          </button>

          {/* Heading */}
          <h2 className="absolute bottom-[20px] md:bottom-[45px] left-[20px] md:left-[40px] text-black text-sm md:text-[1.8rem] font-bold leading-tight">
            we are <br />
            "engineering" <br />
            the education
          </h2>
        </div>

        {/* RIGHT PANEL */}
        {/* <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 bg-[#f0f1f4]"> */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-[#f0f1f4]">

          <h2 className="mb-8 text-2xl text-black font-semibold">
            Login
          </h2>

          {/* FORM */}
          <form className="flex flex-col w-full max-w-[300px] items-center" onSubmit={onFinish}>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition-all duration-200 mb-4
                        hover:border-gray-500 hover:shadow-sm
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:shadow-md"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition-all duration-200 mb-4
                        hover:border-gray-500 hover:shadow-sm
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:shadow-md"
            />

            <button type="submit" className="w-full p-3 text-base bg-[#f6ec1d] text-black rounded-lg transition hover:bg-black hover:text-white">
              Login
            </button>

            {/* Register */}
            <p className="mt-5 text-center text-sm text-gray-600">
              Not a member?
              <Link
                to="/register"
                className="ml-1 font-bold text-gray-800 hover:text-black cursor-pointer"
              >
                Register!!
              </Link>
            </p>
            {/* Footer */}
            <p className="mt-7 text-gray-400 text-sm font-light">
              www.franklinslectures.in
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;