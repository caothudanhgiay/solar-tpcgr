import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { apiClient } from "@/lib/apiClient";
import { API_MENUS } from "@/utils/constants";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "TPC SOLAR - NĂNG LƯỢNG MẶT TRỜI, GIÁ TRỊ BỀN VỮNG",
  description: "Cung cấp giải pháp năng lượng mặt trời toàn diện, thông minh và tiết kiệm cho hộ gia đình và doanh nghiệp.",
  icons: {
    icon: '/images/logo_tpc.png',
    apple: '/images/logo_tpc.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let menus: { name: string; href: string; }[] | undefined = undefined;
  
  try {
    const data: any[] = await apiClient.get(API_MENUS);
    if (data && data.length > 0) {
      menus = data.map((item: any) => ({
        name: item.menuName,
        href: item.menuUrl,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch menus from API in layout:", error);
  }

  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <Header initialMenus={menus} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
