import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TheorySection from '@/components/sections/TheorySection'
import DefinitionSection from '@/components/sections/DefinitionSection'
import ImpactSection from '@/components/sections/ImpactSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import SolutionsSection from '@/components/sections/SolutionsSection'
import GameSection from '@/components/sections/GameSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16">
        {/* Mục 1: Trang chủ (Hero Section) */}
        <HeroSection />
        
        {/* Mục 2: Lý luận (Theory Hub) */}
        <TheorySection />
        
        {/* Mục 3: Đứt gãy là gì? */}
        <DefinitionSection />

        {/* Mục 4: Tác động hai mặt */}
        <ImpactSection />

        {/* Mục 5: Thực trạng Việt Nam */}
        <CaseStudiesSection />

        {/* Mục 6: Giải pháp */}
        <SolutionsSection />

        {/* Mục 7: Tương tác (Game) */}
        <GameSection />

        {/* AI Appendix Section */}
        <section id="ai-appendix" className="section bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="section-container max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Phụ lục AI - Cam kết Minh bạch
              </h2>
              
              <div className="space-y-6">
                {/* Transparency */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    🔍 Minh bạch (Transparency)
                  </h3>
                  <p className="text-blue-800">
                    Toàn bộ nội dung được hỗ trợ bởi AI (ChatGPT 4.0) với sự giám sát và chỉnh sửa của con người. 
                    Công cụ AI được sử dụng để tạo dự thảo ban đầu, sau đó được đội ngũ xem xét và chỉnh sửa kỹ lưỡng.
                  </p>
                </div>

                {/* Responsibility */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    ⚖️ Trách nhiệm (Responsibility)
                  </h3>
                  <p className="text-green-800">
                    Con người chịu trách nhiệm cuối cùng về tính chính xác và học thuật của nội dung. 
                    Mọi thông tin được đối chiếu với tài liệu giáo trình và các nguồn học thuật uy tín.
                  </p>
                </div>

                {/* Creativity */}
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    🎨 Sáng tạo (Creativity)
                  </h3>
                  <p className="text-purple-800">
                    AI hỗ trợ trong việc tạo ra các ý tưởng sáng tạo về hình thức trình bày, 
                    animation, và tương tác, nhưng nội dung cốt lõi được phát triển bởi con người.
                  </p>
                </div>

                {/* Integrity */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">
                    🤝 Liêm chính (Integrity)
                  </h3>
                  <p className="text-orange-800">
                    Không có nội dung AI nào được sử dụng mà không có sự xem xét và chỉnh sửa của con người. 
                    Mọi nguồn trích dẫn được ghi rõ ràng và tuân thủ chuẩn học thuật.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center text-gray-600">
                <p className="text-sm">
                  <strong>Nhóm MLN122</strong> cam kết tuân thủ các nguyên tắc sử dụng AI có trách nhiệm 
                  trong môi trường học thuật.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer includes Conclusion */}
      <Footer />
    </main>
  )
}
