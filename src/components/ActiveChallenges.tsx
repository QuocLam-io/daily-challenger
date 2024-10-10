"use client";
//Reminder to self: using the "use client" because of future delete function
import React, { useEffect } from "react";
import "./ActiveChallenges.scss";
import getActiveChallenges from "@/app/actions/getActiveChallenges";

const ActiveChallenges = () => {
  const [activeChallenges, setActiveChallenges] = React.useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const results = await getActiveChallenges();
      console.log(results, "results");
      setActiveChallenges(results.data);
    };

    fetchChallenges();
  }, []);

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
