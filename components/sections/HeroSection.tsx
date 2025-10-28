'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [showQuestion, setShowQuestion] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestion(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-700 via-ocean-600 to-ocean-500">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0djItSDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINGg2eiIvPjwvZz48L2c+PC9zdmc+')]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Animated hero title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            ĐỨT GÃY
            <br />
            <span className="bg-gradient-to-r from-ocean-300 to-ocean-400 bg-clip-text text-transparent">CÔNG NGHỆ</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Và Con Đường
            <br />
            <span className="font-semibold text-white">Công Nghiệp Hóa, Hiện Đại Hóa tại Việt Nam</span>
          </motion.h2>
        </motion.div>

        {/* Knowledge Question - appears after 2 seconds */}
        {showQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl md:text-2xl font-medium mb-4">
                <span className="text-yellow-400">✨</span> Câu hỏi kiến tạo
              </h3>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed italic">
                "Cách mạng 4.0 mở ra cơ hội, nhưng cũng đào sâu khoảng cách. 
                Việt Nam sẽ làm gì để vượt qua hố sâu công nghệ, thực hiện CNH, HĐH theo định hướng xã hội chủ nghĩa?"
              </p>
            </div>
          </motion.div>
        )}

        {/* Scroll indicator - positioned at actual bottom of section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: showQuestion ? 2 : 1 }}
          className="relative mt-24 text-center"
        >
          <motion.a
            href="#theory"
            className="text-white hover:text-ocean-300 transition-colors duration-200 inline-block"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <div className="flex flex-col items-center space-y-3">
              <span className="text-sm font-medium">Khám phá câu chuyện</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 hidden lg:block">
        <motion.div
          className="w-16 h-16 bg-ocean-500/20 rounded-full border border-ocean-400/30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="absolute bottom-1/4 right-10 hidden lg:block">
        <motion.div
          className="w-20 h-20 bg-ocean-300/20 rounded-lg border border-ocean-300/30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="absolute top-1/3 right-1/4 hidden xl:block">
        <motion.div
          className="w-12 h-12 bg-ocean-600/20 rounded-full border border-ocean-600/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>
    </section>
  )
}

export default HeroSection
