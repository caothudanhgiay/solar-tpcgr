import { User, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Liên Hệ - TPC Renewable Energy",
  description: "Liên hệ với TPC Solar để được tư vấn hệ thống điện năng lượng mặt trời.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background with overlay to match Home Page */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-20">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            Liên Hệ
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <div className="w-3 h-3 rotate-45 border border-orange-500"></div>
            <div className="h-[1px] w-12 bg-orange-500"></div>
          </div>
        </div>

        {/* Info & Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl h-full">
              <h2 className="text-orange-500 font-bold text-xl uppercase mb-8">
                CÔNG TY TNHH ĐT&TM NĂNG LƯỢNG TPC
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-3 rounded-full text-orange-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Văn phòng Đồng Nai</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Trường Tiểu học Tam Phước 4, Nguyễn Khắc Hiếu, Tam Phước, Đồng Nai, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-3 rounded-full text-orange-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Hotline</h3>
                    <p className="text-orange-400 font-bold text-lg">0358 323 04</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-3 rounded-full text-orange-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-sm">tpcsolar@gmail.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative">
             <iframe 
              src="https://maps.google.com/maps?q=%E1%BA%A4p+Long+%C4%90%E1%BB%A9c+1,+P+Tam+Ph%C6%B0%E1%BB%9Bc+TP+Bi%C3%AAn+Ho%C3%A0+,+T%E1%BB%89nh+%C4%90%E1%BB%93ng+Nai&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">GỬI THÔNG TIN CHO CHÚNG TÔI</h2>
            <p className="text-gray-400 text-sm">Vui lòng điền đầy đủ thông tin và nội dung liên hệ. Chúng tôi sẽ phản hồi bạn sớm nhất</p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="absolute top-3 left-0 text-orange-400">
                  <User className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Họ và tên (*)" 
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b border-gray-600 outline-none focus:border-orange-500 focus:ring-0 text-white placeholder-gray-500 transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute top-3 left-0 text-orange-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Điện thoại (*)" 
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b border-gray-600 outline-none focus:border-orange-500 focus:ring-0 text-white placeholder-gray-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="absolute top-3 left-0 text-orange-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b border-gray-600 outline-none focus:border-orange-500 focus:ring-0 text-white placeholder-gray-500 transition-colors"
                />
              </div>
              <div className="relative">
                <div className="absolute top-3 left-0 text-orange-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Địa chỉ" 
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b border-gray-600 outline-none focus:border-orange-500 focus:ring-0 text-white placeholder-gray-500 transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 text-orange-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea 
                placeholder="Nội dung" 
                rows={4}
                className="w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b border-gray-600 outline-none focus:border-orange-500 focus:ring-0 text-white placeholder-gray-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="text-center pt-6">
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-14 rounded-full transition-all inline-block uppercase tracking-wider shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
              >
                GỬI
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}
