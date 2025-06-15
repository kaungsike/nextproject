// store/useStartUpStore.ts

import { create } from 'zustand';

type StartUpState = {
  startUp: string | null;
  setStartUp: (value: string | null) => void;
  resetStartUp: () => void;
};

export const useStartUpStore = create<StartUpState>((set) => ({
  startUp: null,
  setStartUp: (value) => set({ startUp: value }),
  resetStartUp: () => set({ startUp: null }),
}));
