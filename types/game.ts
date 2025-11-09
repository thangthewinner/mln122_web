// Game Type Definitions

export interface GameStats {
  economy: number;
  social: number;
  technology: number;
  environment: number;
}

export interface PhaseData {
  id: number;
  title: string;
  description: string;
  yearStart: number;
  yearEnd: number;
  gameType: 'budget-allocation' | 'tech-tree' | 'network-building' | 'sustainability';
  challenge: {
    title: string;
    description: string;
    lesson: string;
  };
}

export interface BudgetAllocation {
  automation: number;
  training: number;
  social: number;
  research: number;
}

export interface TechProgress {
  ai: number;
  iot: number;
  renewable: number;
  biotech: number;
  selectedTechs: string[];
  budget: number;
}

export interface NetworkState {
  connectedRegions: string[];
  totalCost: number;
  regionCosts: {
    north: number;
    central: number;
    south: number;
  };
}

export interface SustainabilityState {
  balance: number;
  selectedPolicies: string[];
}

export interface PhaseResult {
  phaseId: number;
  score: number;
  statsChange: Partial<GameStats>;
  budgetChange: number;
  data: BudgetAllocation | TechProgress | NetworkState | SustainabilityState;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  hint: string;
  icon: string;
  unlocked: boolean;
}

export interface GameSettings {
  volume: number;
  musicEnabled: boolean;
  soundEnabled: boolean;
  autosaveEnabled: boolean;
}

export interface GameState {
  currentPhase: number;
  currentYear: number;
  budget: number;
  baseBudget: number;
  budgetHistory: number[];
  stats: GameStats;
  phaseResults: PhaseResult[];
  lessonHistory: string[];
  totalScore: number;
  startTime?: number;
  endTime?: number;
}

export interface SaveData {
  version: string;
  timestamp: number;
  gameState: GameState;
  achievements: Achievement[];
  settings: GameSettings;
}

export type EndingType = 'success' | 'warning' | 'failure';

export type GradeType = 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D';
