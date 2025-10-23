'use client';

import React, { useState } from 'react';
import { GameProvider } from '@/context/GameContext';
import GameWelcome from '@/components/game/GameWelcome';
import GameContainer from '@/components/game/GameContainer';
import GameResults from '@/components/game/GameResults';

type GameScreen = 'welcome' | 'game' | 'results';

export default function GameSection() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('welcome');

  const handleStartGame = () => {
    setCurrentScreen('game');
  };

  const handleGameComplete = () => {
    setCurrentScreen('results');
  };

  const handlePlayAgain = () => {
    setCurrentScreen('welcome');
  };

  return (
    <GameProvider>
      <section id="game" className="section bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
        <div className="section-container">
          {currentScreen === 'welcome' && <GameWelcome onStartGame={handleStartGame} />}
          {currentScreen === 'game' && <GameContainer onGameComplete={handleGameComplete} />}
          {currentScreen === 'results' && <GameResults onPlayAgain={handlePlayAgain} />}
        </div>
      </section>
    </GameProvider>
  );
}
