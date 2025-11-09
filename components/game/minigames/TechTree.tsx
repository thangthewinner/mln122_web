'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhaseResult, TechProgress } from '../../../types/game';

interface TechTreeProps {
  onComplete: (result: PhaseResult) => void;
}

const TECHNOLOGIES = [
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: '🤖',
    cost: 40,
    description: 'Trí tuệ nhân tạo và học máy',
    impact: { economy: 10, technology: 15, social: -5 },
  },
  {
    id: 'iot',
    name: 'IoT & Smart Systems',
    icon: '📡',
    cost: 35,
    description: 'Internet vạn vật và hệ thống thông minh',
    impact: { economy: 8, technology: 12, environment: 5 },
  },
  {
    id: 'renewable',
    name: 'Renewable Energy',
    icon: '♻️',
    cost: 30,
    description: 'Năng lượng tái tạo',
    impact: { economy: 5, environment: 15, social: 8 },
  },
  {
    id: 'biotech',
    name: 'Biotechnology',
    icon: '🧬',
    cost: 35,
    description: 'Công nghệ sinh học',
    impact: { social: 10, technology: 10, environment: 5 },
  },
];

export default function TechTree({ onComplete }: TechTreeProps) {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [budget] = useState(130);

  const totalCost = selectedTechs.reduce((sum, techId) => {
    const tech = TECHNOLOGIES.find((t) => t.id === techId);
    return sum + (tech?.cost || 0);
  }, 0);

  const remainingBudget = budget - totalCost;
  const canAfford = remainingBudget >= 0;

  const toggleTech = (techId: string) => {
    setSelectedTechs((prev) => {
      if (prev.includes(techId)) {
        return prev.filter((id) => id !== techId);
      } else {
        return [...prev, techId];
      }
    });
  };

  const calculateScore = (): number => {
    let score = 0;

    // Base score for number of techs (balanced selection)
    if (selectedTechs.length === 3) score += 40;
    else if (selectedTechs.length === 2) score += 30;
    else if (selectedTechs.length === 4) score += 35;
    else score += 20;

    // Strategic choices bonus
    const hasAI = selectedTechs.includes('ai');
    const hasRenewable = selectedTechs.includes('renewable');
    const hasIoT = selectedTechs.includes('iot');

    if (hasAI && hasIoT) score += 20; // Synergy
    if (hasRenewable) score += 15; // Sustainability focus
    if (selectedTechs.length >= 3) score += 10; // Diversification

    // Budget efficiency
    if (remainingBudget < 20 && remainingBudget >= 0) score += 10;

    return Math.min(95, score);
  };

  const calculateStatsChange = () => {
    const change = { economy: 0, social: 0, technology: 0, environment: 0 };

    selectedTechs.forEach((techId) => {
      const tech = TECHNOLOGIES.find((t) => t.id === techId);
      if (tech) {
        Object.entries(tech.impact).forEach(([key, value]) => {
          change[key as keyof typeof change] += value;
        });
      }
    });

    return change;
  };

  const handleSubmit = () => {
    if (!canAfford || selectedTechs.length === 0) return;

    const score = calculateScore();
    const statsChange = calculateStatsChange();

    const techProgress: TechProgress = {
      ai: selectedTechs.includes('ai') ? 100 : 0,
      iot: selectedTechs.includes('iot') ? 100 : 0,
      renewable: selectedTechs.includes('renewable') ? 100 : 0,
      biotech: selectedTechs.includes('biotech') ? 100 : 0,
      selectedTechs,
      budget: remainingBudget,
    };

    const result: PhaseResult = {
      phaseId: 2,
      score,
      statsChange,
      budgetChange: remainingBudget,
      data: techProgress,
    };

    onComplete(result);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-600 mb-6">
        <h4 className="text-lg font-bold text-gray-900 mb-2">📅 Bối cảnh: 2030-2035 - Bùng nổ công nghệ</h4>
        <p className="text-gray-700 mb-3">
          AI, IoT, xe điện, năng lượng tái tạo đang bùng nổ toàn cầu. Việt Nam đứng trước lựa chọn quan trọng: 
          <strong> Tự chủ công nghệ hay lệ thuộc vào nước ngoài?</strong>
        </p>
        <div className="bg-white/60 rounded p-3">
          <p className="text-sm text-gray-800">
            💡 <strong>Thách thức:</strong> Mua công nghệ ngoại (nhanh nhưng lệ thuộc) hay tự nghiên cứu phát triển 
            (chậm nhưng tự chủ)? Chọn công nghệ nào để Việt Nam không bị bỏ lại phía sau?
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-600">Ngân sách khả dụng</div>
            <div className="text-3xl font-bold text-purple-600">${budget}B</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Đã sử dụng</div>
            <div className="text-3xl font-bold text-blue-600">${totalCost}B</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Còn lại</div>
            <div
              className={`text-3xl font-bold ${
                canAfford ? 'text-green-600' : 'text-red-600'
              }`}
            >
              ${remainingBudget}B
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TECHNOLOGIES.map((tech) => {
          const isSelected = selectedTechs.includes(tech.id);
          const wouldExceedBudget = !isSelected && totalCost + tech.cost > budget;

          return (
            <motion.button
              key={tech.id}
              whileHover={{ scale: wouldExceedBudget ? 1 : 1.02 }}
              whileTap={{ scale: wouldExceedBudget ? 1 : 0.98 }}
              onClick={() => !wouldExceedBudget && toggleTech(tech.id)}
              disabled={wouldExceedBudget && !isSelected}
              className={`p-6 rounded-xl text-left transition-all ${
                isSelected
                  ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-xl scale-105'
                  : wouldExceedBudget
                  ? 'bg-gray-100 opacity-50 cursor-not-allowed'
                  : 'bg-white hover:shadow-lg border-2 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">{tech.icon}</span>
                <span
                  className={`text-2xl font-bold ${
                    isSelected ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  ${tech.cost}B
                </span>
              </div>
              <h4
                className={`text-lg font-bold mb-2 ${
                  isSelected ? 'text-white' : 'text-gray-900'
                }`}
              >
                {tech.name}
              </h4>
              <p
                className={`text-sm ${
                  isSelected ? 'text-blue-100' : 'text-gray-600'
                }`}
              >
                {tech.description}
              </p>
              {isSelected && (
                <div className="mt-3 text-sm text-blue-100">✅ Đã chọn</div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="space-y-3">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            📖 <strong>Bài học quốc tế:</strong> Hàn Quốc chọn <strong>bán dẫn + AI</strong>, 
            Singapore chọn <strong>IoT + Smart City</strong>, Đan Mạch chọn <strong>năng lượng tái tạo</strong>. 
            Không ai có đủ nguồn lực cho tất cả - phải <strong>chọn điểm mạnh</strong> để tập trung phát triển.
          </p>
        </div>
        
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
          <p className="text-sm text-purple-800">
            ⚡ <strong>Hiệu ứng Synergy:</strong> AI + IoT = Nhà máy thông minh, Nông nghiệp 4.0. 
            Năng lượng tái tạo + IoT = Lưới điện thông minh. Biotechnology + AI = Y tế chính xác.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            💡 <strong>Chiến lược gợi ý:</strong> Chọn 2-3 công nghệ có tính bổ trợ (không nên chọn cả 4 - 
            quá dàn trải). Ưu tiên công nghệ phù hợp với thế mạnh Việt Nam: Nông nghiệp (IoT + Biotech), 
            Sản xuất (AI + IoT), hoặc Xanh hóa (Renewable + IoT).
          </p>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!canAfford || selectedTechs.length === 0}
        className={`w-full py-4 px-8 rounded-xl font-bold text-white text-lg transition-all ${
          canAfford && selectedTechs.length > 0
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 shadow-lg'
            : 'bg-gray-400 cursor-not-allowed opacity-50'
        }`}
      >
        ✅ Xác nhận lựa chọn ({selectedTechs.length} công nghệ)
      </button>
    </motion.div>
  );
}
