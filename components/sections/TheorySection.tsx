'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Tabs from '@/components/ui/Tabs'

const TheorySection = () => {
  const theoryTabs = [
    {
      id: 'concept',
      label: 'Khái niệm CNH',
      content: (
        <div className="space-y-6">
          <div className="bg-ocean-50 border-l-4 border-ocean-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-ocean-900 mb-3">Định nghĩa cốt lõi</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Công nghiệp hóa, hiện đại hóa (CNH, HĐH) là quá trình chuyển đổi căn bản, toàn diện và đồng bộ 
              các hoạt động kinh tế - xã hội từ sử dụng lao động thủ công sang 
              lao động cơ giới hóa, hiện đại có trình độ khoa học - công nghệ cao, nhằm phát triển 
              lực lượng sản xuất và hoàn thiện quan hệ sản xuất xã hội chủ nghĩa.
            </p>
            <p className="text-sm text-gray-600 italic">
              📚 Nguồn: Giáo trình Kinh tế Chính trị Mác - Lênin, NXB Chính trị Quốc gia Sự thật, 2023
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-3">🏭 Công nghiệp hóa</h5>
              <ul className="space-y-2 text-gray-600">
                <li>• Phát triển công nghiệp chế tạo, chế biến</li>
                <li>• Tăng tỷ trọng công nghiệp trong GDP</li>
                <li>• Ứng dụng máy móc, tự động hóa</li>
                <li>• Tạo ra chuỗi giá trị công nghệ cao</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-3">🏙️ Hiện đại hóa</h5>
              <ul className="space-y-2 text-gray-600">
                <li>• Hiện đại hóa nông nghiệp và dịch vụ</li>
                <li>• Phát triển hạ tầng đô thị, nông thôn</li>
                <li>• Ứng dụng công nghệ số, AI, IoT</li>
                <li>• Nâng cao chất lượng sống, giáo dục</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'necessity',
      label: 'Tính tất yếu',
      content: (
        <div className="space-y-6">
          <div className="bg-ocean-50 border-l-4 border-ocean-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-ocean-900 mb-3">Lý luận Mác - Lênin</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Theo Mác – Lênin, CNH, HĐH là <strong>tất yếu khách quan</strong> để phát triển Lực lượng sản xuất (LLSX), 
              xây dựng cơ sở vật chất – kỹ thuật cho CNXH. Trong thời đại 4.0, 'đứt gãy công nghệ' 
              chính là thách thức lớn nhất đối với tính tất yếu này.
            </p>
            <p className="text-sm text-gray-600 italic">
              💡 "Lực lượng sản xuất phát triển đến một trình độ nhất định sẽ mâu thuẫn với quan hệ sản xuất hiện có" - K. Marx, Tư bản, tập I
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h5 className="font-semibold text-gray-900 mb-4">⚡ Mâu thuẫn Biện chứng trong Thời đại 4.0</h5>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h6 className="font-medium text-gray-900">LLSX phát triển vượt bậc</h6>
                  <p className="text-gray-600">AI, IoT, Big Data tạo ra năng suất chưa từng có</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h6 className="font-medium text-gray-900">QHSX không theo kịp</h6>
                  <p className="text-gray-600">Quan hệ sản xuất cũ kìm hãm phát triển công nghệ</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h6 className="font-medium text-gray-900">Đứt gãy công nghệ</h6>
                  <p className="text-gray-600">Khoảng cách giữa các quốc gia, doanh nghiệp ngày càng lớn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'content',
      label: 'Nội dung',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center mr-3">
                  1
                </span>
                Phát triển Lực lượng sản xuất hiện đại
              </h4>
              <ul className="space-y-2 ml-13 text-gray-600">
                <li>• Đầu tư vào công nghệ cao, R&D, đổi mới sáng tạo</li>
                <li>• Phát triển hạ tầng số, 5G, cloud computing</li>
                <li>• Hiện đại hóa nông nghiệp công nghệ cao</li>
                <li>• Xây dựng hệ sinh thái khởi nghiệp công nghệ</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center mr-3">
                  2
                </span>
                Chuyển dịch cơ cấu kinh tế
              </h4>
              <ul className="space-y-2 ml-13 text-gray-600">
                <li>• Giảm tỷ trọng nông nghiệp, tăng công nghiệp - dịch vụ</li>
                <li>• Phát triển các ngành kinh tế số, nền tảng số</li>
                <li>• Xây dựng chuỗi cung ứng công nghệ cao</li>
                <li>• Tích hợp vào chuỗi giá trị toàn cầu</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center mr-3">
                  3
                </span>
                Phát triển nguồn nhân lực chất lượng cao
              </h4>
              <ul className="space-y-2 ml-13 text-gray-600">
                <li>• Đào tạo kỹ năng số, AI, phân tích dữ liệu</li>
                <li>• Nâng cao trình độ khoa học - công nghệ</li>
                <li>• Thu hút và giữ chân nhân tài công nghệ</li>
                <li>• Xây dựng văn hóa đổi mới sáng tạo</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'objectives',
      label: 'Mục tiêu',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-ocean-50 to-ocean-100 p-6 rounded-lg border border-ocean-200">
            <h4 className="text-lg font-semibold text-ocean-900 mb-4">🎯 Mục tiêu tổng quát</h4>
            <p className="text-gray-700 leading-relaxed">
              Đến năm 2030, Việt Nam trở thành nước đang phát triển có công nghiệp, hiện đại, 
              đi từ nông thôn lên thành thị; đến năm 2045 trở thành nước phát triển, 
              thu nhập cao theo định hướng xã hội chủ nghĩa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-3">📈 Kinh tế</h5>
              <ul className="space-y-2 text-gray-600">
                <li>• Tốc độ tăng trưởng GDP 6.5-7%/năm</li>
                <li>• Tỷ trọng công nghiệp - dịch vụ {'>'}85%</li>
                <li>• Nền kinh tế số chiếm 30% GDP</li>
                <li>• Chủ động tham gia cuộc CMCN 4.0</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-3">👥 Xã hội</h5>
              <ul className="space-y-2 text-gray-600">
                <li>• Giảm bất bình đẳng, xóa đói giảm nghèo</li>
                <li>• 80% lao động qua đào tạo</li>
                <li>• Phủ quỹ internet vùng sâu vùng xa</li>
                <li>• Nâng cao chất lượng cuộc sống người dân</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
            <h5 className="font-semibold text-yellow-900 mb-3">⚠️ Thách thức từ đứt gãy công nghệ</h5>
            <p className="text-gray-700">
              Các mục tiêu này sẽ gặp thách thức lớn từ "đứt gãy công nghệ" - nguy cơ Việt Nam bị bỏ lại phía sau 
              với khoảng cách ngày càng lớn so với các nước phát triển. Cần có giải pháp đột phá để 
              rút ngắn khoảng cách công nghệ.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="theory" className="section bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lăng kính <span className="text-gradient">Kinh tế Chính trị Mác – Lênin</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Những vấn đề thực tiễn trên được soi chiếu như thế nào qua lý luận? 
              Đây là nền tảng tư duy để chúng ta giải quyết vấn đề "đứt gãy công nghệ".
            </p>
          </div>

          {/* Tabs Component */}
          <Tabs tabs={theoryTabs} defaultTab="concept" />
        </motion.div>
      </div>
    </section>
  )
}

export default TheorySection
