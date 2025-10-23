'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GameProgressProps {
  currentPhase: number;
  currentYear: number;
  budget: number;
  totalPhases: number;
}

export default function GameProgress({
  currentPhase,
  currentYear,
  budget,
  totalPhases,
}: GameProgressProps) {
  const progress = ((currentPhase + 1) / totalPhases) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">Giai đoạn</div>
          <div className="text-2xl font-bold text-purple-600">
            {currentPhase + 1} / {totalPhases}
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">Năm hiện tại</div>
          <div className="text-2xl font-bold text-blue-600">{currentYear}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">Ngân sách</div>
          <div className="text-2xl font-bold text-green-600">${Math.round(budget)}B</div>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
        />
      </div>
      <div className="text-center text-sm text-gray-600 mt-2">
        Tiến độ: {Math.round(progress)}%
      </div>
    </div>
  );
}
