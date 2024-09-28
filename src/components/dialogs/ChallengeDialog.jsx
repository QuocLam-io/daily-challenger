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
import { ChallengeForm } from "../forms/ChallengeForm.tsx";
import { useRouter } from "next/navigation";

export function ChallengeDialog({ open, setOpen }) {
  const router = useRouter();

  const closeChallengerHandler = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Challenge Yourself!</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <ChallengeForm closeChallengerHandler={closeChallengerHandler} />
      </DialogContent>
    </Dialog>
  );
}
