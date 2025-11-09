'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../../context/GameContext';
import { GRADE_THRESHOLDS } from '../../lib/gameData';
import { EndingType, GradeType } from '../../types/game';

interface GameResultsProps {
  onPlayAgain: () => void;
}

export default function GameResults({ onPlayAgain }: GameResultsProps) {
  const { gameState, achievements, resetGame } = useGame();

  const calculateGrade = (): GradeType => {
    const percentage = (gameState.totalScore / 380) * 100; // Max 380 points (95+95+100+90)

    if (percentage >= GRADE_THRESHOLDS['A+']) return 'A+';
    if (percentage >= GRADE_THRESHOLDS.A) return 'A';
    if (percentage >= GRADE_THRESHOLDS['B+']) return 'B+';
    if (percentage >= GRADE_THRESHOLDS.B) return 'B';
    if (percentage >= GRADE_THRESHOLDS['C+']) return 'C+';
    if (percentage >= GRADE_THRESHOLDS.C) return 'C';
    return 'D';
  };

  const determineEnding = (): EndingType => {
    const { stats } = gameState;
    const percentage = (gameState.totalScore / 380) * 100;

    const allStatsAbove70 =
      stats.economy > 70 &&
      stats.social > 70 &&
      stats.technology > 70 &&
      stats.environment > 70;

    if (percentage >= 85 && allStatsAbove70) return 'success';
    if (percentage >= 60) return 'warning';
    return 'failure';
  };

  const grade = calculateGrade();
  const ending = determineEnding();
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  const endingMessages = {
    success: {
      title: '🌏 Thành công rực rỡ!',
      message:
        'Việt Nam đã bứt phá thành công! Công nghệ phát triển vượt bậc, con người hạnh phúc, và môi trường được bảo vệ. Bạn là một nhà lãnh đạo xuất sắc!',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    warning: {
      title: '⚙️ Thành công có điều kiện',
      message:
        'Việt Nam đã phát triển nhưng còn nhiều thách thức. Cần cân bằng tốt hơn giữa các lĩnh vực để đảm bảo sự phát triển bền vững.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
    failure: {
      title: '🏭 Còn nhiều việc phải làm',
      message:
        'Việt Nam đang đối mặt với nhiều khó khăn. Cần xem xét lại chiến lược và cân nhắc kỹ hơn trong các quyết định để đất nước phát triển bền vững.',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
  };

  const currentEnding = endingMessages[ending];

  const handlePlayAgain = () => {
    resetGame();
    onPlayAgain();
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-black text-gray-900 mb-4">Kết quả cuối cùng</h1>
        <div className="text-8xl mb-4">🎯</div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`${currentEnding.bg} rounded-2xl p-8 mb-6 shadow-xl`}
      >
        <h2 className={`text-3xl font-bold ${currentEnding.color} mb-4`}>
          {currentEnding.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">{currentEnding.message}</p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-8 shadow-xl mb-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Thành tích</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-5xl font-black text-purple-600 mb-2">{grade}</div>
            <div className="text-sm text-gray-600">Xếp hạng tổng thể</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-5xl font-black text-green-600 mb-2">{gameState.totalScore}</div>
            <div className="text-sm text-gray-600">Tổng điểm</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(gameState.stats.economy)}%
            </div>
            <div className="text-xs text-gray-600">Kinh tế</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {Math.round(gameState.stats.social)}%
            </div>
            <div className="text-xs text-gray-600">Xã hội</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(gameState.stats.technology)}%
            </div>
            <div className="text-xs text-gray-600">Công nghệ</div>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600">
              {Math.round(gameState.stats.environment)}%
            </div>
            <div className="text-xs text-gray-600">Môi trường</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-8 shadow-xl mb-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          🏆 Thành tựu: {unlockedCount}/12
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl transition-all group relative cursor-pointer ${
                achievement.unlocked 
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg hover:shadow-2xl hover:scale-105' 
                  : 'bg-gray-100 opacity-70 border-2 border-gray-300 hover:opacity-90 hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-2">{achievement.icon}</div>
                <div className="text-sm font-bold text-gray-900 mb-1">{achievement.name}</div>
                <div className="text-xs text-gray-600">{achievement.description}</div>
              </div>
              
              {/* Hover Tooltip */}
              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 ${
                achievement.unlocked 
                  ? 'bg-green-600 text-white' 
                  : 'bg-blue-600 text-white'
              }`}>
                {/* Arrow */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-8 border-transparent ${
                  achievement.unlocked ? 'border-t-green-600' : 'border-t-blue-600'
                }`}></div>
                
                {/* Content */}
                <div className="text-xs font-semibold mb-2">
                  {achievement.unlocked ? '✅ Đã hoàn thành!' : '💡 Cách đạt được:'}
                </div>
                <div className="text-xs leading-relaxed">
                  {achievement.hint}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center mt-6 italic">
          Hover vào từng thành tựu để xem chi tiết cách đạt được
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4"
      >
        <button
          onClick={handlePlayAgain}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform shadow-lg"
        >
          🔄 Chơi lại
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-8 text-gray-600 italic"
      >
        "Tương lai không được lập trình sẵn – mà do con người Việt Nam viết nên."
      </motion.div>
    </div>
  );
}
