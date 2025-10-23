'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhaseResult, NetworkState } from '../../../types/game';

interface NetworkBuilderProps {
  onComplete: (result: PhaseResult) => void;
}

const REGIONS = [
  { id: 'north', name: 'Miền Bắc', icon: '🏔️', cost: 35, color: 'red' },
  { id: 'central', name: 'Miền Trung', icon: '🏖️', cost: 40, color: 'yellow' },
  { id: 'south', name: 'Miền Nam', icon: '🌾', cost: 30, color: 'green' },
];

export default function NetworkBuilder({ onComplete }: NetworkBuilderProps) {
  const [connectedRegions, setConnectedRegions] = useState<string[]>([]);

  const totalCost = connectedRegions.reduce((sum, regionId) => {
    const region = REGIONS.find((r) => r.id === regionId);
    return sum + (region?.cost || 0);
  }, 0);

  const coverage = (connectedRegions.length / REGIONS.length) * 100;

  const toggleRegion = (regionId: string) => {
    setConnectedRegions((prev) => {
      if (prev.includes(regionId)) {
        return prev.filter((id) => id !== regionId);
      } else {
        return [...prev, regionId];
      }
    });
  };

  const calculateScore = (): number => {
    let score = 0;

    // Coverage bonus
    score += coverage; // Max 100 points for full coverage

    // Efficiency bonus
    if (connectedRegions.length === 3) {
      score = 100; // Perfect score for connecting all regions
    } else if (connectedRegions.length === 2) {
      score = 70; // Partial coverage
    } else if (connectedRegions.length === 1) {
      score = 40; // Minimal coverage
    }

    return Math.min(100, Math.round(score));
  };

  const calculateStatsChange = () => {
    const change = { economy: 0, social: 0, technology: 0, environment: 0 };

    // Each region contributes differently
    if (connectedRegions.includes('north')) {
      change.economy += 5;
      change.technology += 8;
    }
    if (connectedRegions.includes('central')) {
      change.social += 10;
      change.economy += 3;
    }
    if (connectedRegions.includes('south')) {
      change.economy += 8;
      change.social += 5;
    }

    // Unity bonus for connecting all regions
    if (connectedRegions.length === 3) {
      change.social += 10;
      change.technology += 5;
    }

    return change;
  };

  const handleSubmit = () => {
    if (connectedRegions.length === 0) return;

    const score = calculateScore();
    const statsChange = calculateStatsChange();

    const networkState: NetworkState = {
      connectedRegions,
      totalCost,
      regionCosts: {
        north: 35,
        central: 40,
        south: 30,
      },
    };

    const result: PhaseResult = {
      phaseId: 3,
      score,
      statsChange,
      budgetChange: -totalCost,
      data: networkState,
    };

    onComplete(result);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm text-gray-600">Độ phủ</div>
            <div className="text-3xl font-bold text-blue-600">{Math.round(coverage)}%</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Vùng kết nối</div>
            <div className="text-3xl font-bold text-green-600">
              {connectedRegions.length}/3
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Tổng chi phí</div>
            <div className="text-3xl font-bold text-purple-600">${totalCost}B</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
        <h4 className="text-xl font-bold text-center text-gray-800 mb-6">
          🗺️ Bản đồ Việt Nam
        </h4>

        <div className="space-y-4">
          {REGIONS.map((region, index) => {
            const isConnected = connectedRegions.includes(region.id);

            return (
              <motion.div
                key={region.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleRegion(region.id)}
                  className={`w-full p-6 rounded-xl text-left transition-all ${
                    isConnected
                      ? `bg-gradient-to-r from-${region.color}-500 to-${region.color}-600 text-white shadow-xl scale-105`
                      : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{region.icon}</span>
                      <div>
                        <h5
                          className={`text-xl font-bold ${
                            isConnected ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {region.name}
                        </h5>
                        <p
                          className={`text-sm ${
                            isConnected ? 'text-white/80' : 'text-gray-600'
                          }`}
                        >
                          Chi phí: ${region.cost}B
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {isConnected ? (
                        <div className="text-3xl">✅</div>
                      ) : (
                        <div className="text-3xl opacity-30">⭕</div>
                      )}
                    </div>
                  </div>
                </button>

                {isConnected && index < REGIONS.length - 1 && (
                  <div className="flex justify-center my-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 40 }}
                      className="w-1 bg-gradient-to-b from-green-500 to-blue-500"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {connectedRegions.length === 3 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg"
        >
          <p className="text-sm text-green-800 font-semibold">
            🎉 Xuất sắc! Bạn đã kết nối toàn bộ 3 miền, tạo nên sự thống nhất và phát triển đồng
            đều cho cả nước!
          </p>
        </motion.div>
      )}

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
        <p className="text-sm text-yellow-800">
          💡 <strong>Mẹo:</strong> Kết nối cả 3 miền sẽ mang lại lợi ích lớn nhất về mặt xã hội
          và công nghệ. Đừng để khoảng cách số tồn tại!
        </p>
      </div>

      <button
        onClick={handleSubmit}
        disabled={connectedRegions.length === 0}
        className={`w-full py-4 px-8 rounded-xl font-bold text-white text-lg transition-all ${
          connectedRegions.length > 0
            ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:scale-105 shadow-lg'
            : 'bg-gray-400 cursor-not-allowed opacity-50'
        }`}
      >
        ✅ Hoàn thành kết nối
      </button>
    </motion.div>
  );
}
