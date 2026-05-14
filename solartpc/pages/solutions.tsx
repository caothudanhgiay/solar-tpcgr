import { Home, Building2, BatteryCharging, Sun } from "lucide-react";
import Head from "next/head";

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Giải Pháp - TPC Solar</title>
        <meta name="description" content="Các giải pháp điện năng lượng mặt trời tối ưu cho hộ gia đình và doanh nghiệp." />
      </Head>
      <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop')" }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-20">
          
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              Giải Pháp
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-12 bg-orange-500"></div>
              <div className="w-3 h-3 rotate-45 border border-orange-500"></div>
              <div className="h-[1px] w-12 bg-orange-500"></div>
            </div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              TPC Solar cung cấp đa dạng các giải pháp điện mặt trời được thiết kế riêng biệt để phù hợp với từng nhu cầu cụ thể của khách hàng.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Solution 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col h-full">
              <div className="bg-orange-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Home className="h-7 w-7 text-orange-400 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">
                Điện Mặt Trời Hộ Gia Đình
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                Giải pháp giúp các hộ gia đình cắt giảm đến 80% hóa đơn tiền điện hàng tháng. Hệ thống tự động ưu tiên sử dụng điện mặt trời vào ban ngày, phần dư thừa có thể bán lại cho lưới điện lực (theo chính sách hiện hành) hoặc lưu trữ.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Tiết kiệm chi phí tiền điện tức thì.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Tăng giá trị và thẩm mỹ cho ngôi nhà.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Giảm nhiệt độ cho mái nhà hiệu quả.
                </li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col h-full">
              <div className="bg-orange-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Building2 className="h-7 w-7 text-orange-400 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">
                Điện Mặt Trời Doanh Nghiệp
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                Tối ưu hóa chi phí vận hành cho các nhà xưởng, tòa nhà văn phòng, và cơ sở sản xuất. Giúp doanh nghiệp đạt được các chứng chỉ xanh, nâng cao uy tín thương hiệu và bảo vệ môi trường.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Hoàn vốn nhanh, sinh lời dài hạn.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Sử dụng diện tích mái trống hiệu quả.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Xây dựng hình ảnh doanh nghiệp xanh.
                </li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col h-full">
              <div className="bg-orange-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <BatteryCharging className="h-7 w-7 text-orange-400 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">
                Hệ Thống Lưu Trữ (Hybrid)
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                Giải pháp kết hợp giữa điện mặt trời và pin lưu trữ. Giúp bạn hoàn toàn chủ động về nguồn điện, không lo mất điện lưới và tối ưu hóa lượng điện mặt trời tạo ra.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Cung cấp điện liên tục 24/7 kể cả khi mất điện lưới.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Tận dụng tối đa nguồn điện mặt trời tự tạo.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Tuổi thọ hệ thống lưu trữ cao.
                </li>
              </ul>
            </div>

            {/* Solution 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col h-full">
              <div className="bg-orange-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Sun className="h-7 w-7 text-orange-400 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">
                Hệ Thống Đèn Năng Lượng Mặt Trời
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                Giải pháp chiếu sáng thông minh cho đường phố, công viên, sân vườn hay các khu vực công cộng. Không cần kéo dây điện phức tạp, tự động bật tắt theo cảm biến ánh sáng.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Chi phí tiền điện chiếu sáng bằng 0.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  An toàn tuyệt đối, không lo rò rỉ điện.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Dễ dàng lắp đặt ở mọi địa hình.
                </li>
              </ul>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
