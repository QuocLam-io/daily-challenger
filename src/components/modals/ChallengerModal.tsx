import React from "react";
import "./ChallengerModal.scss";
import { ChallengerForm } from "../forms/ChallengerForm";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ---------------------------------- Types --------------------------------- */
interface ChallengeModalProps {
  challengerModalOpen: boolean;
  setChallengerModalOpen: (open: boolean) => void;
}

export const ChallengerModal: React.FC<ChallengerModalProps> = ({
  challengerModalOpen,
  setChallengerModalOpen,
}) => {
  const router = useRouter();

  const closeChallengerHandler = () => {
    setChallengerModalOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={challengerModalOpen} onOpenChange={setChallengerModalOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Blub</DialogTitle>
          <DialogDescription>Blubby Blub Blub</DialogDescription>
        </DialogHeader>
        <ChallengerForm
          open={challengerModalOpen}
          onOpenChange={setChallengerModalOpen}
          closeChallengerHandler={closeChallengerHandler}
        />
      </DialogContent>
    </Dialog>
  );
};
