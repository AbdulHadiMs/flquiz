import React from "react";
import logo from '../../../assets/logo.png';
import bgImg from '../../../assets/bg-img.svg';
import { Link } from 'react-router-dom';
import { registerUser } from "../../../apicalls/users";

function Register() {

  const onFinish = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    // ✅ Password validation
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // ✅ Send values to backend
      const response = await registerUser(values);

      if (response.success) {
        alert(response.message); // you can replace with toast later
      } else {
        alert(response.message);
      }

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-10 bg-[#e0e1e5]">

      <div className="flex flex-col md:flex-row w-full md:w-[80%] max-w-[1000px] md:h-[600px] rounded-[20px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)]">

        {/* LEFT PANEL */}
        <div className="relative w-full md:w-1/2 h-[250px] md:h-auto bg-[#f3ea1c] overflow-hidden">

          <img
            src={logo}
            alt="Logo"
            className="absolute -top-[10px] -left-[5px] w-[120px] md:-top-[30px] md:-left-[10px] md:w-[200px]"
          />

          <img
            src={bgImg}
            alt="Background"
            className="absolute inset-0 w-full h-full md:object-cover object-contain md:scale-100 scale-110 opacity-80 md:opacity-90"
          />

          <button className="absolute top-3 right-3 md:top-5 md:right-5 px-2 py-1 md:px-3 md:py-1 rounded-full bg-black text-[#f6ec1d] text-[10px] md:text-sm transition hover:bg-white hover:text-black">
            Glaze into website →
          </button>

          <h2 className="absolute bottom-[20px] md:bottom-[45px] left-[20px] md:left-[40px] text-black text-sm md:text-[1.8rem] font-bold leading-tight">
            we are <br />
            "engineering" <br />
            the education
          </h2>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-[#f0f1f4]">

          <h2 className="mb-8 text-2xl text-black font-semibold">
            Register
          </h2>

          <form className="flex flex-col w-full max-w-[300px]" onSubmit={onFinish}>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition-all duration-200 mb-4
                        hover:border-gray-500 hover:shadow-sm
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:shadow-md"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition-all duration-200 mb-4
                        hover:border-gray-500 hover:shadow-sm
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:shadow-md"
              required
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition-all duration-200 mb-4
                        hover:border-gray-500 hover:shadow-sm
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:shadow-md"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition-all duration-200 mb-4
                        hover:border-gray-500 hover:shadow-sm
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:shadow-md"
              required
            />

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition-all duration-200 mb-4
                        hover:border-gray-500 hover:shadow-sm
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:shadow-md"
              required
            />

            <button
              type="submit"
              className="w-full p-3 bg-[#f6ec1d] text-black rounded-lg hover:bg-black hover:text-white"
            >
              Register
            </button>

            <p className="mt-5 text-center text-sm text-gray-600">
              Already a member?
              <Link
                to="/login"
                className="ml-1 font-bold text-gray-800 hover:text-black"
              >
                Login!!
              </Link>
            </p>

            <p className="mt-7 text-gray-400 text-sm text-center">
              www.franklinslectures.in
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;