import Head from "next/head";
import {
  Leaf,
  ShieldCheck,
  TrendingUp,
  Globe,
  Users,
  Zap,
  Cpu,
  Sprout,
  Home,
  Building2,
  Wrench,
  Lightbulb,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  PhoneCall,
  MonitorSmartphone,
  Settings,
} from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Sạch hơn",
    sub: "Giảm phát thải",
    color: "text-green-400",
    bg: "bg-green-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Tiết kiệm hơn",
    sub: "Giảm chi phí điện",
    color: "text-blue-400",
    bg: "bg-blue-500/20",
  },
  {
    icon: TrendingUp,
    title: "Hiệu quả hơn",
    sub: "Tối ưu hiệu suất",
    color: "text-orange-400",
    bg: "bg-orange-500/20",
  },
  {
    icon: Globe,
    title: "Bền vững hơn",
    sub: "Phát triển dài lâu",
    color: "text-teal-400",
    bg: "bg-teal-500/20",
  },
];

const aboutPoints = [
  { icon: Zap, text: "Hiệu suất cao, tiết kiệm năng lượng" },
  { icon: Cpu, text: "Công nghệ hiện đại, vận hành thông minh" },
  { icon: Sprout, text: "Hoạt động bền bỉ, thân thiện môi trường" },
];

const services = [
  {
    icon: Home,
    text: (
      <>
        Lắp đặt hệ thống điện mặt trời mái nhà{" "}
        <span className="text-orange-400 font-semibold">(Residential)</span> và thương mại{" "}
        <span className="text-orange-400 font-semibold">(Commercial)</span>
      </>
    ),
  },
  { icon: Building2, text: "Hệ thống điện mặt trời cho doanh nghiệp" },
  { icon: Wrench, text: "Bảo trì và vận hành hệ thống" },
  { icon: Lightbulb, text: "Tư vấn và thiết kế giải pháp tối ưu" },
  { icon: Sparkles, text: "Vệ sinh tấm pin năng lượng mặt trời" },
];

const benefits = [
  "Tiết kiệm chi phí điện",
  "Bảo vệ môi trường",
  "Công nghệ hiện đại",
  "Dịch vụ chuyên nghiệp",
  "Chất lượng đảm bảo",
  "Hỗ trợ nhanh chóng và tận tâm",
];

const contacts = [
  { icon: Phone, label: "LIÊN HỆ VỚI CHÚNG TÔI", value: "", isTitle: true },
  { icon: Mail, label: "Email", value: "solar.tpcgr@gmail.com" },
  { icon: PhoneCall, label: "Hotline", value: "079.779.1612" },
  { icon: MonitorSmartphone, label: "Website", value: "www.tpcsolar.vn" },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Giới Thiệu - TPC Solar | Năng Lượng Xanh, Giá Trị Bền Vững</title>
        <meta
          name="description"
          content="TPC là đơn vị chuyên cung cấp các giải pháp năng lượng mặt trời an toàn, hiệu quả và bền vững tại Việt Nam."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-0">
        {/* ===== HERO TITLE ===== */}
        <div className="relative overflow-hidden py-10 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-slate-800/80 to-teal-900/60" />
          {/* Circuit-like decorative lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide">
              <span className="text-yellow-400 italic">TPC SOLAR</span>
              <span className="text-white"> – NĂNG LƯỢNG XANH, GIÁ TRỊ BỀN VỮNG</span>
            </h1>
          </div>
        </div>

        {/* ===== 4 HIGHLIGHT BADGES ===== */}
        <div className="bg-white/5 backdrop-blur-sm border-y border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, title, sub, color, bg }) => (
              <div key={title} className="flex items-center gap-3">
                <div className={`${bg} p-2.5 rounded-full shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm uppercase">{title}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MAIN 3-COLUMN SECTION ===== */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">

          {/* --- Column 1: Về Chúng Tôi --- */}
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 space-y-4">
            {/* Section header */}
            <div className="flex items-center gap-3 pb-3 border-b border-blue-500/30">
              <div className="bg-blue-500/20 p-2 rounded-full">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <h2 className="text-white font-bold text-lg uppercase tracking-wide">Về Chúng Tôi</h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              TPC là đơn vị chuyên cung cấp các giải pháp năng lượng mặt trời an toàn, hiệu quả và bền vững tại Việt Nam.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Chúng tôi cam kết mang đến công nghệ tiên tiến, chất lượng đáng tin cậy và trách nhiệm với môi trường.
            </p>

            <div className="space-y-3 pt-2">
              {aboutPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="bg-green-500/20 p-1.5 rounded-full shrink-0 mt-0.5">
                    <Icon className="h-4 w-4 text-green-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- Column 2: Dịch Vụ Của TPC --- */}
          <div className="bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 space-y-4">
            {/* Section header */}
            <div className="flex items-center gap-3 pb-3 border-b border-orange-500/30">
              <div className="bg-orange-500/20 p-2 rounded-full">
                <Settings className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-white font-bold text-lg uppercase tracking-wide">Dịch Vụ Của TPC</h2>
            </div>

            <ul className="space-y-4">
              {services.map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg shrink-0 mt-0.5">
                    <Icon className="h-4 w-4 text-orange-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-snug">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Lợi Ích Khi Chọn TPC --- */}
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 space-y-4">
            {/* Section header */}
            <div className="flex items-center gap-3 pb-3 border-b border-green-500/30">
              <div className="bg-green-500/20 p-2 rounded-full">
                <ShieldCheck className="h-5 w-5 text-green-400" />
              </div>
              <h2 className="text-white font-bold text-lg uppercase tracking-wide">Lợi Ích Khi Chọn TPC</h2>
            </div>

            <ul className="space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <p className="text-gray-300 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
