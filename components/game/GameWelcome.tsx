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
  const [tutorialTab, setTutorialTab] = useState<'guide' | 'achievements'>('guide');

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
        <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
          🏆 Thành tựu: {unlockedCount}/12
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {achievements.slice(0, 8).map((achievement) => (
            <div
              key={achievement.id}
              className={`text-center transition-all duration-300 ${
                achievement.unlocked
                  ? 'opacity-100 scale-110'
                  : 'opacity-30 grayscale hover:opacity-60'
              }`}
              title={achievement.name}
            >
              <div className="text-5xl">{achievement.icon}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center mt-4">
          Hoàn thành game để mở khóa thành tựu!
        </p>
      </motion.div>

      {/* Tutorial Modal */}
      {showTutorial && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowTutorial(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📚 Hướng dẫn chơi</h3>

            {/* Tabs */}
            <div className="flex gap-2 mb-4 border-b">
              <button
                onClick={() => setTutorialTab('guide')}
                className={`px-4 py-2 font-semibold transition-all ${
                  tutorialTab === 'guide'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🎮 Cách chơi
              </button>
              <button
                onClick={() => setTutorialTab('achievements')}
                className={`px-4 py-2 font-semibold transition-all ${
                  tutorialTab === 'achievements'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🏆 Thành tựu ({achievements.filter(a => a.unlocked).length}/12)
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2">
              {/* Tab: Cách chơi */}
              {tutorialTab === 'guide' && (
                <div className="space-y-4 text-sm">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-center">
                      Biến Việt Nam thành <strong>quốc gia phát triển</strong> đến 2045<br/>
                      <span className="italic text-sm">"Công nghệ là công cụ, con người là động lực"</span>
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-yellow-800">
                      <strong>Không phải trắc nghiệm!</strong> Chọn chính sách → Quan sát hệ quả → Rút bài học
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🗓️ 4 Giai đoạn (2025-2045)</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                        <div className="font-semibold">💰 G1: Hậu COVID</div>
                        <div className="text-xs text-gray-600">Cân bằng tăng trưởng & lao động</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded border-l-4 border-blue-400">
                        <div className="font-semibold">🚀 G2: Bùng nổ tech</div>
                        <div className="text-xs text-gray-600">Tự chủ hay lệ thuộc?</div>
                      </div>
                      <div className="bg-green-50 p-2 rounded border-l-4 border-green-400">
                        <div className="font-semibold">📡 G3: Khoảng cách số</div>
                        <div className="text-xs text-gray-600">Kết nối đô thị - nông thôn</div>
                      </div>
                      <div className="bg-purple-50 p-2 rounded border-l-4 border-purple-400">
                        <div className="font-semibold">⚖️ G4: Thách thức 2045</div>
                        <div className="text-xs text-gray-600">Phát triển bền vững</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">📊 4 Chỉ số theo dõi</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">📈</span>
                        <div>
                          <div className="font-semibold text-blue-700">Kinh tế</div>
                          <div className="text-xs text-gray-600">GDP, thu nhập</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">👥</span>
                        <div>
                          <div className="font-semibold text-green-700">Xã hội</div>
                          <div className="text-xs text-gray-600">Phúc lợi, hạnh phúc</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🔬</span>
                        <div>
                          <div className="font-semibold text-purple-700">Công nghệ</div>
                          <div className="text-xs text-gray-600">Tự chủ, đổi mới</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🌱</span>
                        <div>
                          <div className="font-semibold text-emerald-700">Môi trường</div>
                          <div className="text-xs text-gray-600">Bảo vệ, xanh hóa</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-bold text-gray-900 mb-2">📚 Bài học chính</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>✨ Hiện đại hóa <strong>gắn với con người</strong></li>
                      <li>✨ Tự chủ công nghệ là <strong>sống còn</strong></li>
                      <li>✨ Công nghệ <strong>phục vụ mọi người</strong></li>
                      <li>✨ Phát triển bền vững là <strong>CNH thế kỷ 21</strong></li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab: Thành tựu */}
              {tutorialTab === 'achievements' && (
                <div className="space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-sm text-yellow-800">
                      <strong>💡 Mẹo:</strong> Đọc kỹ để biết cách đạt được từng thành tựu!
                    </p>
                  </div>
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-400 hover:shadow transition-all"
                    >
                      <div className="flex items-start gap-2">
                        <div className="text-2xl flex-shrink-0">{achievement.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gray-900 text-sm">{achievement.name}</div>
                          <div className="text-xs text-gray-600 mb-1">{achievement.description}</div>
                          <div className="bg-blue-50 border-l-2 border-blue-500 p-2 rounded text-xs">
                            <span className="font-semibold text-blue-900">Cách đạt:</span>
                            <span className="text-blue-800"> {achievement.hint}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white pt-4 border-t mt-4">
              <button
                onClick={() => setShowTutorial(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
              >
                Đã hiểu - Bắt đầu chơi!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
