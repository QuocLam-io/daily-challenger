import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Challenge {
  id: string;
  challenge: string;
  deadline: string | null;
  //TODO: this will grow
}

interface ChallengeStore {
  challenges: Challenge[];
  setChallenges: (challenges: Challenge[]) => void;
}

const useChallengeStore = create<ChallengeStore>()(
  persist(
    (set) => ({
      challenges: [],
      setChallenges: (challenges) => set({ challenges }),
    }),
    {
      name: "challenges-storage", // Key in localStorage
    }
  )
);

export default useChallengeStore;