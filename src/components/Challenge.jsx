"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { ChallengeDialog } from "./dialogs/ChallengeDialog";

const Challenge = () => {
  let [challengeDialogOpen, setChallengeDialogOpen] = useState(false);
  return (
    <div>
      <ChallengeDialog
        challengeDialogOpen={challengeDialogOpen}
        setChallengeDialogOpen={setChallengeDialogOpen}
      />
      <Button onClick={() => setChallengeDialogOpen(true)}>
        Challenge Yourself
      </Button>
    </div>
  );
};

export default Challenge;
