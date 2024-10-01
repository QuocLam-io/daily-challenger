import { useRouter } from "next/navigation";
import "./ContactsModal.scss";
import Modal from "@/components/Modal.tsx";

export function ContactsModal({ contactsModalOpen, setContactsModalOpen }) {
  return (
    // Return to dialog
    <Modal
      open={contactsModalOpen}
      // open={isOpen}
      close={() => {
        setContactsModalOpen(false);
      }}
    >
      Blub
    </Modal>
  );
}
