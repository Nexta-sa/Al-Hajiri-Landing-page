import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "NEXTAIQ — AI Logistics Intelligence Platform",
  description:
    "NEXTAIQ connects operational data from multiple systems into one platform, giving you full visibility across inventory, warehouse activities, procurement, fulfilment, and supply chain performance.",
  keywords: [
    "logistics",
    "AI",
    "supply chain",
    "operations",
    "inventory",
    "warehouse",
    "NEXTAIQ",
  ],
  authors: [{ name: "NEXTAIQ" }],
  openGraph: {
    title: "NEXTAIQ — AI Logistics Intelligence Platform",
    description:
      "Gain full visibility across your logistics operations with AI-powered operational intelligence.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
