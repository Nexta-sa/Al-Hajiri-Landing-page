"use client";

import { DemoProvider } from "@/components/demo/demo-context";
import { DemoModal } from "@/components/demo/demo-modal";

/** App-wide client providers: demo wizard context + the modal portal host. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DemoProvider>
      {children}
      <DemoModal />
    </DemoProvider>
  );
}
