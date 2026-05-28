import React from "react";
import MainContainer from "../../Hooks/MainContainer";
import HomeHero from "./Sections/HomeHero";
import App from "./Sections/Home2nd";
import HomeJourney from "./Sections/HomeJourney";
import HomeIdea from "./Sections/HomeIdea";

const Home = () => {
  return (
    <MainContainer>
      <HomeHero></HomeHero>
      <App></App>
      <HomeJourney></HomeJourney>
      <HomeIdea></HomeIdea>
    </MainContainer>
  );
};

export default Home;
