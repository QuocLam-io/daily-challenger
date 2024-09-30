import { useRouter } from "next/navigation";
import "./ContactsModal.scss";
import Modal from "@/components/Modal.tsx";

export function ContactsModal({ contactsModalOpen, setContactsModalOpen }) {
  const router = useRouter();

  const closeChallengerHandler = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    //
    <Modal
      open={contactsModalOpen}
      close={() => {
        setContactsModalOpen(false);
      }}
    >
      Blub
    </Modal>
  );
}
