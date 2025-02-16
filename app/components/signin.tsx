"use client";
// import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg w-96 text-white">
        {/* Logo */}
        <h2 className="text-3xl font-bold text-center text-[#b1d450] mb-2">
          Cyber<span className="text-white">Probe-x</span>
        </h2>

        <p className="text-center text-gray-400 mb-6">
          Log into Probex to view your security risks
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Username */}
          <label className="text-sm font-semibold">Email <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="username"
            placeholder="Enter Email"
            value={formData.username}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-700 bg-[#121212] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b1d450]"
            required
          />

          {/* Password */}
          <label className="text-sm font-semibold">Password <span className="text-red-500">*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-700 bg-[#121212] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b1d450]"
            required
          />

          {/* Forgot Password */}
          <a href="#" className="text-sm text-[#b1d450] hover:underline self-end">
            Forgot your Password?
          </a>

          {/* Sign In Button */}
          <button
            // onClick={() => {
            //   axios.post("http://localhost:3000/api/user", {
            //     username: formData.username,
            //     password: formData.password
            //   });
            // }}
            type="submit"
            className="bg-[#b1d450] text-black py-2 rounded-lg hover:bg-[#9cc93a] transition duration-300 font-bold"
          >
            Login
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="flex justify-between mt-4">
          <button className="flex items-center justify-center w-1/3 bg-black border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2"/>
            Sign In
          </button>

          <button className="flex items-center justify-center w-1/3 bg-black border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-5 h-5 mr-2"/>
            Sign In
          </button>

          <button className="flex items-center justify-center w-1/3 bg-black border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Shield-check.svg" alt="Secure" className="w-5 h-5 mr-2"/>
            Sign In
          </button>
        </div>

        {/* Privacy Policy */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
