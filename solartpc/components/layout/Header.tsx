"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Trang Chủ", href: "/" },
  { name: "Giới Thiệu", href: "/about" },
  { name: "Giải Pháp", href: "/solutions" },
  { name: "Dự Án", href: "/projects" },
  { name: "Tin Tức", href: "/news" },
  { name: "Liên Hệ", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleQuoteClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/contact") {
      e.preventDefault();
      const input = document.getElementById("ho-va-ten") as HTMLInputElement | null;
      if (input) {
        const offset = 120;
        const top = input.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        setTimeout(() => input.focus(), 300);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative w-56 md:w-64 lg:w-72 h-16 md:h-20 transition-transform group-hover:scale-105">
            <Image 
              src="/images/logo_tpc.png" 
              alt="TPC Logo" 
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold transition-colors hover:text-orange-500 text-white/90 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact#ho-va-ten"
            onClick={handleQuoteClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
          >
            Nhận Báo Giá
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors text-white hover:text-orange-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Mở menu</span>
          {mobileMenuOpen ? (
            <X className="block h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="block h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 shadow-2xl border-t border-white/10 py-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-orange-500 hover:bg-white/5 px-4 py-3 rounded-lg text-base font-semibold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-2">
              <Link
                href="/contact#ho-va-ten"
                onClick={(e) => { handleQuoteClick(e); setMobileMenuOpen(false); }}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3.5 rounded-xl text-base font-bold transition-colors shadow-lg shadow-orange-500/30"
              >
                Nhận Báo Giá
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
