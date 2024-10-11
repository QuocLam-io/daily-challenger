"use client";
import React, { useEffect } from "react";
import useChallengeStore from "@/store/challengesStore";
import getAllChallenges from "@/app/actions/getAllChallenges";

const ChallengeWrapper = ({ children }: { children: React.ReactNode }) => {
  const setChallenges = useChallengeStore((state) => state.setChallenges);

  useEffect(() => {
    const fetchChallenges = async () => {
      const result = await getAllChallenges();
      console.log(result.data, "result.data");
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

export default ChallengeWrapper;
