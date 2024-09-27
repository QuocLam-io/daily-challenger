"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { ChallengeDialog } from "./dialogs/ChallengeDialog";

const Challenge = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Challenge Yourself</Button>
      <ChallengeDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default Challenge;
