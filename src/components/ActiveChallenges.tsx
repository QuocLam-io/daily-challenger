"use client";
import React from "react";
import "./ActiveChallenges.scss";
import useChallengeStore from "@/store/challengesStore";
import deleteChallenge from "@/app/actions/deleteChallenge";
import { toast } from "react-toastify";

interface ActiveChallenges {
  id: string;
  challenge: string;
  deadline: string | null;
  // TODO: don't foget to add to this interface as the challenge object grows
}

const ActiveChallenges = () => {
  const challenges = useChallengeStore((state) => state.challenges);
  // const setChallenges = useChallengeStore((state) => state.setChallenges);

  //! DELETE Active Challenges
  const deleteChallengeHandler = async (challengeId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this challenge?"
    );

    if (!confirmDelete) {
      return;
    }

    const {
      // message,
      error,
    } = await deleteChallenge(challengeId);

    if (error) {
      toast.error(error);
    } else {
      // fetchActiveChallengesHandler(); TODO: refactor to use zustand
      toast.success("Challenge deleted");
    }
  };

  return (
    <div className="active-challenges__container">
      <h1>Active Challenges</h1>
      {challenges.length > 0 ? (
        challenges.map((challenge) => (
          <div key={challenge.id}>
            <h2>{challenge.challenge}</h2>
            {/* <p>{challenge.deadline ? challenge.deadline : "No deadline"}</p> */}
            <button onClick={() => deleteChallengeHandler(challenge.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No active challenges found</p>
      )}
    </div>
    // <div className="active-challenges__container">
    //   <h1>Active Challenges</h1>"{" "}
    //   {activeChallenges.map((challenge) => {
    //     return (
    //       <div key={challenge.id}>
    //         <h2>{challenge.challenge}</h2>
    //         {/* <p>{challenge.deadline ? challenge.deadline : "deadline"}</p> */}
    //         <button onClick={() => deleteChallengeHandler(challenge.id)}>
    //           Delete
    //         </button>
    //       </div>
    //     );
    //   })}

    // </div>
  );
};

export default ActiveChallenges;
