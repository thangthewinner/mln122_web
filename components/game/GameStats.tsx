'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GameStats as IGameStats } from '../../types/game';
import { STAT_LABELS, STAT_COLORS } from '../../lib/gameData';

interface GameStatsProps {
  stats: IGameStats;
}

export default function GameStats({ stats }: GameStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {(Object.keys(stats) as Array<keyof IGameStats>).map((statKey) => {
        const value = stats[statKey];
        const label = STAT_LABELS[statKey];
        const colors = STAT_COLORS[statKey];

        return (
          <motion.div
            key={statKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl p-4 shadow-md"
            style={{ backgroundColor: colors.light }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">{label}</span>
              <span className="text-lg font-bold" style={{ color: colors.text }}>
                {Math.round(value)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: colors.bg }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
