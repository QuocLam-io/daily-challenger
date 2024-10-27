"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { ChallengerModal } from "../modals/ChallengerModal";

const ChallengerClient = () => {
  const [challengerModalOpen, setChallengerModalOpen] =
    useState<boolean>(false);

  return (
    <div>
      <ChallengerModal
        challengerModalOpen={challengerModalOpen}
        setChallengerModalOpen={setChallengerModalOpen}
      />
      <Button
        onClick={() => {
          setChallengerModalOpen(true);
        }}
      >
        Challenge Yourself
      </Button>
    </div>
  );
};

export default ChallengerClient;
