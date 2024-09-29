import { create } from "zustand";

export const useDialogStylingStore = create((set) => ({
  challengeDialogTransparent: false,
  setChallengeDialogTransparent: (value) =>
    set({ challengeDialogTransparent: value }),
  contactsDialogTransparent: false,
  setContactsDialogTransparent: (value) =>
    set({ contactsDialogTransparent: value }),
}));
