'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  GameState,
  GameStats,
  Achievement,
  GameSettings,
  PhaseResult,
  SaveData,
} from '../types/game';
import { INITIAL_ACHIEVEMENTS, GAME_VERSION } from '../lib/gameData';

interface GameContextType {
  gameState: GameState;
  achievements: Achievement[];
  settings: GameSettings;
  updateStats: (newStats: Partial<GameStats>) => void;
  updateBudget: (amount: number) => void;
  nextPhase: () => void;
  completePhase: (result: PhaseResult) => void;
  unlockAchievement: (id: string) => boolean;
  updateSettings: (newSettings: Partial<GameSettings>) => void;
  saveGame: () => void;
  loadGame: () => boolean;
  resetGame: () => void;
  startNewGame: () => void;
}

const defaultGameState: GameState = {
  currentPhase: 0,
  currentYear: 2025,
  budget: 100,
  baseBudget: 100,
  budgetHistory: [100],
  stats: {
    economy: 60,
    social: 70,
    technology: 50,
    environment: 65,
  },
  phaseResults: [],
  lessonHistory: [],
  totalScore: 0,
};

const defaultSettings: GameSettings = {
  volume: 0.5,
  musicEnabled: false,
  soundEnabled: true,
  autosaveEnabled: true,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(defaultGameState);
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [settings, setSettings] = useState<GameSettings>(defaultSettings);

  // Load saved data on mount
  useEffect(() => {
    loadGame();
  }, []);

  // Auto-save when state changes
  useEffect(() => {
    if (settings.autosaveEnabled && gameState.currentPhase > 0) {
      saveGame();
    }
  }, [gameState, settings.autosaveEnabled]);

  const updateStats = (newStats: Partial<GameStats>) => {
    setGameState((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        ...Object.fromEntries(
          Object.entries(newStats).map(([key, value]) => [
            key,
            Math.max(0, Math.min(100, value)),
          ])
        ),
      },
    }));
  };

  const updateBudget = (amount: number) => {
    setGameState((prev) => ({
      ...prev,
      budget: Math.max(0, amount),
      budgetHistory: [...prev.budgetHistory, Math.max(0, amount)],
    }));
  };

  const calculateNextPhaseBudget = (stats: GameStats, currentBudget: number, phase: number) => {
    let nextBudget = 100 + phase * 20;
    const economicMultiplier = 1 + (stats.economy - 50) / 200;
    nextBudget *= economicMultiplier;

    if (stats.technology > 70) nextBudget += 15;
    if (stats.social < 40) nextBudget -= 20;
    else if (stats.social > 80) nextBudget += 10;
    if (stats.environment < 30) nextBudget -= 25;
    else if (stats.environment > 70) nextBudget += 5;

    return Math.max(50, Math.round(nextBudget));
  };

  const nextPhase = () => {
    setGameState((prev) => {
      const nextPhaseNum = prev.currentPhase + 1;
      const nextYear = 2025 + nextPhaseNum * 5;
      const nextBudget = calculateNextPhaseBudget(prev.stats, prev.budget, nextPhaseNum);

      return {
        ...prev,
        currentPhase: nextPhaseNum,
        currentYear: nextYear,
        budget: nextBudget,
        budgetHistory: [...prev.budgetHistory, nextBudget],
      };
    });
  };

  const completePhase = (result: PhaseResult) => {
    setGameState((prev) => ({
      ...prev,
      phaseResults: [...prev.phaseResults, result],
      totalScore: prev.totalScore + result.score,
      stats: {
        economy: Math.max(
          0,
          Math.min(100, prev.stats.economy + (result.statsChange.economy || 0))
        ),
        social: Math.max(0, Math.min(100, prev.stats.social + (result.statsChange.social || 0))),
        technology: Math.max(
          0,
          Math.min(100, prev.stats.technology + (result.statsChange.technology || 0))
        ),
        environment: Math.max(
          0,
          Math.min(100, prev.stats.environment + (result.statsChange.environment || 0))
        ),
      },
      budget: Math.max(0, prev.budget + result.budgetChange),
    }));

    // Check achievements after phase completion
    checkAchievements(result);
  };

  const unlockAchievement = (id: string): boolean => {
    setAchievements((prev) => {
      const achievement = prev.find((a) => a.id === id);
      if (achievement && !achievement.unlocked) {
        return prev.map((a) => (a.id === id ? { ...a, unlocked: true } : a));
      }
      return prev;
    });
    return true;
  };

  const checkAchievements = (result: PhaseResult) => {
    const { stats } = gameState;

    // First play
    if (gameState.currentPhase === 0) {
      unlockAchievement('first_play');
    }

    // Economic boom
    if (stats.economy > 85) {
      unlockAchievement('economic_boom');
    }

    // Social harmony
    if (stats.social > 85) {
      unlockAchievement('social_harmony');
    }

    // Tech innovation
    if (stats.technology > 85) {
      unlockAchievement('tech_innovation');
    }

    // Perfect balance
    if (
      stats.economy > 70 &&
      stats.social > 70 &&
      stats.technology > 70 &&
      stats.environment > 70
    ) {
      unlockAchievement('perfect_balance');
    }

    // Green leader
    if (stats.environment > 70) {
      unlockAchievement('green_leader');
    }
  };

  const updateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
    localStorage.setItem('vietnam2045_settings', JSON.stringify({ ...settings, ...newSettings }));
  };

  const saveGame = () => {
    const saveData: SaveData = {
      version: GAME_VERSION,
      timestamp: Date.now(),
      gameState,
      achievements,
      settings,
    };
    localStorage.setItem('vietnam2045_save', JSON.stringify(saveData));
  };

  const loadGame = (): boolean => {
    try {
      const saved = localStorage.getItem('vietnam2045_save');
      const savedSettings = localStorage.getItem('vietnam2045_settings');

      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }

      if (saved) {
        const data: SaveData = JSON.parse(saved);
        if (data.version === GAME_VERSION) {
          setGameState(data.gameState);
          setAchievements(data.achievements);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Failed to load game:', error);
      return false;
    }
  };

  const resetGame = () => {
    setGameState(defaultGameState);
    setAchievements(INITIAL_ACHIEVEMENTS);
    localStorage.removeItem('vietnam2045_save');
  };

  const startNewGame = () => {
    const newState = {
      ...defaultGameState,
      startTime: Date.now(),
    };
    setGameState(newState);
    unlockAchievement('first_play');
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        achievements,
        settings,
        updateStats,
        updateBudget,
        nextPhase,
        completePhase,
        unlockAchievement,
        updateSettings,
        saveGame,
        loadGame,
        resetGame,
        startNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
