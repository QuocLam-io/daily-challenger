import { useRouter } from "next/navigation";
import "./ContactsModal.scss";
import Modal from "@/components/Modal.tsx";

export function ContactsModal({ contactsModalOpen, setContactsModalOpen }) {

  return (
    {/* TODO: Return to dialog */}
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
