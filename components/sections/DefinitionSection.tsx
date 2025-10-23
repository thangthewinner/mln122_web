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
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                {/* Placeholder for AI-generated infographic */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-3">
                    Visual Data Gap
                  </h4>
                  <p className="text-gray-600 max-w-xs mx-auto">
                    [Infographic sẽ được tạo bởi AI để minh họa khoảng cách công nghệ]
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
