import React from "react";
import Challenger from "@/components/Challenger";
import ActiveChallenges from "@/components/ActiveChallenges";
import ChallengeWrapper from "@/components/wrappers/ChallengeWrapper";

const Home = () => {
  return (
    <ChallengeWrapper>
      <main>
        <h1>Private Page!</h1>
        <Challenger />
        <ActiveChallenges />
      </main>
    </ChallengeWrapper>
  );
};

export default Home;
