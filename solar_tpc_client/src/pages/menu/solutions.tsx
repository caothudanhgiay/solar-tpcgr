"use client";
import { Home, Building2, BatteryCharging, Sun } from "lucide-react";
import Head from "next/head";
import { motion } from "framer-motion";

// ── Animation variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

// ── Data ────────────────────────────────────────────────────────
const solutions = [
  {
    icon: Home,
    title: "Điện Mặt Trời Hộ Gia Đình",
    desc: "Giải pháp giúp các hộ gia đình cắt giảm đến 80% hóa đơn tiền điện hàng tháng. Hệ thống tự động ưu tiên sử dụng điện mặt trời vào ban ngày, phần dư thừa có thể bán lại cho lưới điện lực (theo chính sách hiện hành) hoặc lưu trữ.",
    points: [
      "Tiết kiệm chi phí tiền điện tức thì.",
      "Tăng giá trị và thẩm mỹ cho ngôi nhà.",
      "Giảm nhiệt độ cho mái nhà hiệu quả.",
    ],
    animVariant: slideLeft,
  },
  {
    icon: Building2,
    title: "Điện Mặt Trời Doanh Nghiệp",
    desc: "Tối ưu hóa chi phí vận hành cho các nhà xưởng, tòa nhà văn phòng, và cơ sở sản xuất. Giúp doanh nghiệp đạt được các chứng chỉ xanh, nâng cao uy tín thương hiệu và bảo vệ môi trường.",
    points: [
      "Hoàn vốn nhanh, sinh lời dài hạn.",
      "Sử dụng diện tích mái trống hiệu quả.",
      "Xây dựng hình ảnh doanh nghiệp xanh.",
    ],
    animVariant: slideRight,
  },
  {
    icon: BatteryCharging,
    title: "Hệ Thống Lưu Trữ (Hybrid)",
    desc: "Giải pháp kết hợp giữa điện mặt trời và pin lưu trữ. Giúp bạn hoàn toàn chủ động về nguồn điện, không lo mất điện lưới và tối ưu hóa lượng điện mặt trời tạo ra.",
    points: [
      "Cung cấp điện liên tục 24/7 kể cả khi mất điện lưới.",
      "Tận dụng tối đa nguồn điện mặt trời tự tạo.",
      "Tuổi thọ hệ thống lưu trữ cao.",
    ],
    animVariant: slideLeft,
  },
  {
    icon: Sun,
    title: "Hệ Thống Đèn Năng Lượng Mặt Trời",
    desc: "Giải pháp chiếu sáng thông minh cho đường phố, công viên, sân vườn hay các khu vực công cộng. Không cần kéo dây điện phức tạp, tự động bật tắt theo cảm biến ánh sáng.",
    points: [
      "Chi phí tiền điện chiếu sáng bằng 0.",
      "An toàn tuyệt đối, không lo rò rỉ điện.",
      "Dễ dàng lắp đặt ở mọi địa hình.",
    ],
    animVariant: slideRight,
  },
];

// ── Component ───────────────────────────────────────────────────
export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Giải Pháp - TPC Solar</title>
        <meta name="description" content="Các giải pháp điện năng lượng mặt trời tối ưu cho hộ gia đình và doanh nghiệp." />
      </Head>

      <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background với ảnh pin mặt trời */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')" }}
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-20">

          {/* ===== Page Title ===== */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              Giải Pháp
            </h1>
            <div className="flex items-center justify-center gap-2">
              <motion.div
                className="h-[1px] bg-orange-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div
                className="w-3 h-3 rotate-45 border border-orange-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              <motion.div
                className="h-[1px] bg-orange-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <motion.p
              className="text-gray-300 mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              TPC Solar cung cấp đa dạng các giải pháp điện mặt trời được thiết kế riêng biệt để phù hợp với từng nhu cầu cụ thể của khách hàng.
            </motion.p>
          </motion.div>

          {/* ===== Solutions Grid ===== */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map(({ icon: Icon, title, desc, points, animVariant }, idx) => (
              <motion.div
                key={title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col h-full group"
                variants={animVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(249,115,22,0.4)",
                  boxShadow: "0 24px 48px rgba(249,115,22,0.12)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Icon */}
                <motion.div
                  className="bg-orange-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ backgroundColor: "rgba(249,115,22,1)", scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-7 w-7 text-orange-400 group-hover:text-white transition-colors" />
                </motion.div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-4">{title}</h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>

                {/* Bullet points */}
                <ul className="text-gray-300 text-sm space-y-2 border-t border-white/10 pt-4">
                  {points.map((point, pi) => (
                    <motion.li
                      key={point}
                      className="flex items-center gap-2"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={pi}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: pi * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                      />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* ===== CTA Banner ===== */}
          <motion.div
            className="text-center bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl py-10 px-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Bạn cần tư vấn giải pháp phù hợp?
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
            </motion.p>
            <motion.a
              href="/menu/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              Liên Hệ Ngay
            </motion.a>
          </motion.div>

        </div>
      </main>
    </>
  );
}
