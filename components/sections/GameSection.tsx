'use client';

import React, { useState } from 'react';
import { GameProvider } from '../../context/GameContext';
import GameWelcome from '../game/GameWelcome';
import GameContainer from '../game/GameContainer';
import GameResults from '../game/GameResults';

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
      <section id="game" className="section bg-gradient-to-br from-ocean-50 via-ocean-100 to-ocean-200 min-h-screen">
        <div className="section-container">
          {currentScreen === 'welcome' && <GameWelcome onStartGame={handleStartGame} />}
          {currentScreen === 'game' && <GameContainer onGameComplete={handleGameComplete} />}
          {currentScreen === 'results' && <GameResults onPlayAgain={handlePlayAgain} />}
        </div>
      </section>
    </GameProvider>
  );
}
