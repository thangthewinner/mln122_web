'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { PHASES } from '@/lib/gameData';
import GameStats from './GameStats';
import GameProgress from './GameProgress';
import BudgetAllocation from './minigames/BudgetAllocation';
import TechTree from './minigames/TechTree';
import NetworkBuilder from './minigames/NetworkBuilder';
import SustainabilityBalance from './minigames/SustainabilityBalance';
import { PhaseResult } from '@/types/game';

interface GameContainerProps {
  onGameComplete: () => void;
}

export default function GameContainer({ onGameComplete }: GameContainerProps) {
  const { gameState, completePhase, nextPhase } = useGame();
  const [showLesson, setShowLesson] = useState(false);
  const [currentLesson, setCurrentLesson] = useState('');

  const currentPhaseData = PHASES[gameState.currentPhase];

  const handlePhaseComplete = (result: PhaseResult) => {
    completePhase(result);
    setCurrentLesson(currentPhaseData.challenge.lesson);
    setShowLesson(true);
  };

  const handleNextPhase = () => {
    setShowLesson(false);

    if (gameState.currentPhase < PHASES.length - 1) {
      nextPhase();
    } else {
      onGameComplete();
    }
  };

  const renderMiniGame = () => {
    switch (currentPhaseData.gameType) {
      case 'budget-allocation':
        return <BudgetAllocation onComplete={handlePhaseComplete} />;
      case 'tech-tree':
        return <TechTree onComplete={handlePhaseComplete} />;
      case 'network-building':
        return <NetworkBuilder onComplete={handlePhaseComplete} />;
      case 'sustainability':
        return <SustainabilityBalance onComplete={handlePhaseComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <GameProgress
        currentPhase={gameState.currentPhase}
        currentYear={gameState.currentYear}
        budget={gameState.budget}
        totalPhases={PHASES.length}
      />

      <GameStats stats={gameState.stats} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 mt-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentPhaseData.title}</h2>
          <p className="text-lg text-gray-600">{currentPhaseData.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {currentPhaseData.challenge.title}
          </h3>
          <p className="text-gray-600">{currentPhaseData.challenge.description}</p>
        </div>

        <AnimatePresence mode="wait">{!showLesson && renderMiniGame()}</AnimatePresence>
      </motion.div>

      {/* Lesson Panel */}
      <AnimatePresence>
        {showLesson && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bài học</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{currentLesson}</p>
              </div>

              <button
                onClick={handleNextPhase}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                {gameState.currentPhase < PHASES.length - 1 ? (
                  <>
                    <span className="text-xl mr-2">➡️</span> Tiếp tục giai đoạn tiếp theo
                  </>
                ) : (
                  <>
                    <span className="text-xl mr-2">🏆</span> Xem kết quả
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
