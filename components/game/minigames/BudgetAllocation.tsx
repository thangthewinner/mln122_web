'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhaseResult, BudgetAllocation as IBudgetAllocation } from '../../../types/game';

interface BudgetAllocationProps {
  onComplete: (result: PhaseResult) => void;
}

const CATEGORIES = [
  { key: 'automation', label: '🤖 Tự động hóa', color: 'blue' },
  { key: 'training', label: '📚 Đào tạo', color: 'green' },
  { key: 'social', label: '🏥 Phúc lợi xã hội', color: 'purple' },
  { key: 'research', label: '🔬 Nghiên cứu', color: 'orange' },
];

export default function BudgetAllocation({ onComplete }: BudgetAllocationProps) {
  const [allocation, setAllocation] = useState<IBudgetAllocation>({
    automation: 25,
    training: 25,
    social: 25,
    research: 25,
  });

  const total = Object.values(allocation).reduce((sum, val) => sum + val, 0);
  const isValid = total === 100;

  const handleChange = (key: keyof IBudgetAllocation, value: number) => {
    setAllocation((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(100, value)),
    }));
  };

  const calculateScore = (): number => {
    // Balance score: penalize extreme allocations
    const values = Object.values(allocation);
    const avg = 25;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / 4;
    const balanceScore = Math.max(0, 50 - variance / 2);

    // Strategic focus bonus
    let strategicBonus = 0;
    if (allocation.training >= 20 && allocation.research >= 15) strategicBonus += 20;
    if (allocation.social >= 20) strategicBonus += 15;
    if (allocation.automation < 40) strategicBonus += 10; // Don't over-automate

    return Math.min(95, Math.round(balanceScore + strategicBonus));
  };

  const calculateStatsChange = () => {
    return {
      economy: allocation.automation * 0.3 - 5,
      social: allocation.social * 0.4 + allocation.training * 0.2 - 10,
      technology: allocation.research * 0.4 + allocation.automation * 0.2 - 5,
      environment: -allocation.automation * 0.15 + allocation.research * 0.1,
    };
  };

  const handleSubmit = () => {
    if (!isValid) return;

    const score = calculateScore();
    const statsChange = calculateStatsChange();
    const budgetChange = allocation.research * 0.5 + allocation.training * 0.3;

    const result: PhaseResult = {
      phaseId: 1,
      score,
      statsChange,
      budgetChange: Math.round(budgetChange),
      data: allocation,
    };

    onComplete(result);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-700">Tổng phân bổ:</span>
          <span
            className={`text-3xl font-bold ${
              isValid ? 'text-green-600' : total > 100 ? 'text-red-600' : 'text-orange-600'
            }`}
          >
            {total}%
          </span>
        </div>
        {!isValid && (
          <div className="mt-2 text-sm text-gray-600">
            {total > 100 ? '⚠️ Vượt quá ngân sách!' : '⚠️ Chưa phân bổ đủ 100%'}
          </div>
        )}
      </div>

      <div className="space-y-6">
        {CATEGORIES.map(({ key, label, color }) => {
          const value = allocation[key as keyof IBudgetAllocation];

          return (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold text-gray-700">{label}</label>
                <span className={`text-2xl font-bold text-${color}-600`}>{value}%</span>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => handleChange(key as keyof IBudgetAllocation, Number(e.target.value))}
                  className={`flex-1 h-3 rounded-lg appearance-none cursor-pointer bg-${color}-200`}
                  style={{
                    background: `linear-gradient(to right, 
                      var(--tw-gradient-stops) 0%, 
                      var(--tw-gradient-stops) ${value}%, 
                      #e5e7eb ${value}%, 
                      #e5e7eb 100%)`,
                  }}
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => handleChange(key as keyof IBudgetAllocation, Number(e.target.value))}
                  className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg text-center font-semibold focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
        <p className="text-sm text-yellow-800">
          💡 <strong>Mẹo:</strong> Cân bằng giữa các lĩnh vực để đạt điểm cao. Đầu tư vào đào tạo
          và nghiên cứu sẽ mang lại lợi ích dài hạn.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className={`w-full py-4 px-8 rounded-xl font-bold text-white text-lg transition-all ${
          isValid
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 shadow-lg'
            : 'bg-gray-400 cursor-not-allowed opacity-50'
        }`}
      >
        ✅ Xác nhận phân bổ
      </button>
    </motion.div>
  );
}
