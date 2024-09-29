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
import { useRouter } from "next/navigation";
import "./ContactsDialog.scss";

export function ContactsDialog({ contactsDialogOpen, setContactsDialogOpen }) {
  const router = useRouter();

  const closeChallengerHandler = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={contactsDialogOpen} onOpenChange={setContactsDialogOpen}>
      <DialogContent className="add-contacts__dialog">
        <DialogHeader>
          <DialogTitle>Contacts Dialog</DialogTitle>
          <DialogDescription>
            This is where you'll add a contact
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
