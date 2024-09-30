"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { ChallengeModal } from "./modals/ChallengeModal";

const Challenge = () => {
  let [challengeModalOpen, setChallengeModalOpen] = useState(false);
  return (
    <div>
      <ChallengeModal
        challengeModalOpen={challengeModalOpen}
        setChallengeModalOpen={setChallengeModalOpen}
      />
      <Button onClick={() => setChallengeModalOpen(true)}>
        Challenge Yourself
      </Button>
    </div>
  );
};

export default Challenge;
