import { create } from "zustand";

export const useModalStylingStore = create((set) => ({
  challengeModalTransparent: false,
  setChallengeModalTransparent: () =>
    set((state) => ({
      challengeModalTransparent: !state.challengeModalTransparent,
    })),
  contactsModalTransparent: false,
  setContactsModalTransparent: () =>
    set((state) => ({
      contactsModalTransparent: !state.contactsModalTransparent,
    })),
}));
