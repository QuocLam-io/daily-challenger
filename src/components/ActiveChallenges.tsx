"use client";
//Reminder to self: using the "use client" because of future delete function
import React, { useEffect, useState } from "react";
import "./ActiveChallenges.scss";
import getActiveChallenges from "@/app/actions/getActiveChallenges";

interface ActiveChallenges {
  id: number;
  challenge: string;
  deadline: string | null;
  // TODO: don't foget to add to this interface as the challenge object grows
}

const ActiveChallenges = () => {
  const [activeChallenges, setActiveChallenges] = useState<ActiveChallenges[]>(
    []
  );

  useEffect(() => {
    const fetchChallenges = async () => {
      const results = await getActiveChallenges();
      console.log(results.data, "results");
      setActiveChallenges(results.data);
    };

    fetchChallenges();
  }, []);

  return (
    // <></>
    <div className="active-challenges__container">
      <h1>Active Challenges</h1>
      {activeChallenges.map((challenge) => {
        return (
          <div key={challenge.id}>
            <h2>{challenge.challenge}</h2>
            <p>{challenge.deadline ? challenge.deadline : "deadline"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveChallenges;
