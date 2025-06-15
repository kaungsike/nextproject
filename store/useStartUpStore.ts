// store/useStartUpStore.ts

import { create } from 'zustand';

type StartUpState = {
  startUp : string;
  setStartUp: (value: string) => void;
};

export const useStartUpStore = create<StartUpState>((set) => ({
  startUp: '',
  setStartUp: (value) => set({ startUp: value }),
  resetStartUp: () => set({ startUp: '' }), 
}));
