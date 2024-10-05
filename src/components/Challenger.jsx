"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { ChallengerModal } from "./modals/ChallengerModal";

const Challenger = () => {
  let [challengerModalOpen, setChallengerModalOpen] = useState(false);

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

export default Challenger;
