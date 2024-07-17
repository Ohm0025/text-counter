import { create } from "zustand";

export const useResult = create((set) => ({
  result: "",
  setResult: (value) =>
    set(() => {
      return { result: value };
    }),
}));
