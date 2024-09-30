import { useRouter } from "next/navigation";
import "./ContactsDialog.scss";
import Modal from "@/components/Modal.tsx";

export function ContactsDialog({ contactsDialogOpen, setContactsDialogOpen }) {
  const router = useRouter();

  const closeChallengerHandler = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    //
    <Modal
      // isTransparent={challengeDialogTransparent}
      open={contactsDialogOpen}
      close={() => {
        setContactsDialogOpen(false);
      }}
    >
      Blub
    </Modal>
  );
}
