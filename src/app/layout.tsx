import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untangle | AI ADHD Coach & Personal Daily Planner",
  description:
    "Untangle offers personalized ADHD strategies, task management, and daily support to help you boost focus, build habits, and achieve your goals.",
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
