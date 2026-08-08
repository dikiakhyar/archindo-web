"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { THEME_STORAGE_KEY } from "./themeScript";

type Theme = "light" | "dark";

type ThemeValue = {
  theme: Theme;
  dark: boolean;
  setDark: (value: boolean) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeValue>({
  theme: "light",
  dark: false,
  setDark: () => {},
  toggle: () => {},
});

function readInitialTheme(): Theme {
  // Di server tidak ada document, jadi selalu mulai dari "light".
  // Di browser, atribut data-theme sudah diisi oleh themeInitScript
  // sebelum React jalan, sehingga nilainya langsung tepat.
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // localStorage bisa diblokir (mode privat) — abaikan saja.
    }
  }, [theme]);

  const setDark = useCallback((value: boolean) => {
    setTheme(value ? "dark" : "light");
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo<ThemeValue>(
    () => ({ theme, dark: theme === "dark", setDark, toggle }),
    [theme, setDark, toggle]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
