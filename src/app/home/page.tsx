import React from "react";
import ChallengerClient from "@/components/Wrappers/ChallengerClient";
import ActiveChallenges from "@/components/ActiveChallenges";
import ChallengeWrapper from "@/components/Wrappers/ChallengesWrapper";

const Home = () => {
  return (
    <ChallengeWrapper>
      <main>
        <h1>Private Page!</h1>
        <ChallengerClient />
        <ActiveChallenges />
      </main>
    </ChallengeWrapper>
  );
};

export default Home;
