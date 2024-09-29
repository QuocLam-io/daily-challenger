"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { ChallengeDialog } from "./dialogs/ChallengeDialog";

const Challenge = () => {
  let [challengeDialogOpen, setChallengeDialogOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setChallengeDialogOpen(true)}>Challenge Yourself</Button>
      <ChallengeDialog challengeDialogOpen={challengeDialogOpen} setChallengeDialogOpen={setChallengeDialogOpen} />
    </>
  );
};

export default Challenge;
