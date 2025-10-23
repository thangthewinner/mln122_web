'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Accordion from '@/components/ui/Accordion'

const SolutionsSection = () => {
  const solutionItems = [
    {
      id: 'human-resources',
      title: 'Phát triển Nhân lực 4.0',
      icon: '👥',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold text-blue-900 mb-2">Nâng cao "nội lực" con người</h4>
            <p className="text-blue-800">
              Then chốt để làm chủ công nghệ, không phải bị công nghệ thay thể. 
              Con người phải là trung tâm của quá trình công nghiệp hóa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                Đào tạo STEM
              </h5>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Khoa học, Công nghệ, Kỹ thuật, Toán học</li>
                <li>• Tích hợp AI, Big Data vào chương trình giáo dục</li>
                <li>• Phát triển tư duy logic và sáng tạo</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                Kỹ năng số
              </h5>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Lập trình và phân tích dữ liệu</li>
                <li>• Thiết kế lại quy trình số hóa</li>
                <li>• An ninh mạng và bảo mật</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                Học tập suốt đời
              </h5>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kỹ năng tự học công nghệ mới</li>
                <li>• Khả năng thích ứng với thay đổi</li>
                <li>• Tinh thần đổi mới, sáng tạo</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-2">4</span>
            Đào tạo doanh nghiệp
              </h5>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Chuyển đổi số vận hành</li>
                <li>• Quản lý công nghệ 4.0</li>
                <li>• Xây dựng văn hóa đổi mới</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'innovation',
      title: 'Thúc đẩy Đổi mới Sáng tạo Quốc gia',
      icon: '💡',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-semibold text-green-900 mb-2">Xây dựng hệ sinh thái đổi mới</h4>
            <p className="text-green-800">
              Giảm phụ thuộc vào công nghệ lõi từ nước ngoài, phát triển năng lực tự chủ công nghệ.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">🚀 Hạ tầng số</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Mạng 5G phủ sóng cả nước đến 2028</li>
                <li>• Data centers và cloud computing quốc gia</li>
                <li>• Internet tốc độ cao đến vùng sâu, vùng xa</li>
                <li>• An ninh mạng chủ quyền quốc gia</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">🔬 R&D và Công nghệ lõi</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Đầu tư 2% GDP cho R&D</li>
                <li>• Phát triển công nghệ lõi: AI, IoT, Blockchain</li>
                <li>• Phòng thí nghiệm quốc gia về công nghệ mới</li>
                <li>• Hợp tác quốc tế về chuyển giao công nghệ</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">🚀 Khởi nghiệp công nghệ</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Quỹ đầu tư mạo hiểm cho startup công nghệ</li>
                <li>• Vườn ươm doanh nghiệp công nghệ cao</li>
                <li>• Chính sách ưu đãi thuế cho R&D</li>
                <li>• Kết nối startup với doanh nghiệp lớn</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sme-support',
      title: 'Chính sách Hỗ trợ SME & Nông thôn',
      icon: '🏘️',
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="font-semibold text-orange-900 mb-2">Cầu nối công nghệ cho khu vực dễ tổn thương</h4>
            <p className="text-orange-800">
              Cần các chính sách "cầu nối" để doanh nghiệp nhỏ và khu vực nông thôn không bị bỏ lại phía sau.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">💰 Hỗ trợ tài chính</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Gói tín dụng ưu đãi 0% lãi suất cho chuyển đổi số</li>
                <li>• Hoàn thuế 100% cho chi phí công nghệ</li>
                <li>• Quỹ hỗ trợ SME số hóa đến 500 tỷ</li>
                <li>• Đặc thuiclhuất đầu tư công nghệ cao</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">🤝 Chuyển giao công nghệ</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Trung tâm chuyển giao công miễn phí cho SME</li>
                <li>• Tư vấn 1:1 về chuyển đổi số</li>
                <li>• Chương trình "Doanh nghiệp lớn kèm SME"</li>
                <li>• Demo center thử nghiệm công nghệ mới</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">🌾 Nông thôn số</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Wifi miễn phí tại xã vùng khó khăn</li>
                <li>• Đào tạo số cho nông dân (1 triệu người/năm)</li>
                <li>• Hỗ trợ máy móc công nghệ cao cho nông nghiệp</li>
                <li>• Thị trường điện tử cho nông sản</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">🎯 Đo lường và đánh giá</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Bộ chỉ số số hóa quốc gia</li>
                <li>• Đánh giá tác động chính sách hàng quý</li>
                <li>• Tổng đài hỗ trợ chuyển đổi số 1900</li>
                <li>• Báo cáo công khai minh bạch</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="solutions" className="section bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Định hướng cho Việt Nam: <span className="text-gradient">Sáng tạo & Bền vững</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Từ kết quả phân tích, chúng ta thấy rõ sự giằng xé giữa hiệu quả (LLSX) và con người (QHSX). 
              Định hướng CNH, HĐH của Việt Nam phải giải quyết được mâu thuẫn này.
            </p>
          </div>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion 
              items={solutionItems} 
              allowMultiple={false}
              className="space-y-4"
            />
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Chìa khóa thành công: Đồng bộ 3 trụ cột
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">👥</span> Con người
                  </h4>
                  <p className="text-sm opacity-90">
                    Đặt con người vào trung tâm của quá trình chuyển đổi số
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">💡</span> Công nghệ
                  </h4>
                  <p className="text-sm opacity-90">
                    Phát triển công nghệ lõi, tự chủ đổi mới sáng tạo
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🇻🇳</span> Chủ quyền
                  </h4>
                  <p className="text-sm opacity-90">
                    Đảm bảo an ninh, độc lập trong kỷ nguyên số
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection
