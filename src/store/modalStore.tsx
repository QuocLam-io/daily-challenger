import { create } from "zustand";

interface ModalState {
  visibleModal: string | null;
  setVisibleModal: (modalId: string | null) => void;
}

const useModalStore = create<ModalState>((set) => ({
  visibleModal: null,
  setVisibleModal: (modalId: string | null) =>
    set(() => ({ visibleModal: modalId })),
  resetVisibleModal: () => set(() => ({ visibleModal: null })),
}));

export default useModalStore;
