import { create } from "zustand";

export const useInstruction = create((set) => ({
  instruction: "",
  setInstruction: (value) =>
    set(() => {
      return { instruction: value };
    }),
}));
