import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "newcon",
  description: "Next.js + Tailwind CSS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
