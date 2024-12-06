import React from "react";
// import ChallengerClient from "@/components/wrappers/ChallengerClient.tsx";
import ActiveChallenges from "@/Components/ActiveChallenges.tsx";
import ChallengeWrapper from "@/Components/Wrappers/ChallengesWrapper.tsx";
import ChallengerClient from "../../Components/Wrappers/ChallengerClient.tsx";
// import ActiveChallenges from "../../components/ActiveChallenges";
// import ChallengeWrapper from "../../components/wrappers/ChallengesWrapper";

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
