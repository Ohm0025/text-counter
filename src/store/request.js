import { create } from "zustand";

export const useRequest = create((set) => ({
  request: "",
  setRequest: (value) =>
    set(() => {
      return { request: value };
    }),
}));
