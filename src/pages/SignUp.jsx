import React, { useCallback, useState } from "react";

const SignUp = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        alert('Registration successful, Please Login!');
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="flex items-center justify-center bg-cover bg-center">
      <div className="border border-white/20 rounded-lg p-8 w-[550px] text-center">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              className="w-full px-4 py-2 rounded-md border border-gray-800 bg-transparent text-blue-200"
              placeholder="Name"
              style={{ border: "solid 1px #fff" }}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-800 bg-transparent text-blue-200"
              placeholder="Email"
              style={{ border: "solid 1px #fff" }}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={handelSubmit}
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
      </div>
    </div>
  );
};

export default SignUp;
