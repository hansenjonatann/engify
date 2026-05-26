"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TranslationState {
  hideAllTranslations: boolean;
  toggleTranslation: () => void;
}

export const useTranslationToggle = create<TranslationState>()(
  persist(
    (set) => ({
      hideAllTranslations: false,
      toggleTranslation: () =>
        set((state) => ({ hideAllTranslations: !state.hideAllTranslations })),
    }),
    {
      name: "translation-preference",
    }
  )
);
