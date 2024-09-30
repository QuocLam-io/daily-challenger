import { ChallengeForm } from "../forms/ChallengeForm.tsx";
import { useRouter } from "next/navigation";
import "./ChallengeModal.scss";
import { useModalStylingStore } from "@/store/modalStore.jsx";
import Modal from "@/components/Modal.tsx";

export function ChallengeModal({
  challengeModalOpen,
  setChallengeModalOpen,
}) {
  const router = useRouter();
  const { challengeModalTransparent } = useModalStylingStore();

  const closeChallengerHandler = () => {
    setChallengeModalOpen(false);
    router.refresh();
  };

  return (
    <>
      <Modal
        isTransparent={challengeModalTransparent}
        open={challengeModalOpen}
        close={() => {
          setChallengeModalOpen(false);
        }}
      >
        <ChallengeForm
          open={challengeModalOpen}
          onOpenChange={setChallengeModalOpen}
          closeChallengerHandler={closeChallengerHandler}
        />
      </Modal>
    </>
  );
}
