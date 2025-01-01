import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import Scrollbar from "../Components/Scrollbar";
import CareerStages from "../Components/CareerStages";
// import FeaturesSection from "./FeaturesSection ";
import DataSection from "../Components/DataSection";
import ImageSlider from "../Components/ImageSlider";
import FeedbackSection from "../Components/FeaturesSection ";
import CommunitySection from "../Components/CommunitySection";
import StatsSection from "../Components/StatsSection";
import AnimationWrapper from "../contaxt/AnimationWrapper.jsx"; // Import Animation Wrapper

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Scrollbar />
      
      {/* Sections wrapped in AnimationWrapper */}
      <AnimationWrapper>
        <ImageSlider />
      </AnimationWrapper>
      
      <AnimationWrapper>
        <StatsSection />
      </AnimationWrapper>
      
      <AnimationWrapper>
        <CommunitySection />
      </AnimationWrapper>
      
      <AnimationWrapper>
        <CareerStages />
      </AnimationWrapper>
      
      <AnimationWrapper>
        <DataSection />
      </AnimationWrapper>
      
      <AnimationWrapper>
        <FeedbackSection />
      </AnimationWrapper>
      
      <Footer />
    </>
  );
};

export default Home;
