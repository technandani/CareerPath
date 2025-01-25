import React from "react";

const HeroSection = ({ userName, profilePic }) => {
  return (
    <div className="relative text-white py-16 px-8 rounded-lg shadow-lg" style={{background: "linear-gradient(15deg, #142850, #14365f, #13476f, #125d80, #0e657b, #13476f, #14365f, #142850)"}}>
      <div className="text-4xl md:text-6xl font-bold animate-fadeIn">
        Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">{userName}!</span>
      </div>
      <p className="text-lg mt-4">Your journey to success begins here!</p>
    </div>
  );
};

export default HeroSection;
