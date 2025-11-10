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
              Cách mạng <span className="whitespace-nowrap">4.0</span> tạo ra cơ hội chưa từng có, nhưng cũng đào sâu khoảng cách giữa các{' '}
              <span className="whitespace-nowrap">nhóm xã hội</span>
            </p>
          </div>

          {/* Theoretical Analysis Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 md:p-10 border-2 border-indigo-200 shadow-xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2">
                Phân tích theo Mác – Lênin và thực tiễn Việt Nam
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tác động tích cực */}
              <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg">
                <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✅</span> Tác động tích cực
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Tăng năng suất, giảm chi phí sản xuất.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Thúc đẩy đổi mới mô hình tăng trưởng.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Cơ hội phát triển kinh tế số, thương mại điện tử, AI, IoT.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Giúp Việt Nam rút ngắn khoảng cách phát triển với các nước tiên tiến.</span>
                  </li>
                </ul>
              </div>

              {/* Tác động tiêu cực */}
              <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-lg">
                <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚠️</span> Tác động tiêu cực
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    <span>Gia tăng khoảng cách giàu – nghèo, giữa đô thị và nông thôn.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    <span>Doanh nghiệp nhỏ dễ bị "tụt hậu công nghệ".</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    <span>Nguy cơ mất việc làm do tự động hóa.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    <span>Phụ thuộc công nghệ nước ngoài nếu thiếu năng lực sáng tạo nội địa.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

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
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-green-100 hover:border-green-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-green-50/50 via-transparent to-emerald-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-green-500 to-emerald-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  
                  <div className="relative z-10 text-center">
                    <h4 className="text-xl font-bold text-green-700 mb-6">
                      Năng suất lao động tăng vọt
                    </h4>
                    
                    {/* Enhanced counter */}
                    <div className="py-6 mb-4">
                      <Counter
                        end={150}
                        prefix="+"
                        suffix="%"
                        duration={2500}
                        className="text-6xl font-black tracking-tight leading-tight
                          bg-gradient-to-br from-green-600 via-green-500 to-emerald-600
                          bg-clip-text text-transparent"
                        startDelay={500}
                      />
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Nhờ tự động hóa và ứng dụng công nghệ trong{' '}
                      <span className="whitespace-nowrap">sản xuất</span>
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Nguồn: McKinsey Global Institute, 2024
                    </p>
                  </div>
                </motion.div>

                {/* Digital Economy */}
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-green-100 hover:border-green-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-green-50/50 via-transparent to-emerald-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-green-500 to-emerald-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  
                  <div className="relative z-10 text-center">
                    <h4 className="text-xl font-bold text-green-700 mb-6">
                      Quy mô kinh tế số
                    </h4>
                    
                    <div className="py-6 mb-4">
                      <Counter
                        end={45}
                        prefix="$ "
                        suffix=" tỷ USD"
                        duration={2500}
                        className="text-5xl font-black tracking-tight leading-tight
                          bg-gradient-to-br from-green-600 via-green-500 to-emerald-600
                          bg-clip-text text-transparent"
                        startDelay={1000}
                      />
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Ước tính quy mô kinh tế số Việt Nam năm 2025
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Nguồn: Google, Temasek & Bain - e-Conomy SEA Report 2024
                    </p>
                  </div>
                </motion.div>

                {/* Fintech Adoption */}
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-green-100 hover:border-green-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-green-50/50 via-transparent to-emerald-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-green-500 to-emerald-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  
                  <div className="relative z-10 text-center">
                    <h4 className="text-xl font-bold text-green-700 mb-6">
                      Fintech - Thanh toán số
                    </h4>
                    
                    <div className="py-6 mb-4">
                      <Counter
                        end={80}
                        suffix="%"
                        duration={2500}
                        className="text-6xl font-black tracking-tight leading-tight
                          bg-gradient-to-br from-green-600 via-green-500 to-emerald-600
                          bg-clip-text text-transparent"
                        startDelay={1500}
                      />
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Dân số sử dụng thanh toán không dùng tiền mặt
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Nguồn: Ngân hàng Nhà nước Việt Nam, 2024
                    </p>
                  </div>
                </motion.div>

                {/* Innovation Benefits */}
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-green-100 hover:border-green-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-green-50/50 via-transparent to-emerald-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-green-500 to-emerald-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 bg-gradient-to-br 
                          from-green-400 to-green-600 rounded-2xl blur-lg 
                          opacity-40 group-hover:opacity-60 transition-opacity" />
                        <div className="relative w-full h-full bg-gradient-to-br 
                          from-green-500 to-green-600 rounded-2xl
                          flex items-center justify-center text-3xl
                          transform group-hover:rotate-12 transition-transform duration-300">
                          💡
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-green-700 mb-2">
                        Thúc đẩy đổi mới sáng tạo
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Kiến tạo mô hình kinh tế tri thức dựa trên AI, IoT, Big Data
                      </p>
                    </div>
                  </div>
                </motion.div>
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
                {/* Job Displacement */}
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-red-100 hover:border-red-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-red-50/50 via-transparent to-orange-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-red-500 to-orange-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  
                  <div className="relative z-10 text-center">
                    <h4 className="text-xl font-bold text-red-700 mb-6">
                      Nguy cơ mất việc làm
                    </h4>
                    
                    <div className="py-6 mb-4">
                      <Counter
                        end={1.2}
                        prefix=""
                        suffix=" triệu"
                        duration={2500}
                        className="text-5xl font-black tracking-tight leading-tight
                          bg-gradient-to-br from-red-600 via-red-500 to-orange-600
                          bg-clip-text text-transparent"
                        startDelay={1200}
                      />
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Lao động kỹ năng thấp đối mặt nguy cơ bị thay thế
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Nguồn: ILO - Tương lai việc làm tại Việt Nam, 2024
                    </p>
                  </div>
                </motion.div>

                {/* Technology Localization */}
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-red-100 hover:border-red-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-red-50/50 via-transparent to-orange-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-red-500 to-orange-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  <div className="relative z-10 text-center">
                    <h4 className="text-xl font-bold text-red-700 mb-6">
                      Tỷ lệ nội địa hóa công nghệ thấp
                    </h4>
                    <div className="py-6 mb-4">
                      <Counter
                        end={10}
                        suffix="%"
                        duration={2500}
                        className="text-6xl font-black tracking-tight leading-tight
                          bg-gradient-to-br from-red-600 via-red-500 to-orange-600
                          bg-clip-text text-transparent"
                        startDelay={1600}
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Tỷ lệ nội địa hóa trong công nghiệp{' '}
                      <span className="whitespace-nowrap">chế tạo và điện tử</span>
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Nguồn: Báo Đại Đoàn Kết & Báo Đầu Tư, 2024
                    </p>
                  </div>
                </motion.div>

                {/* Digital Skills Gap */}
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-red-100 hover:border-red-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-red-50/50 via-transparent to-orange-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-red-500 to-orange-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  <div className="relative z-10 text-center">
                    <h4 className="text-xl font-bold text-red-700 mb-6">
                      Khoảng cách kỹ năng số
                    </h4>
                    <div className="py-6 mb-4">
                      <Counter
                        end={70}
                        suffix="%"
                        duration={2500}
                        className="text-6xl font-black tracking-tight leading-tight
                          bg-gradient-to-br from-red-600 via-red-500 to-orange-600
                          bg-clip-text text-transparent"
                        startDelay={2000}
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Lực lượng lao động thiếu đào tạo{' '}
                      <span className="whitespace-nowrap">kỹ năng số</span>
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Nguồn: Lexica News & Bộ TT&TT, 2024
                    </p>
                  </div>
                </motion.div>

                {/* Digital Divide */}
                <motion.div 
                  className="relative bg-white rounded-2xl p-8 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2
                    border border-red-100 hover:border-red-200
                    group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br 
                    from-red-50/50 via-transparent to-orange-50/50
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-red-500 to-orange-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left" />
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 bg-gradient-to-br 
                          from-red-400 to-red-600 rounded-2xl blur-lg 
                          opacity-40 group-hover:opacity-60 transition-opacity" />
                        <div className="relative w-full h-full bg-gradient-to-br 
                          from-red-500 to-red-600 rounded-2xl
                          flex items-center justify-center text-3xl
                          transform group-hover:rotate-12 transition-transform duration-300">
                          📊
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-red-700 mb-2">
                        Gia tăng bất bình đẳng
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Khoảng cách giàu nghèo và phụ thuộc công nghệ nước ngoài
                      </p>
                    </div>
                  </div>
                </motion.div>
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
                "Thách thức lớn nhất của Việt Nam là{' '}
                <span className="font-bold text-ocean-700">rút ngắn khoảng cách công nghệ</span>{' '}
                để biến cơ hội thành lợi thế cạnh tranh trong{' '}
                <span className="whitespace-nowrap">kỷ nguyên 4.0</span>"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection
