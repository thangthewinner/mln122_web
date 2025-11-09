'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhaseResult, SustainabilityState } from '../../../types/game';

interface SustainabilityBalanceProps {
  onComplete: (result: PhaseResult) => void;
}

const POLICIES = [
  { id: 'carbon_tax', name: 'Thuế carbon', icon: '💰', envImpact: 10, ecoImpact: -3 },
  { id: 'green_subsidy', name: 'Trợ cấp năng lượng xanh', icon: '♻️', envImpact: 15, ecoImpact: 5 },
  { id: 'circular_economy', name: 'Kinh tế tuần hoàn', icon: '🔄', envImpact: 12, ecoImpact: 8 },
  { id: 'conservation', name: 'Bảo tồn thiên nhiên', icon: '🌳', envImpact: 20, ecoImpact: -5 },
];

export default function SustainabilityBalance({ onComplete }: SustainabilityBalanceProps) {
  const [balance, setBalance] = useState(50);
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);

  const togglePolicy = (policyId: string) => {
    setSelectedPolicies((prev) => {
      if (prev.includes(policyId)) {
        return prev.filter((id) => id !== policyId);
      } else {
        return [...prev, policyId];
      }
    });
  };

  const getBalanceLabel = () => {
    if (balance < 40) return { text: 'Tập trung Kinh tế', color: 'text-blue-600' };
    if (balance > 60) return { text: 'Ưu tiên Môi trường', color: 'text-green-600' };
    return { text: 'Cân bằng', color: 'text-purple-600' };
  };

  const calculateScore = (): number => {
    let score = 0;

    // Balance score (sweet spot is 40-60)
    if (balance >= 40 && balance <= 60) {
      score += 40;
      if (balance >= 45 && balance <= 55) score += 10; // Extra bonus for perfect balance
    } else if (balance >= 30 && balance <= 70) {
      score += 30;
    } else {
      score += 20;
    }

    // Policy selection bonus
    score += selectedPolicies.length * 8; // Up to 32 points for 4 policies

    // Synergy bonus for selecting complementary policies
    if (selectedPolicies.includes('green_subsidy') && selectedPolicies.includes('circular_economy')) {
      score += 10;
    }
    if (selectedPolicies.length >= 3) {
      score += 8; // Comprehensive approach bonus
    }

    return Math.min(90, score);
  };

  const calculateStatsChange = () => {
    let envChange = 0;
    let ecoChange = 0;

    // Balance impact
    if (balance > 60) {
      envChange += (balance - 50) * 0.3;
      ecoChange -= (balance - 50) * 0.2;
    } else if (balance < 40) {
      ecoChange += (50 - balance) * 0.3;
      envChange -= (50 - balance) * 0.2;
    } else {
      // Balanced approach benefits both
      envChange += 5;
      ecoChange += 5;
    }

    // Policy impacts
    selectedPolicies.forEach((policyId) => {
      const policy = POLICIES.find((p) => p.id === policyId);
      if (policy) {
        envChange += policy.envImpact;
        ecoChange += policy.ecoImpact;
      }
    });

    return {
      economy: Math.round(ecoChange),
      environment: Math.round(envChange),
      social: selectedPolicies.length * 2, // Policies show leadership
      technology: selectedPolicies.includes('circular_economy') ? 5 : 0,
    };
  };

  const handleSubmit = () => {
    const score = calculateScore();
    const statsChange = calculateStatsChange();

    const sustainabilityState: SustainabilityState = {
      balance,
      selectedPolicies,
    };

    const result: PhaseResult = {
      phaseId: 4,
      score,
      statsChange,
      budgetChange: -selectedPolicies.length * 5,
      data: sustainabilityState,
    };

    onComplete(result);
  };

  const balanceLabel = getBalanceLabel();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 rounded-xl p-6 border-l-4 border-purple-600 mb-6">
        <h4 className="text-lg font-bold text-gray-900 mb-2">📅 Bối cảnh: 2040-2045 - Thử thách 2045</h4>
        <p className="text-gray-700 mb-3">
          Việt Nam đã phát triển mạnh mẽ và đứng trước ngưỡng trở thành quốc gia phát triển. 
          <strong> Nhưng biến đổi khí hậu và ô nhiễm đang đe dọa thành quả.</strong>
        </p>
        <div className="bg-white/60 rounded p-3">
          <p className="text-sm text-gray-800">
            💡 <strong>Thách thức cuối cùng:</strong> Làm sao để duy trì tăng trưởng kinh tế mà vẫn bảo vệ môi trường? 
            Có phải phát triển bền vững là con đường duy nhất? "Phát triển bền vững là CNH thế kỷ 21."
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">
          ⚖️ Cân bằng phát triển
        </h4>

        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-sm font-semibold text-blue-600">Kinh tế</div>
          </div>

          <div className="text-center flex-1 mx-4">
            <div className={`text-3xl font-bold ${balanceLabel.color} mb-2`}>{balance}</div>
            <div className={`text-sm font-semibold ${balanceLabel.color}`}>
              {balanceLabel.text}
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-2">🌱</div>
            <div className="text-sm font-semibold text-green-600">Môi trường</div>
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          className="w-full h-4 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, 
              #3b82f6 0%, 
              #8b5cf6 ${balance}%, 
              #10b981 ${balance}%, 
              #10b981 100%)`,
          }}
        />

        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>0 - Chỉ kinh tế</span>
          <span>50 - Cân bằng</span>
          <span>100 - Chỉ môi trường</span>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">📋 Chính sách bổ sung</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {POLICIES.map((policy) => {
            const isSelected = selectedPolicies.includes(policy.id);

            return (
              <motion.button
                key={policy.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => togglePolicy(policy.id)}
                className={`p-4 rounded-xl text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                    : 'bg-white hover:shadow-md border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{policy.icon}</span>
                  <div className="flex-1">
                    <h5
                      className={`font-bold ${
                        isSelected ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {policy.name}
                    </h5>
                    <div
                      className={`text-xs ${
                        isSelected ? 'text-green-100' : 'text-gray-600'
                      }`}
                    >
                      Môi trường: +{policy.envImpact} | Kinh tế: {policy.ecoImpact >= 0 ? '+' : ''}
                      {policy.ecoImpact}
                    </div>
                  </div>
                  {isSelected && <span className="text-xl">✅</span>}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {balance >= 40 && balance <= 60 && selectedPolicies.length >= 2 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg"
        >
          <p className="text-sm text-purple-800 font-semibold">
            ⭐ Tuyệt vời! Bạn đang thực hiện cách tiếp cận cân bằng với nhiều chính sách hỗ trợ.
            Đây là con đường phát triển bền vững!
          </p>
        </motion.div>
      )}

      <div className="space-y-3">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            📖 <strong>Mục tiêu Việt Nam 2045:</strong> "Trở thành quốc gia phát triển, thu nhập cao" 
            (Nghị quyết 29-NQ/TW). Nhưng không thể đánh đổi môi trường! ĐBSCL đang chìm 1cm/năm, 
            Hà Nội ô nhiễm top 10 thế giới.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <p className="text-sm text-green-800">
            🌍 <strong>Mô hình quốc tế:</strong> Đan Mạch - tăng trưởng 80% nhưng giảm phát thải 50% (1990-2020). 
            Costa Rica - 99% năng lượng tái tạo vẫn tăng GDP 4%/năm. <strong>Phát triển xanh = Phát triển thông minh!</strong>
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
          <p className="text-sm text-purple-800">
            ⚡ <strong>4 chính sách then chốt:</strong> Thuế carbon (giảm ô nhiễm), Trợ cấp năng lượng xanh 
            (tạo công ăn việc làm), Kinh tế tuần hoàn (tiết kiệm tài nguyên), Bảo tồn thiên nhiên (du lịch sinh thái).
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            💡 <strong>Chiến lược tối ưu:</strong> Giữ cân bằng 40-60 (ưu tiên môi trường một chút, 50-60) 
            và chọn 3-4 chính sách bổ trợ. <strong>Kinh tế tuần hoàn</strong> mang lại lợi ích cho cả 2 phía. 
            Đây là thử thách cuối - hãy hoàn thành sứ mệnh Việt Nam 2045!
          </p>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-4 px-8 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:scale-105 transition-all shadow-lg"
      >
        ✅ Hoàn thành chiến lược
      </button>
    </motion.div>
  );
}
