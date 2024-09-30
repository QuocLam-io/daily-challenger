import { ChallengeForm } from "../forms/ChallengeForm.tsx";
import { useRouter } from "next/navigation";
import "./ChallengeDialog.scss";
import { useDialogStylingStore } from "@/store/dialogStore.jsx";
import Modal from "@/components/Modal.tsx";

export function ChallengeDialog({
  challengeDialogOpen,
  setChallengeDialogOpen,
}) {
  const router = useRouter();
  const { challengeDialogTransparent, setChallengeDialogTransparent } =
    useDialogStylingStore();
  console.log(
    challengeDialogTransparent,
    challengeDialogOpen,
    setChallengeDialogOpen,
    "ChallengeDialog"
  );

  const closeChallengerHandler = () => {
    setChallengeDialogOpen(false);
    router.refresh();
  };

  return (
    <Modal
      open={challengeDialogOpen}
      close={() => {
        setChallengeDialogOpen(false);
      }}
    >
      <ChallengeForm
        open={challengeDialogOpen}
        onOpenChange={setChallengeDialogOpen}
        closeChallengerHandler={closeChallengerHandler}
      />
    </Modal>
  );
}
