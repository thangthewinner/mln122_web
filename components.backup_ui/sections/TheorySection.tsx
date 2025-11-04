'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Tabs from '@/components/ui/Tabs'

const TheorySection = () => {
  const theoryTabs = [
    {
      id: 'industrial-revolution-overview',
      label: 'Khái quát cách mạng công nghiệp',
      content: (
        <div className="space-y-6">
          <div className="bg-ocean-50 border-l-4 border-ocean-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-ocean-900 mb-3">Khái niệm</h4>
            <p className="text-gray-700 leading-relaxed">
              Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất trình độ của tư liệu lao động 
              trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ trong quá trình phát triển của nhân loại 
              kéo theo sự thay đổi căn bản về phân công lao động xã hội cũng như tạo bước phát triển năng suất 
              lao động cao hơn hẳn nhờ áp dụng một cách phổ biến những tính năng mới trong kỹ thuật - công nghệ 
              đó vào đời sống xã hội.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tóm tắt các cuộc cách mạng công nghiệp</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-ocean-200">
                    <th className="py-3 px-4 font-semibold text-ocean-900">Lần</th>
                    <th className="py-3 px-4 font-semibold text-ocean-900">Đặc trưng chính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Cách mạng công nghiệp lần thứ nhất</td>
                    <td className="py-3 px-4 text-gray-600">Sử dụng năng lượng nước và hơi nước, để cơ khí hóa sản xuất</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Cách mạng công nghiệp lần thứ hai</td>
                    <td className="py-3 px-4 text-gray-600">Sử dụng năng lượng điện và động cơ điện, để tạo ra dây chuyền sản xuất hàng loạt</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Cách mạng công nghiệp lần thứ ba</td>
                    <td className="py-3 px-4 text-gray-600">Sử dụng công nghệ thông tin và máy tính, để tự động hoá sản xuất</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Cách mạng công nghiệp lần thứ tư</td>
                    <td className="py-3 px-4 text-gray-600">Liên kết giữa thế giới thực và ảo, để thực hiện công việc thông minh và hiệu quả nhất</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mt-4">
              Nguồn: <em>Nghiên cứu của Sogeti VINT, 2016.</em>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Vai trò của cách mạng công nghiệp đối với phát triển</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2">•</span>
                <span>Thúc đẩy sự phát triển của lực lượng sản xuất</span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2">•</span>
                <span>Thúc đẩy hoàn thiện quan hệ sản xuất</span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2">•</span>
                <span>Thúc đẩy đổi mới phương thức quản trị sản xuất</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'industrialization-overview',
      label: 'Khái quát công nghiệp hóa',
      content: (
        <div className="space-y-6">
          <div className="bg-ocean-50 border-l-4 border-ocean-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-ocean-900 mb-3">Khái niệm</h4>
            <p className="text-gray-700 leading-relaxed">
              Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính 
              sang nền sản xuất xã hội dựa chủ yếu trên lao động bằng máy móc nhằm tạo ra năng suất lao động xã hội cao.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Các mô hình công nghiệp hóa tiêu biểu trên thế giới</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-ocean-400 pl-4">
                <h5 className="font-medium text-gray-900 mb-2">Mô hình công nghiệp hóa cổ điển</h5>
                <p className="text-gray-600">
                  Tiêu biểu là nước Anh được thực hiện gắn liền với cuộc cách mạng công nghiệp lần thứ nhất, 
                  nổ ra vào giữa thế kỉ XVIII.
                </p>
              </div>
              
              <div className="border-l-4 border-ocean-400 pl-4">
                <h5 className="font-medium text-gray-900 mb-2">Mô hình công nghiệp hóa kiểu Liên Xô (cũ)</h5>
                <p className="text-gray-600">
                  Mô hình công nghiệp hóa tập trung, do nhà nước chủ đạo với kế hoạch hóa tập trung.
                </p>
              </div>
              
              <div className="border-l-4 border-ocean-400 pl-4">
                <h5 className="font-medium text-gray-900 mb-2">Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới (NICs)</h5>
                <p className="text-gray-600">
                  Kết hợp giữa vai trò của nhà nước và cơ chế thị trường, tập trung phát triển công nghệ và xuất khẩu.
                </p>
              </div>
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
          <div className="bg-ocean-50 border-l-4 border-ocean-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-ocean-900 mb-3">Khái niệm</h4>
            <p className="text-gray-700 leading-relaxed">
              Công nghiệp hóa, hiện đại hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh, 
              dịch vụ và quản lý kinh tế - xã hội, từ sử dụng sức lao động thủ công là chính sang sử dụng một cách phổ biến 
              sức lao động với công nghệ, phương tiện, phương pháp tiên tiến hiện đại, dựa trên sự phát triển của công nghiệp 
              và tiến bộ khoa học công nghệ, nhằm tạo ra năng suất lao động xã hội cao.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Lý do khách quan Việt Nam phải thực hiện công nghiệp hóa, hiện đại hóa bao gồm:</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Một là,</strong> lý luận và thực tiễn cho thấy, công nghiệp hóa là quy luật phổ biến của sự phát triển 
                    lực lượng sản xuất xã hội mà mọi quốc gia đều trải qua dù ở các quốc gia phát triển sớm hay các quốc gia đi sau.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-ocean-100 text-ocean-700 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Hai là,</strong> đối với các nước có nền kinh tế kém phát triển quá độ lên chủ nghĩa xã hội như nước ta, 
                    xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội phải thực hiện từ đầu thông qua công nghiệp hóa, hiện đại hóa. 
                    Mỗi bước tiến của quá trình công nghiệp hóa, hiện đại hóa là một bước tăng cường cơ sở vật chất - kỹ thuật cho 
                    chủ nghĩa xã hội, phát triển mạnh mẽ lực lượng sản xuất và góp phần hoàn thiện quan hệ sản xuất xã hội chủ nghĩa, 
                    trên cơ sở đó từng bước nâng dần trình độ văn minh của xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Công nghiệp hoá, hiện đại hóa ở Việt Nam có những đặc điểm chủ yếu sau đây:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Công nghiệp hóa, hiện đại hoá theo định hướng xã hội chủ nghĩa, thực hiện mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Công nghiệp hóa, hiện đại hoá gắn với phát triển kinh tế tri thức.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Công nghiệp hoá, hiện đại hóa trong điều kiện kinh tế thị trường định hướng xã hội chủ nghĩa.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Công nghiệp hoá, hiện đại hóa trong bối cảnh toàn cầu hóa kinh tế và Việt Nam đang tích cực, chủ động hội nhập kinh tế quốc tế.
                </span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'content',
      label: 'Nội dung',
      content: (
        <div className="space-y-6">
          <div className="bg-ocean-50 border-l-4 border-ocean-700 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Một là,</strong> tạo lập những điều kiện để có thể thực hiện chuyển đổi từ nền sản xuất - xã hội 
              lạc hậu sang nền sản xuất - xã hội tiến bộ.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Hai là,</strong> thực hiện các nhiệm vụ để chuyển đổi nền sản xuất - xã hội lạc hậu sang nền sản xuất - xã hội hiện đại.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Các nhiệm vụ chủ yếu:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Đẩy mạnh ứng dụng những thành tựu khoa học, công nghệ mới, hiện đại
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Chuyển đổi cơ cấu kinh tế theo hướng hiện đại, hợp lý, hiệu quả
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Từng bước hoàn thiện quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ocean-600 mr-2 font-bold">•</span>
                <span className="leading-relaxed">
                  Sẵn sàng thích ứng với tác động của bối cảnh cách mạng công nghiệp lần thứ 4{' '}
                  <span className="whitespace-nowrap">(4.0)</span>
                </span>
              </li>
            </ul>
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
              Lăng kính{' '}
              <span className="text-gradient">
                Kinh tế Chính trị{' '}
                <span className="whitespace-nowrap">Mác – Lênin</span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Những vấn đề thực tiễn trên được soi chiếu như thế nào qua lý luận? 
              Đây là nền tảng tư duy để chúng ta giải quyết vấn đề "đứt gãy công nghệ".
            </p>
          </div>

          {/* Tabs Component */}
          <Tabs tabs={theoryTabs} defaultTab="industrial-revolution-overview" />
        </motion.div>
      </div>
    </section>
  )
}

export default TheorySection
