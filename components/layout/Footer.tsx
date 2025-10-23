'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="conclusion" className="bg-gray-900 text-white py-16">
      <div className="section-container">
        <div className="text-center space-y-8">
          {/* Main Conclusion Message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Công nghiệp hóa không phải là "máy móc hóa".
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gradient">
              Công nghiệp hóa là <span className="text-secondary-400">VÌ CON NGƯỜI</span>,
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gradient">
              lấy <span className="text-primary-400">ĐỔI MỚI SÁNG TẠO</span> làm động lực.
            </h1>
          </div>

          {/* Final Message */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              "Rút ngắn khoảng cách công nghệ chính là chìa khóa để Việt Nam tiến nhanh và bền vững trên con đường xã hội chủ nghĩa."
            </p>
          </div>

          {/* AI Appendix Link */}
          <div className="pt-8 border-t border-gray-700">
            <Link
              href="#ai-appendix"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cam kết Liêm chính & Phụ lục AI Usage
            </Link>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-gray-400">
            <p>© 2025 | Dự án học phần Kinh tế Chính trị Mác – Lênin | Thực hiện bởi: NHÓM MLN122</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
