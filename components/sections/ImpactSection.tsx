'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Counter from '@/components/ui/Counter'

const ImpactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0 
    },
  }

  return (
    <section id="impact" className="section bg-gradient-to-br from-gray-50 to-gray-100">
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
              Một cuộc cách mạng, <span className="text-gradient">hai thế giới</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Cách mạng 4.0 tạo ra cơ hội chưa từng có, nhưng cũng đào sâu khoảng cách giữa các nhóm xã hội
            </p>
          </div>

          {/* Impact Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Positive Impact Column */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-10 border border-green-200 shadow-lg"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-800">
                  Tích cực
                </h3>
                <p className="text-green-600 mt-2">Cơ hội "Đi tắt đón đầu"</p>
              </div>

              <div className="space-y-8">
                {/* Productivity Growth */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-green-700 mb-4">
                      Năng suất lao động tăng vọt
                    </h4>
                    <Counter
                      end={150}
                      prefix="+"
                      suffix="%"
                      duration={2500}
                      className="text-green-600 text-gradient"
                      startDelay={500}
                    />
                    <p className="text-gray-600 mt-4">
                      Nhờ tự động hóa và ứng dụng công nghệ trong sản xuất
                    </p>
                  </div>
                </div>

                {/* Digital Economy */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-green-700 mb-4">
                      Quy mô kinh tế số
                    </h4>
                    <Counter
                      end={45}
                      prefix="$ "
                      suffix=" tỷ USD"
                      duration={3000}
                      className="text-green-600 text-gradient"
                      startDelay={1000}
                    />
                    <p className="text-gray-600 mt-4">
                      Ước tính quy mô kinh tế số Việt Nam năm 2025
                    </p>
                  </div>
                </div>

                {/* Innovation Benefits */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                        💡
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-700">
                        Thúc đẩy đổi mới sáng tạo
                      </h4>
                      <p className="text-gray-600">
                        Kiến tạo mô hình kinh tế tri thức dựa trên AI, IoT, Big Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Negative Impact Column */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-red-200 shadow-lg"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📉</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-800">
                  Tiêu cực
                </h3>
                <p className="text-red-600 mt-2">Nguy cơ "Tụt hậu" và Bất bình đẳng</p>
              </div>

              <div className="space-y-8">
                {/* SME Exclusion */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-red-700 mb-4">
                      Doanh nghiệp SME thiếu vốn
                    </h4>
                    <Counter
                      end={70}
                      suffix="%"
                      duration={2000}
                      className="text-red-600"
                      startDelay={800}
                    />
                    <p className="text-gray-600 mt-4">
                      Doanh nghiệp vừa và nhỏ đứng ngoài cuộc chơi số
                    </p>
                  </div>
                </div>

                {/* Job Displacement */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-red-700 mb-4">
                      Nguy cơ mất việc làm
                    </h4>
                    <Counter
                      end={1.2}
                      prefix=""
                      suffix=" triệu"
                      duration={2800}
                      className="text-red-600"
                      startDelay={1200}
                    />
                    <p className="text-gray-600 mt-4">
                      Lao động kỹ năng thấp đối mặt nguy cơ bị thay thế
                    </p>
                  </div>
                </div>

                {/* Digital Divide */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                        📊
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-700">
                        Gia tăng bất bình đẳng
                      </h4>
                      <p className="text-gray-600">
                        Khoảng cách giàu nghèo và phụ thuộc công nghệ nước ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                "Thách thức lớn nhất của Việt Nam là <span className="font-bold text-primary-600">rút ngắn khoảng cách công nghệ</span> 
                để biến cơ hội thành lợi thế cạnh tranh trong kỷ nguyên 4.0"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection
