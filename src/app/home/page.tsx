import React from "react";
import Challenger from "@/components/Challenger.tsx";
import ActiveChallenges from "@/components/ActiveChallenges";

const Home = () => {
  return (
    <main>
      <h1>Private Page!</h1>
      <Challenger />
      <ActiveChallenges />
    </main>
  );
};

export default Home;
