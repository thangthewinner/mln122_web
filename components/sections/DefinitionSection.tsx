'use client'

import React from 'react'
import { motion } from 'framer-motion'

const DefinitionSection = () => {
  return (
    <section id="definition" className="section bg-white">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">"Đứt gãy công nghệ"</span>
            </h2>
            <p className="text-2xl font-medium text-gray-600">
              không chỉ là khoảng cách.
            </p>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Text Content */}
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  Đó là sự chênh lệch đột ngột
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  về <strong className="text-primary-600">khả năng tiếp cận</strong>, 
                  <strong className="text-primary-600"> ứng dụng</strong> và 
                  <strong className="text-primary-600"> đổi mới</strong> công nghệ.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Qua các quốc gia
                    </h4>
                    <p className="text-gray-600">
                      Phát triển vs đang phát triển, tiếp cận công nghệ tiên tiến
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Qua các doanh nghiệp
                    </h4>
                    <p className="text-gray-600">
                      Doanh nghiệp lớn vs SME, khả năng đầu tư công nghệ cao
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Qua các vùng miền
                    </h4>
                    <p className="text-gray-600">
                      Thành thị vs nông thôn, khả năng tiếp cận hạ tầng số và giáo dục
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Message */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                <p className="text-lg font-medium text-orange-900 leading-relaxed">
                  Nó không chỉ là "chậm hơn", mà là <strong>"bị bỏ lại phía sau"</strong> trong cuộc đua phát triển.
                </p>
              </div>
            </div>

            {/* Visual/Infographic */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 min-h-[400px] border-2 border-blue-100">
                {/* Tech Gap Visualization */}
                <div className="space-y-6">
                  <h4 className="text-center text-xl font-bold text-gray-800 mb-6">
                    Khoảng Cách Công Nghệ
                  </h4>
                  
                  {/* Gap 1: Innovation Index - Based on GII 2024 */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-semibold">Singapore (Top ASEAN)</span>
                      <span className="text-green-600 font-bold">64.7</span>
                    </div>
                    <div className="h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                      <span className="font-semibold">Việt Nam (GII 2024)</span>
                      <span className="text-orange-600 font-bold">36.2</span>
                    </div>
                    <div className="h-8 bg-gray-200 rounded-full relative overflow-hidden">
                      <div className="h-full w-[56%] bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative">
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                        ⚠️ Chênh lệch 44%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Nguồn: Global Innovation Index 2024, WIPO
                    </p>
                  </div>

                  {/* Gap Illustration */}
                  <div className="relative py-6">
                    <div className="absolute left-0 top-1/2 w-full h-px bg-gray-300"></div>
                    <div className="relative flex justify-between items-center">
                      <div className="bg-green-500 text-white p-3 rounded-lg shadow-lg transform -rotate-3">
                        <div className="text-center">
                          <div className="text-2xl mb-1">🚀</div>
                          <div className="text-xs font-bold">AI, IoT</div>
                        </div>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center">
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-24 h-6 text-red-500" viewBox="0 0 100 20">
                            <defs>
                              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                              </marker>
                            </defs>
                            <line x1="5" y1="10" x2="85" y2="10" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                            <text x="50" y="8" fontSize="8" fill="currentColor" textAnchor="middle" fontWeight="bold">GAP</text>
                          </svg>
                        </motion.div>
                      </div>
                      
                      <div className="bg-orange-500 text-white p-3 rounded-lg shadow-lg transform rotate-3">
                        <div className="text-center">
                          <div className="text-2xl mb-1">🏭</div>
                          <div className="text-xs font-bold">Cơ bản</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats - Real data */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600">#44</div>
                      <div className="text-xs text-gray-600 mt-1">GII Rank</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-200">
                      <div className="text-2xl font-bold text-purple-600">#71</div>
                      <div className="text-xs text-gray-600 mt-1">E-Gov</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-200">
                      <div className="text-2xl font-bold text-orange-600">#2</div>
                      <div className="text-xs text-gray-600 mt-1">Thu nhập TB</div>
                    </div>
                  </div>

                  <p className="text-center text-xs text-gray-500 italic mt-3">
                    GII 2024 (WIPO), UN E-Gov 2024, Lower-middle income group
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-lg border-2 border-primary-300 flex items-center justify-center"
              >
                <span className="text-2xl">🔧</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-100 rounded-full border-2 border-accent-300 flex items-center justify-center"
              >
                <span className="text-xl">📱</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
              <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium italic">
                "Trong kỷ nguyên số, <span className="text-gradient font-bold">đứt gãy công nghệ</span> 
                là thách thức lớn nhất đối với quá trình công nghiệp hóa, hiện đại hóa của Việt Nam."
              </blockquote>
              <p className="text-lg text-gray-600 mt-4">
                — Lăng cảnh Kinh tế Chính trị Mác – Lênin
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DefinitionSection
