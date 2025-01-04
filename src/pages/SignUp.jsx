import React, { useState } from "react";

const SignUp = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center bg-cover bg-center">
      <div className="border border-white/20 rounded-lg p-8 w-[550px] text-center">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-800 bg-transparent text-blue-200"
              placeholder="Name"
              style={{ border: "solid 1px #fff" }}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-800 bg-transparent text-blue-200"
              placeholder="Email"
              style={{ border: "solid 1px #fff" }}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-md border border-gray-800 bg-transparent text-blue-200"
              placeholder="Password"
              style={{ border: "solid 1px #fff" }}
            />
            <label className="flex items-center mt-2 cursor-pointer space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-300"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <span>Show Password</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-300 text-white font-semibold rounded-md hover:bg-blue-400 transition duration-200"
          >
            Sign Up
          </button>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="text-2xl hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="text-2xl hover:text-white transition">
              <i className="fab fa-google"></i>
            </div>
            <div className="text-2xl hover:text-white transition">
              <i className="fab fa-facebook"></i>
            </div>
          </div>
          <p className="mt-4 text-blue-200">
            Already have an account?{" "}
            <button
              className="font-semibold hover:underline"
              style={{ color: "#fff" }}
              onClick={onSwitch}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
