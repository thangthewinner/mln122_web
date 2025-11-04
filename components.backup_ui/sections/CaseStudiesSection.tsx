'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '@/components/ui/Carousel'

const CaseStudiesSection = () => {
  const caseStudies = [
    // Slide 1: VinFast
    (
      <div key="vinfast" className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gradient-to-br from-ocean-700 to-ocean-600 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-6xl">🚗</div>
              </div>
              <h3 className="text-3xl font-bold mb-2">VinFast</h3>
              <p className="text-ocean-100">Bước nhảy vọt công nghệ</p>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900">
                Đầu tư vào AI và Robot
              </h4>
              <p className="text-gray-600 leading-relaxed">
                VinFast đã thực hiện bước đột phá bằng cách đầu tư mạnh mẽ vào công nghệ sản xuất ô tô điện, 
                tích hợp AI vào hệ thống autonomous driving và xây dựng nhà máy tự động hóa.
              </p>
              <div className="bg-ocean-50 border-l-4 border-ocean-600 p-4 rounded">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ocean-600 rounded-full mr-2"></span>
                    Nhà máy sản xuất với độ tự động hóa cao
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ocean-600 rounded-full mr-2"></span>
                    R&D công nghệ xe điện và pin tiên tiến
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ocean-600 rounded-full mr-2"></span>
                    Đầu tư 174 triệu USD vào AI và phần mềm
                  </li>
                </ul>
              </div>
              <div className="text-sm text-gray-500 italic">
                Nguồn: VinFast Press Release, Q4/2024
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // Slide 2: Fintech
    (
      <div key="fintech" className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-6xl">💳</div>
              </div>
              <h3 className="text-3xl font-bold mb-2">Fintech</h3>
              <p className="text-green-100">Tài chính trong kỷ nguyên số</p>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900">
                Ứng dụng AI và Blockchain
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Công nghệ tài chính (Fintech) đang tạo ra bước đứt gãy mạnh mẽ trong ngành ngân hàng truyền thống, 
                giúp người dùng tiếp cận dịch vụ tài chính nhanh, rẻ và minh bạch hơn.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Thanh toán, chuyển tiền tức thì qua ví điện tử và ngân hàng số
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    AI phân tích hành vi, cá nhân hóa dịch vụ khách hàng
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></span>
                    <span>Blockchain đảm bảo bảo mật và giảm chi phí{' '}
                    <span className="whitespace-nowrap">giao dịch</span></span>
                  </li>
                </ul>
              </div>
              <div className="text-sm text-gray-500 italic">
                Nguồn: Ngân hàng Nhà nước Việt Nam, Báo cáo Chuyển đổi số 2024.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // Slide 3: Nông nghiệp Thông minh
    (
      <div key="smart-agriculture" className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gradient-to-br from-green-500 to-emerald-600 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-6xl">🌾</div>
              </div>
              <h3 className="text-3xl font-bold mb-2">Nông nghiệp Thông minh</h3>
              <p className="text-green-100">Hy vọng từ nông thôn</p>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900">
                Ứng dụng Drone và IoT
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Nông nghiệp công nghệ cao đang mở ra hướng đi mới cho khu vực nông thôn, 
                nhưng cần chính sách mạnh mẽ để nhân rộng và phổ biến.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Drone phun thuốc trừ sâu tự động
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Cảm biến IoT theo dõi đất đai, khí hậu
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Nâng cao năng suất 30-40% so với truyền thống
                  </li>
                </ul>
              </div>
              <div className="text-sm text-gray-500 italic">
                Nguồn: Bộ Nông nghiệp và PTNT, Chương trình Chuyển đổi số 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ]

  return (
    <section id="case-studies" className="section bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Câu chuyện <span className="text-gradient">thực tiễn</span> tại Việt Nam
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Minh chứng rõ nét về "đứt gãy <span className="whitespace-nowrap">công nghệ</span>" trong bối cảnh phát triển{' '}
              <span className="whitespace-nowrap">kinh tế - xã hội</span>{' '}
              <span className="whitespace-nowrap">Việt Nam</span>
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-4xl mx-auto">
            <Carousel 
              children={caseStudies} 
              autoPlay={false} // Presenter controlled
              showDots={true}
              showArrows={true}
              className="min-h-[400px]"
            />
          </div>

          {/* Bottom Insight */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tương phản dữ liệu
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                  <p className="text-gray-600">Tự động hóa<br/>VinFast</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                  <p className="text-gray-600">Fintech<br/>(thanh toán số)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">30-40%</div>
                  <p className="text-gray-600">Năng suất tăng<br/>Nông nghiệp số</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
