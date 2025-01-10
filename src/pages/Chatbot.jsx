import React from "react";

const Chatbot = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50" style={{background: "linear-gradient(90deg, rgba(0,21,52,1) 0%, #012246 50%, rgba(0,29,61,1) 100%)"}}>
      {/* Header */}
      <div className="absolute top-4 left-4 flex items-center">
      <a href="/home">
            <h1 className="logo">Career Path</h1>
          </a>
      </div>

      {/* User Profile */}
      <div className="absolute top-4 right-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <i className="fas fa-user text-blue-900 text-"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center">
        <div className="mb-4">
          <h1 className="text-2xl md:text-5xl font-semibold text-white">
            Welcome, Future Achiever!
          </h1>
          <p className="mt-2 text-gray-300 text-lg">
          How can I guide you on your career journey today?
          </p>
          <p className="mt-1 text-gray-300">
          Whether it's finding the right path, learning new skills, or career advice, I'm here to help you succeed!
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center gap-4 mt-6">
          <div className="bg-white shadow-md rounded-lg p-4 text-center w-44">
          <i class="fa-solid fa-paper-plane  text-blue-900 text-4xl"></i>
            <p className="mt-2 text-sm text-gray-700 font-semibold">Career Options</p>
            <p className="text-gray-700 text-xs mt-1">Explore Your Choices</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 text-center w-44">
            <i className="fas fa-lightbulb text-blue-900 text-4xl"></i>
            <p className="mt-2 text-sm text-gray-700 font-semibold">Skill Building</p>
            <p className="text-gray-700 text-xs mt-1">Learn & Grow</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 text-center w-44">
            <i className="fas fa-chart-line text-blue-900 text-4xl"></i>
            <p className="mt-2 text-sm text-gray-700 font-semibold">Career Trends</p>
            <p className="text-gray-700 text-xs mt-1">Stay Updated</p>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="fixed bottom-8 w-full px-4" style={{maxWidth:'50vw'}}>
        <div className="relative">
          <input
            type="text"
            placeholder="Ask about career options, skills, or trends..."
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-800"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white rounded-full hover:bg-blue-800 transition bg-blue-900"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
