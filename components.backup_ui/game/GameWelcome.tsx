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
          Nhiệm vụ: Xây dựng đất nước tiến lên công nghiệp hóa, hiện đại hóa trong 20 năm.
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
                <p className="text-gray-600">
                  Đưa Việt Nam trở thành quốc gia phát triển đến năm 2045 thông qua 4 giai đoạn:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>💰 <strong>Giai đoạn 1:</strong> Phân bổ ngân sách hậu COVID</li>
                  <li>🚀 <strong>Giai đoạn 2:</strong> Lựa chọn công nghệ chiến lược</li>
                  <li>📡 <strong>Giai đoạn 3:</strong> Kết nối mạng toàn quốc</li>
                  <li>⚖️ <strong>Giai đoạn 4:</strong> Cân bằng phát triển bền vững</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">📊 Theo dõi chỉ số</h4>
                <div className="space-y-2 text-gray-600">
                  <div>📈 <strong>Kinh tế:</strong> Tăng trưởng GDP và thịnh vượng</div>
                  <div>👥 <strong>Xã hội:</strong> Phúc lợi và hạnh phúc người dân</div>
                  <div>🔬 <strong>Công nghệ:</strong> Mức độ tự chủ và đổi mới</div>
                  <div>🌱 <strong>Môi trường:</strong> Bảo vệ và phát triển bền vững</div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">🎮 Cách chơi</h4>
                <p className="text-gray-600">
                  Mỗi giai đoạn, bạn sẽ đối mặt với một mini-game khác nhau. Đưa ra quyết định
                  chiến lược và quan sát tác động lên 4 chỉ số. Mục tiêu là duy trì cân bằng và
                  phát triển bền vững.
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
