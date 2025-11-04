'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ReferencesSection = () => {
  const references = [
    {
      category: 'Giáo trình & Tài liệu học thuật',
      items: [
        {
          title: 'Giáo trình Kinh tế Chính trị Mác - Lênin',
          author: 'NXB Chính trị Quốc gia Sự thật',
          year: 2023,
          type: 'Sách giáo trình'
        },
        {
          title: 'Tư bản - Tập I',
          author: 'Karl Marx',
          year: 1867,
          type: 'Tác phẩm kinh điển'
        },
        {
          title: 'Chiến lược Công nghiệp hóa, Hiện đại hóa đất nước đến năm 2030',
          author: 'Chính phủ Việt Nam',
          year: 2024,
          type: 'Văn kiện chính thức'
        }
      ]
    },
    {
      category: 'Báo cáo nghiên cứu quốc tế',
      items: [
        {
          title: 'The future of productivity: Seven technologies that will drive growth',
          author: 'McKinsey Global Institute',
          year: 2024,
          type: 'Báo cáo nghiên cứu'
        },
        {
          title: 'e-Conomy SEA Report 2024: Through the waves, towards a new dawn',
          author: 'Google, Temasek & Bain Company',
          year: 2024,
          type: 'Báo cáo kinh tế số'
        },
        {
          title: 'Future of Work in Viet Nam',
          author: 'International Labour Organization (ILO)',
          year: 2024,
          type: 'Báo cáo lao động'
        }
      ]
    },
    {
      category: 'Báo cáo & Thống kê trong nước',
      items: [
        {
          title: 'Báo cáo Chuyển đổi số doanh nghiệp Việt Nam 2024',
          author: 'Cục Tin học hóa - Bộ Thông tin và Truyền thông',
          year: 2024,
          type: 'Báo cáo chính phủ'
        },
        {
          title: 'Chương trình Chuyển đổi số Nông nghiệp Việt Nam',
          author: 'Bộ Nông nghiệp và Phát triển Nông thôn',
          year: 2024,
          type: 'Chương trình quốc gia'
        },
        {
          title: 'Báo cáo tình hình ngành Dệt may Việt Nam',
          author: 'Hiệp hội Dệt may Việt Nam (VITAS)',
          year: 2024,
          type: 'Báo cáo ngành'
        }
      ]
    },
    {
      category: 'Nguồn doanh nghiệp',
      items: [
        {
          title: 'VinFast Technology Investment & Innovation Strategy',
          author: 'VinFast Press Release',
          year: 2024,
          type: 'Thông cáo báo chí'
        }
      ]
    }
  ]

  return (
    <section id="references" className="section bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nguồn tham khảo
            </h2>
            <p className="text-xl text-gray-600">
              Tất cả thông tin và số liệu được trích dẫn từ các nguồn uy tín
            </p>
          </div>

          {/* References List */}
          <div className="space-y-8">
            {references.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {idx + 1}
                  </span>
                  {category.category}
                </h3>
                <div className="space-y-3 ml-11">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="border-l-2 border-gray-200 pl-4 py-2 hover:border-ocean-600 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.author} ({item.year})
                          </p>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded ml-4 whitespace-nowrap">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lưu ý về nguồn dữ liệu
            </h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tất cả số liệu thống kê được cập nhật đến cuối năm 2024</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Một số dự báo và ước tính dựa trên xu hướng và mô hình phân tích</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Nội dung học thuật tuân thủ nghiêm ngặt giáo trình Kinh tế Chính trị Mác - Lênin</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Thông tin doanh nghiệp được trích từ báo cáo công khai và thông cáo chính thức</span>
              </li>
            </ul>
          </motion.div>

          {/* Citation Style Note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              📖 Hệ thống trích dẫn: APA Style (American Psychological Association)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReferencesSection
