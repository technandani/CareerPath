import React from "react";

const suggestions = [
  { title: "Learn Advanced React", action: "Explore Course" },
  { title: "Practice Python Basics", action: "Take Test" },
  { title: "Join AI Workshop", action: "Register Now" },
];

const SuggestionsSection = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg m-4">
      <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg text-center hover:shadow-xl transition"
          >
            <h3 className="font-semibold mb-2">{suggestion.title}</h3>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded mt-2 hover:bg-yellow-600">
              {suggestion.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsSection;
