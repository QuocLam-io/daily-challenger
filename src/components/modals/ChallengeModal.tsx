import { ChallengeForm } from "../forms/ChallengeForm.jsx";
import { useRouter } from "next/navigation";
import "./ChallengeModal.scss";
import Modal from "@/components/Modal.tsx";

export function ChallengeModal({ challengeModalOpen, setChallengeModalOpen }) {
  const router = useRouter();

  const closeChallengerHandler = () => {
    setChallengeModalOpen(false);
    router.refresh();
  };

  return (
    <>
      <Modal
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

