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
              <div className="bg-ocean-50 border-l-4 border-ocean-600 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-ocean-900 mb-4">
                  Đó là sự chênh lệch đột ngột
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  về <strong className="text-ocean-700">khả năng tiếp cận</strong>, 
                  <strong className="text-ocean-700"> ứng dụng</strong> và{' '}
                  <strong className="text-ocean-700">đổi mới{' '}
                  <span className="whitespace-nowrap">công nghệ</span></strong>.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center font-semibold">
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
                  <div className="flex-shrink-0 w-8 h-8 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Qua các doanh nghiệp
                    </h4>
                    <p className="text-gray-600">
                      Doanh nghiệp lớn vs SME, khả năng đầu tư{' '}
                      <span className="whitespace-nowrap">công nghệ cao</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center font-semibold">
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
                  Nó không chỉ là "chậm hơn", mà là{' '}
                  <strong className="whitespace-nowrap">"bị bỏ lại phía sau"</strong> trong cuộc đua phát triển.
                </p>
              </div>
            </div>

            {/* Visual/Infographic */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
                {/* Tech Gap Visualization */}
                <div className="space-y-5">
                  <h4 className="text-center text-lg font-bold text-gray-800 mb-4">
                    Minh Họa Khoảng Cách Công Nghệ
                  </h4>
                  
                  {/* Simple Comparison Chart */}
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
                      Chỉ số Đổi mới Sáng tạo (GII 2024)
                    </p>
                    
                    {/* Singapore Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🇸🇬</span>
                          <span className="text-sm font-medium text-gray-700">Singapore</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">64.7</span>
                      </div>
                      <div className="h-10 bg-gray-100 rounded-lg relative overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-end pr-3"
                        >
                          <span className="text-xs font-bold text-white">Hàng đầu ASEAN</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Vietnam Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🇻🇳</span>
                          <span className="text-sm font-medium text-gray-700">Việt Nam</span>
                        </div>
                        <span className="text-lg font-bold text-orange-600">36.2</span>
                      </div>
                      <div className="h-10 bg-gray-100 rounded-lg relative overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "56%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-end pr-3"
                        >
                          <span className="text-xs font-bold text-white">Hạng 44/133</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Gap Indicator */}
                    <div className="bg-red-50 rounded-lg p-3 border border-red-200 mt-4">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Khoảng cách cần thu hẹp</p>
                          <p className="text-2xl font-bold text-red-600">28.5 điểm</p>
                          <p className="text-xs text-gray-500">(tương đương 44%)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Cards */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700 text-center">
                      Vị trí của Việt Nam
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                        <div className="text-xl font-bold text-blue-600">#44</div>
                        <div className="text-xs text-gray-600 mt-1">Đổi mới toàn cầu</div>
                        <div className="text-xs text-gray-500 mt-0.5">(GII 2024)</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                        <div className="text-xl font-bold text-purple-600">#71</div>
                        <div className="text-xs text-gray-600 mt-1">Chính phủ số</div>
                        <div className="text-xs text-gray-500 mt-0.5">(UN 2024)</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                        <div className="text-xl font-bold text-green-600">#2</div>
                        <div className="text-xs text-gray-600 mt-1">Nhóm thu nhập TB</div>
                        <div className="text-xs text-gray-500 mt-0.5">(Sau Ấn Độ)</div>
                      </div>
                    </div>
                  </div>

                  {/* Source */}
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-600 text-center">
                      <span className="font-semibold">Nguồn:</span> Global Innovation Index 2024 (WIPO),{' '}
                      <span className="whitespace-nowrap">UN E-Government Survey 2024</span>
                    </p>
                  </div>
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
                className="absolute -top-4 -left-4 w-20 h-20 bg-ocean-100 rounded-lg border-2 border-ocean-300 flex items-center justify-center"
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
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-ocean-200 rounded-full border-2 border-ocean-300 flex items-center justify-center"
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
            <div className="bg-gradient-to-r from-ocean-50 to-ocean-100 rounded-2xl p-8 border border-ocean-200">
              <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium italic">
                "Trong kỷ nguyên số, <span className="text-gradient font-bold">đứt gãy{' '}
                <span className="whitespace-nowrap">công nghệ</span></span>{' '}
                là thách thức lớn nhất đối với quá trình công nghiệp hóa, hiện đại hóa của{' '}
                <span className="whitespace-nowrap">Việt Nam</span>."
              </blockquote>
              <p className="text-lg text-gray-600 mt-4">
                — Lăng cảnh Kinh tế Chính trị Mác – Lênin —
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DefinitionSection
