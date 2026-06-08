import type { Metadata } from "next";
import "./globals.css";

const title = "Untangle | AI ADHD 코치 & 개인 일상 플래너";
const description =
  "하루를 정리하고, 내 뇌를 더 잘 이해하도록 설계된 AI 코치. ADHD를 위한 맞춤형 전략, 할 일 관리, 일상 지원으로 잠재력을 끌어올려 보세요.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
