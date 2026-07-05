"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface DemoContextValue {
  isOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDemo = useCallback(() => setIsOpen(true), []);
  const closeDemo = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openDemo, closeDemo }),
    [isOpen, openDemo, closeDemo]
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo(): DemoContextValue {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return ctx;
}
