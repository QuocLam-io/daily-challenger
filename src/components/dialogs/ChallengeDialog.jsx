import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChallengeForm } from "../forms/ChallengeForm.tsx";
import { useRouter } from "next/navigation";
import "./ChallengeDialog.scss";

export function ChallengeDialog({
  challengeDialogOpen,
  setChallengeDialogOpen,
}) {
  const router = useRouter();

  const closeChallengerHandler = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={challengeDialogOpen} onOpenChange={setChallengeDialogOpen}>
      <DialogContent className="create-challenge__dialog">
        {/* <DialogHeader>
          <DialogTitle>Challenge Yourself!</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader> */}
        <ChallengeForm closeChallengerHandler={closeChallengerHandler} />
      </DialogContent>
    </Dialog>
  );
}
