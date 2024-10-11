"use client";
//Reminder to self: using the "use client" because of future delete function
import React, { useEffect, useState } from "react";
import "./ActiveChallenges.scss";
import getAllChallenges from "@/app/actions/getAllChallenges";
import deleteChallenge from "@/app/actions/deleteChallenge";
import { toast } from "react-toastify";

interface ActiveChallenges {
  id: string;
  challenge: string;
  deadline: string | null;
  // TODO: don't foget to add to this interface as the challenge object grows
}

const ActiveChallenges = () => {
  const [activeChallenges, setActiveChallenges] = useState<ActiveChallenges[]>(
    []
  );

  //GET Active Challenges
  const fetchActiveChallengesHandler = async () => {
    const results = await getAllChallenges();
    if (results.data) {
      setActiveChallenges(results.data);
    }
  };

  //DELETE Active Challenges
  const deleteChallengeHandler = async (challengeId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this challenge?"
    );

    if (!confirmDelete) {
      return;
    }

    const { message, error } = await deleteChallenge(challengeId);

    if (error) {
      toast.error(error);
    } else {
      fetchActiveChallengesHandler();
      toast.success("Challenge deleted");
    }
  };

  useEffect(() => {
    fetchActiveChallengesHandler();
  }, []);

  return (
    // <></>
    <div className="active-challenges__container">
      <h1>Active Challenges</h1>
      {activeChallenges.map((challenge) => {
        return (
          <div key={challenge.id}>
            <h2>{challenge.challenge}</h2>
            {/* <p>{challenge.deadline ? challenge.deadline : "deadline"}</p> */}
            <button onClick={() => deleteChallengeHandler(challenge.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveChallenges;
