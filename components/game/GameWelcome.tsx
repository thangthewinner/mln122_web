'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';

interface GameWelcomeProps {
  onStartGame: () => void;
}

export default function GameWelcome({ onStartGame }: GameWelcomeProps) {
  const { startNewGame, loadGame, achievements } = useGame();
  const [hasSavedGame, setHasSavedGame] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vietnam2045_save');
    setHasSavedGame(!!saved);
  }, []);

  const handleNewGame = () => {
    startNewGame();
    onStartGame();
  };

  const handleContinue = () => {
    loadGame();
    onStartGame();
  };

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="text-8xl mb-4 animate-bounce">🇻🇳</div>
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
          VIỆT NAM 2045
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
          Cuộc đua vượt đứt gãy công nghệ
        </h2>
        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
          v2.0 Enhanced
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Bạn là Thủ tướng trẻ của Việt Nam năm 2025.
        <br />
        <span className="font-semibold text-gray-800">
          Nhiệm vụ: Xây dựng đất nước tiến lên công nghiệp hóa, hiện đại hóa trong{' '}
          <span className="whitespace-nowrap">20 năm</span>.
        </span>
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4 mb-12"
      >
        <button
          onClick={handleNewGame}
          className="w-full max-w-md mx-auto block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
        >
          <span className="text-2xl mr-2">🚀</span> Trò chơi mới
        </button>

        {hasSavedGame && (
          <button
            onClick={handleContinue}
            className="w-full max-w-md mx-auto block bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="text-2xl mr-2">📂</span> Tiếp tục
          </button>
        )}

        <button
          onClick={() => setShowTutorial(true)}
          className="w-full max-w-md mx-auto block bg-white text-gray-700 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-md border-2 border-gray-200"
        >
          <span className="text-2xl mr-2">📚</span> Hướng dẫn
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-2xl p-6 shadow-xl max-w-2xl mx-auto"
      >
        <h4 className="text-xl font-bold text-gray-800 mb-4">
          🏆 Thành tựu đã mở khóa: {unlockedCount}/12
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {achievements.slice(0, 8).map((achievement) => (
            <div
              key={achievement.id}
              className={`text-4xl transition-all duration-300 ${
                achievement.unlocked
                  ? 'opacity-100 scale-110 hover:scale-125'
                  : 'opacity-30 grayscale'
              }`}
              title={achievement.name}
            >
              {achievement.icon}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">📚 Hướng dẫn chơi</h3>

            <div className="space-y-6 text-left">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">🎯 Mục tiêu game</h4>
                <p className="text-gray-600 mb-3">
                  Biến Việt Nam thành <strong>quốc gia phát triển, sáng tạo vì con người</strong> đến năm 2045.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-3">
                  <p className="text-sm text-blue-800 italic">
                    "Công nghệ chỉ là công cụ, con người mới là động lực"
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Thông điệp:</strong> Công nghiệp hóa vì con người – Sáng tạo vì tương lai
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">🕹️ Cơ chế game</h4>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mb-2">
                  <p className="text-sm text-yellow-800">
                    <strong>Không có trắc nghiệm!</strong> Thay vào đó:
                  </p>
                </div>
                <ul className="mt-2 space-y-2 text-gray-600 text-sm">
                  <li>✅ Bạn <strong>chọn chính sách</strong> dựa trên tình huống</li>
                  <li>✅ <strong>Quan sát hệ quả</strong> qua 4 chỉ số</li>
                  <li>✅ <strong>Rút bài học</strong> từ quyết định của mình</li>
                  <li>✅ Học cách cân bằng phát triển bền vững</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">🗓️ 4 Giai đoạn phát triển</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-400 pl-3">
                    <h5 className="font-semibold text-gray-800">💰 Giai đoạn 1 (2025-2030): Hậu COVID</h5>
                    <p className="text-sm text-gray-600">
                      Kinh tế khó khăn, công nghệ thay đổi nhanh. <strong>Cân bằng tăng trưởng và bảo vệ lao động.</strong>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-400 pl-3">
                    <h5 className="font-semibold text-gray-800">🚀 Giai đoạn 2 (2030-2035): Bùng nổ công nghệ</h5>
                    <p className="text-sm text-gray-600">
                      AI, IoT, xe điện bùng nổ. <strong>Lựa chọn tự chủ hay lệ thuộc công nghệ?</strong>
                    </p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-3">
                    <h5 className="font-semibold text-gray-800">📡 Giai đoạn 3 (2035-2040): Khoảng cách số</h5>
                    <p className="text-sm text-gray-600">
                      Chênh lệch đô thị - nông thôn gia tăng. <strong>Đưa nông thôn vào kỷ nguyên số.</strong>
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-3">
                    <h5 className="font-semibold text-gray-800">⚖️ Giai đoạn 4 (2040-2045): Thử thách 2045</h5>
                    <p className="text-sm text-gray-600">
                      Việt Nam tiến gần mục tiêu. <strong>Phát triển bền vững là chìa khóa.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">📊 4 Chỉ số theo dõi</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">📈</span>
                    <div>
                      <strong className="text-gray-800">Kinh tế:</strong>
                      <span className="text-gray-600"> Tăng trưởng GDP, thu nhập người dân, và sức cạnh tranh quốc gia</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">👥</span>
                    <div>
                      <strong className="text-gray-800">Xã hội:</strong>
                      <span className="text-gray-600"> Phúc lợi, giáo dục, y tế, và hạnh phúc của người dân</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">🔬</span>
                    <div>
                      <strong className="text-gray-800">Công nghệ:</strong>
                      <span className="text-gray-600"> Mức độ tự chủ, đổi mới sáng tạo, và năng lực nghiên cứu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">🌱</span>
                    <div>
                      <strong className="text-gray-800">Môi trường:</strong>
                      <span className="text-gray-600"> Bảo vệ thiên nhiên, giảm ô nhiễm, và phát triển xanh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">📚 Bài học chính</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✨ Hiện đại hóa phải <strong>gắn với con người</strong></li>
                  <li>✨ Tự chủ công nghệ là <strong>yếu tố sống còn</strong></li>
                  <li>✨ Công nghệ chỉ có ý nghĩa khi <strong>phục vụ mọi người</strong></li>
                  <li>✨ Phát triển bền vững là <strong>CNH thế kỷ 21</strong></li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 text-center italic">
                  🇻🇳 "Tương lai không được lập trình sẵn – mà do con người Việt Nam viết nên."
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowTutorial(false)}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
            >
              Đã hiểu
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
