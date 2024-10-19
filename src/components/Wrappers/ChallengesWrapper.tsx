"use client";
import React, { useEffect } from "react";
import useChallengeStore from "@/store/challengesStore";
import getAllChallenges from "@/app/actions/getAllChallenges";

// TODO: Note to self: the purpose of this wrapper component is to fetch all challenges of a user and set them to zustand. The dependency array is set to [setChallenges] because we want to refetch the challenges and rerender components after making any changes to the database's challenges collection.

const ChallengesWrapper = ({ children }: { children: React.ReactNode }) => {
  const setChallenges = useChallengeStore((state) => state.setChallenges);

  useEffect(() => {
    const fetchChallenges = async () => {
      const result = await getAllChallenges();
      
      if (result.data) {
        setChallenges(result.data);
      } else {
        console.error(result.error);
      }
    };

    fetchChallenges();
  }, [setChallenges]);

  return <>{children}</>;
};

export default ChallengesWrapper;
