import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "TPC Renewable Energy - Giải pháp Năng lượng mặt trời",
  description: "Cung cấp giải pháp năng lượng mặt trời toàn diện, thông minh và tiết kiệm cho hộ gia đình và doanh nghiệp.",
  icons: {
    icon: '/images/logo_tpc.png',
    apple: '/images/logo_tpc.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
