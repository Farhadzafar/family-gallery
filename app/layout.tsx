import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zafari's Family Photos",
  description: "Created with v0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
