import { create } from "zustand";

export const useDialogStylingStore = create((set) => ({
  challengeDialogTransparent: false,
  setChallengeDialogTransparent: () =>
    set((state) => ({
      challengeDialogTransparent: !state.challengeDialogTransparent,
    })),
  contactsDialogTransparent: false,
  setContactsDialogTransparent: () =>
    set((state) => ({
      contactsDialogTransparent: !state.contactsDialogTransparent,
    })),
}));
