import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jadeo Mission Control",
  description: "AI Cognitive Asset Management Terminal"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
