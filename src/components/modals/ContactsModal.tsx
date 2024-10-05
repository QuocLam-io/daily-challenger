import "./ContactsModal.scss";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ContactsModal({ contactsModalOpen, setContactsModalOpen }) {
  return (
    <Dialog open={contactsModalOpen} onOpenChange={setContactsModalOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contacts</DialogTitle>
          <DialogDescription>Challenge a contact</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
