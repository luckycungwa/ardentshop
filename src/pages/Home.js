import React from "react";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import ItemShop from "../components/ItemShop";
import FilterButton from "../components/FilterButton";

const Home = () => {
  return (
    <>
      <div className="home-container">
      
        <NavigationBar />  
        <HeroSection />
        <div>
        <FilterButton />
        </div>
        
      </div>
    </>
  );
};

export default Home;
