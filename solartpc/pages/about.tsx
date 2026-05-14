import { ShieldCheck, Users, Lightbulb, Target } from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Giới Thiệu - TPC Solar</title>
        <meta name="description" content="Tìm hiểu về TPC Solar, sứ mệnh và giá trị cốt lõi của chúng tôi trong ngành năng lượng mặt trời." />
      </Head>
      <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?q=80&w=2072&auto=format&fit=crop')" }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-20">
          
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              Giới Thiệu
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-12 bg-orange-500"></div>
              <div className="w-3 h-3 rotate-45 border border-orange-500"></div>
              <div className="h-[1px] w-12 bg-orange-500"></div>
            </div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              TPC Solar tự hào là đơn vị tiên phong cung cấp các giải pháp năng lượng mặt trời toàn diện, giúp khách hàng tiết kiệm chi phí và bảo vệ môi trường.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Về Chúng Tôi
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Công ty TNHH ĐT&TM Năng Lượng TPC (TPC Solar) được thành lập với khát vọng mang nguồn năng lượng sạch, vô tận từ mặt trời đến với mọi gia đình và doanh nghiệp Việt Nam. Chúng tôi hiểu rằng, năng lượng tái tạo không chỉ là xu hướng mà còn là chìa khóa cho một tương lai bền vững.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Với đội ngũ kỹ sư giàu kinh nghiệm và sự hợp tác chiến lược với các nhà sản xuất tấm pin, inverter hàng đầu thế giới, TPC Solar cam kết mang đến những hệ thống điện mặt trời tối ưu nhất về hiệu suất và chi phí.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Những nguyên tắc định hình nên mọi hành động và quyết định của chúng tôi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                <ShieldCheck className="h-6 w-6 text-orange-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Chất Lượng</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cam kết sử dụng thiết bị chính hãng, đạt tiêu chuẩn quốc tế và thi công đúng kỹ thuật.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                <Users className="h-6 w-6 text-orange-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tận Tâm</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Luôn lắng nghe và hỗ trợ khách hàng hết mình trước, trong và sau khi lắp đặt.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                <Lightbulb className="h-6 w-6 text-orange-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Đổi Mới</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Không ngừng cập nhật công nghệ mới để mang lại giải pháp tối ưu nhất cho khách hàng.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                <Target className="h-6 w-6 text-orange-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bền Vững</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hướng tới sự phát triển lâu dài cho doanh nghiệp gắn liền với bảo vệ môi trường.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
