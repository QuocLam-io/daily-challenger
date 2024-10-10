"use server";

import React, { useState, useEffect } from "react";
import "./ActiveChallenges.scss";
import getActiveChallenges from "@/app/actions/getActiveChallenges";

const ActiveChallenges = async () => {
  const { activeChallenges } = await getActiveChallenges();

  // const [activeChallenges, setActiveChallenges] = useState([]);

  // useEffect(() => {
  //   const fetchChallenges = async () => {
  //     const results = await getActiveChallenges();
  //     console.log(results.data, "results");
  //     console.log(results.test, "test");
  //     setActiveChallenges(results.data);
  //   };

  //   fetchChallenges();
  // }, []);

  return (
    <div className="active-challenges__container">
      <h1>Active Challenges</h1>
      {activeChallenges.map((challenge) => {
        return (
          <div key={challenge.id}>
            <h2>{challenge.challenge}</h2>
            {/* TODO: convert deadline to string */}
            {/* <p>{challenge.deadline}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default ActiveChallenges;
