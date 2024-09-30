import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChallengeForm } from "../forms/ChallengeForm.tsx";
import { useRouter } from "next/navigation";
import "./ChallengeDialog.scss";
import { useDialogStylingStore } from "@/store/dialogStore.jsx";

export function ChallengeDialog({
  challengeDialogOpen,
  setChallengeDialogOpen,
}) {
  const router = useRouter();
  const { challengeDialogTransparent, setChallengeDialogTransparent } =
    useDialogStylingStore();

  const closeChallengerHandler = () => {
    setChallengeDialogOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={challengeDialogOpen} onOpenChange={setChallengeDialogOpen}>
      <DialogContent className={`create-challenge__dialog`}>
        <DialogHeader>
          <DialogTitle>Challenge Yourself!</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <ChallengeForm closeChallengerHandler={closeChallengerHandler} />
      </DialogContent>
      <button onClick={setChallengeDialogTransparent}>Button</button>
    </Dialog>
  );
}
