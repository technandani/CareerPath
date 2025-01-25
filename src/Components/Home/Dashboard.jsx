import React from "react";
import HeroSection from "./HeroSection";
import SkillTracker from "./SkillTracker";
import LearningPath from "./LearningPath";
import Gamification from "./Gamification";
import Cookies from "js-cookie";

const Dashboard = () => {
  const userName =Cookies.get("loggedInUser");
  const profilePic = "images/user.jpg"; // Replace with dynamic URL
  const skills = [
    { name: "React", progress: 70 },
    { name: "Node.js", progress: 50 },
    { name: "CSS", progress: 90 },
    { name: "React", progress: 70 },
  ];

  const paths = [
    { title: "Full-Stack Developer", description: "A complete roadmap to become a full-stack developer." },
    { title: "Frontend Specialist", description: "Focus on mastering frontend technologies." },
  ];

  const badges = [
    { name: "Quiz Master", icon: "fa-award" },
    { name: "Skill Pro", icon: "fa-lightbulb" },
    { name: "Top Performer", icon: "fa-chart-line" },
    { name: "Fast Learner", icon: "fa-bolt" },
  ];
  const level = 5;
  const progress = 72;

  return (
    <div className="space-y-8 p-4">
      <HeroSection userName={userName} profilePic={profilePic} />
      <div className="p-4 space-y-8">
      <Gamification badges={badges} level={level} progress={progress} />
    </div>
      <SkillTracker skills={skills} />
      <LearningPath paths={paths} />
    </div>
  );
};

export default Dashboard;