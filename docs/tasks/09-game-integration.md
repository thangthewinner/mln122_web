# Game Integration Tasks: Việt Nam 2045 - Cuộc Đua Vượt Đứt Gãy Công Nghệ

**Feature:** Mục 7 - Interactive Game "Việt Nam 2045"  
**Priority:** HIGH - Critical for presentation engagement  
**Estimated Time:** 6-8 days  
**Source:** MVP từ `/test_game/Mini_game_MLN122/`

---

## 📋 Overview

Tích hợp game "Việt Nam 2045 v2.0" vào website Next.js, bao gồm 4 mini-games tương tác:
1. 💰 Budget Allocation (Phân bổ ngân sách)
2. 🚀 Tech Tree Selection (Chọn công nghệ)
3. 📡 Network Building (Kết nối mạng)
4. ⚖️ Sustainability Balance (Cân bằng bền vững)

---

## 🎯 Phase 1: Architecture & Setup (Day 1)

### **TASK 1.1: Analyze Existing MVP**
**Priority:** HIGH | **Time:** 2 hours | **Dependencies:** None

- [ ] Review HTML structure từ `index.html` (496 lines)
- [ ] Analyze JavaScript logic từ `script.js` (1356 lines)
- [ ] Examine enhancements từ `game-enhancements.js` (20KB)
- [ ] Study CSS styling từ `styles.css` (30KB)
- [ ] Document dependencies và third-party libraries
  - Font Awesome 6.4.0
  - Google Fonts (Roboto)
  - HTML5 Audio API
  - LocalStorage API
  - Canvas 2D Context

**Deliverable:** Architecture analysis document với component mapping

---

### **TASK 1.2: Component Architecture Design**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** 1.1

- [ ] Thiết kế component structure cho React/Next.js
- [ ] Plan state management strategy (React Context hoặc Zustand)
- [ ] Identify reusable UI components
- [ ] Design TypeScript interfaces cho game state
- [ ] Plan animation migration (CSS → Framer Motion)

**Component Structure:**
```
components/game/
├── GameContainer.tsx          # Main game wrapper
├── GameWelcome.tsx            # Welcome screen
├── GamePhase.tsx              # Phase container
├── GameStats.tsx              # Stats display (4 indicators)
├── GameProgress.tsx           # Progress bar & year tracker
├── minigames/
│   ├── BudgetAllocation.tsx   # Phase 1 game
│   ├── TechTree.tsx           # Phase 2 game
│   ├── NetworkBuilder.tsx     # Phase 3 game
│   └── SustainabilityBalance.tsx # Phase 4 game
├── GameResults.tsx            # End screen với scoring
├── GameSettings.tsx           # Settings panel
├── GameTutorial.tsx           # Tutorial overlay
└── ui/
    ├── AchievementToast.tsx   # Achievement notifications
    ├── StatBar.tsx            # Stat progress bar
    └── GameButton.tsx         # Styled game buttons
```

**Deliverable:** Component diagram và TypeScript interfaces

---

### **TASK 1.3: Setup Game Context & State Management**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** 1.2

- [ ] Create `GameContext.tsx` với React Context
- [ ] Define TypeScript interfaces cho game state:
  ```typescript
  interface GameState {
    currentPhase: number;
    currentYear: number;
    budget: number;
    stats: GameStats;
    achievements: Achievement[];
    settings: GameSettings;
    history: PhaseHistory[];
  }
  
  interface GameStats {
    economy: number;
    social: number;
    technology: number;
    environment: number;
  }
  ```
- [ ] Implement state actions (updateStats, nextPhase, etc.)
- [ ] Setup LocalStorage integration cho save/load
- [ ] Create custom hooks: `useGameState()`, `useAchievements()`

**Deliverable:** `context/GameContext.tsx` với full type definitions

---

## 🎨 Phase 2: Core UI Components (Day 2-3)

### **TASK 2.1: GameContainer & Layout**
**Priority:** HIGH | **Time:** 4 hours | **Dependencies:** 1.3

- [ ] Create main `GameSection.tsx` component (thay thế placeholder trong page.tsx)
- [ ] Implement responsive layout với Tailwind
- [ ] Add gradient backgrounds matching design system
- [ ] Setup screen navigation logic (welcome → game → results)
- [ ] Integrate với existing Navbar scroll behavior

**Integration Point:**
```tsx
// app/page.tsx
<section id="game" className="section">
  <GameSection />
</section>
```

**Deliverable:** Working game section container

---

### **TASK 2.2: Welcome Screen Component**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** 2.1

- [ ] Convert HTML welcome screen → `GameWelcome.tsx`
- [ ] Add Framer Motion animations (logo pulse, fade-in)
- [ ] Implement game mode buttons:
  - 🚀 Trò chơi mới
  - 📂 Tiếp tục (conditional rendering)
  - 📚 Hướng dẫn
- [ ] Achievement preview component (0/12 unlocked)
- [ ] Version badge display (v2.0)

**Design Match:** Maintain gradient background, glow effects

**Deliverable:** Animated welcome screen với state integration

---

### **TASK 2.3: Stats Display Component**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** 2.1

- [ ] Create `GameStats.tsx` với 4 stat bars
- [ ] Implement animated stat changes (Framer Motion)
- [ ] Add icons cho mỗi stat:
  - 📊 Kinh tế
  - 👥 Xã hội
  - 🔬 Công nghệ
  - 🌱 Môi trường
- [ ] Color-coded progress bars
- [ ] Real-time update animations
- [ ] Mobile-responsive layout

**Deliverable:** Dynamic stats component với animations

---

### **TASK 2.4: Progress Tracker Component**
**Priority:** MEDIUM | **Time:** 2 hours | **Dependencies:** 2.3

- [ ] Create `GameProgress.tsx` với year display
- [ ] Implement phase progress bar (1/4, 2/4, etc.)
- [ ] Add budget display với currency formatting
- [ ] Phase title và description display
- [ ] Smooth transitions giữa phases

**Deliverable:** Progress tracking UI

---

### **TASK 2.5: Settings Panel Component**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** 2.1

- [ ] Create `GameSettings.tsx` floating panel
- [ ] Volume slider (0-100) cho sound effects
- [ ] Music toggle button
- [ ] Auto-save toggle
- [ ] Reset data button với confirmation modal
- [ ] Settings persistence in LocalStorage

**Deliverable:** Fully functional settings panel

---

## 🎮 Phase 3: Mini-Game Components (Day 4-5)

### **TASK 3.1: Budget Allocation Game (Phase 1)**
**Priority:** HIGH | **Time:** 5 hours | **Dependencies:** 2.4

- [ ] Create `BudgetAllocation.tsx` component
- [ ] Implement 4 slider controls:
  - 🤖 Tự động hóa (automation)
  - 📚 Đào tạo (training)
  - 🏥 Phúc lợi xã hội (social welfare)
  - 🔬 Nghiên cứu (research)
- [ ] Real-time budget constraint validation (total = 100)
- [ ] Visual feedback cho balanced/unbalanced allocation
- [ ] Calculate impacts on 4 stats based on allocation
- [ ] Submit button với result calculation

**Scoring Logic:**
```typescript
const calculateBudgetScore = (allocation: BudgetAllocation): number => {
  // Điểm cao nếu cân bằng các lĩnh vực
  const balance = calculateBalance(allocation);
  const strategicFocus = checkStrategicFocus(allocation);
  return Math.min(95, balance * 0.6 + strategicFocus * 0.4);
};
```

**Deliverable:** Interactive budget allocation game

---

### **TASK 3.2: Tech Tree Selection Game (Phase 2)**
**Priority:** HIGH | **Time:** 5 hours | **Dependencies:** 3.1

- [ ] Create `TechTree.tsx` component
- [ ] Implement grid layout cho 4 technologies:
  - 🤖 AI & Machine Learning
  - 📡 IoT & Smart Systems
  - ♻️ Renewable Energy
  - 🧬 Biotechnology
- [ ] Multi-select interface (max 3 choices)
- [ ] Budget constraint per tech (130 budget total)
- [ ] Visual tech tree với dependency lines (optional)
- [ ] Progress indicators cho mỗi tech
- [ ] Strategic vs tactical choices scoring

**UI Design:**
- Card-based selection
- Hover effects với tech descriptions
- Selected state highlighting
- Disable unaffordable options

**Deliverable:** Tech tree selection interface

---

### **TASK 3.3: Network Building Game (Phase 3)**
**Priority:** HIGH | **Time:** 6 hours | **Dependencies:** 3.2

- [ ] Create `NetworkBuilder.tsx` component
- [ ] Implement Vietnam map visualization:
  - 🏔️ Bắc (North) - 35 tỷ
  - 🏖️ Trung (Central) - 40 tỷ
  - 🌾 Nam (South) - 30 tỷ
- [ ] Interactive region selection (click to connect)
- [ ] Visual connections với animated lines
- [ ] Budget tracking per region
- [ ] Connection validation (can afford?)
- [ ] Calculate coverage percentage

**Technical Approach:**
- SVG map of Vietnam (simplified 3 regions)
- Canvas for connection lines (optional)
- CSS-based hover states
- Framer Motion for connection animations

**Deliverable:** Interactive map-based network game

---

### **TASK 3.4: Sustainability Balance Game (Phase 4)**
**Priority:** HIGH | **Time:** 4 hours | **Dependencies:** 3.3

- [ ] Create `SustainabilityBalance.tsx` component
- [ ] Implement balance slider (0-100):
  - 0-40: Economic growth focus
  - 40-60: Balanced approach
  - 60-100: Environmental priority
- [ ] Real-time impact visualization
- [ ] Policy selection checkboxes:
  - Carbon tax
  - Green energy subsidies
  - Circular economy incentives
  - Conservation programs
- [ ] Calculate sustainability score
- [ ] Visual feedback (earth icon tilting?)

**Deliverable:** Balance-based decision making interface

---

## 🏆 Phase 4: Game Systems (Day 6)

### **TASK 4.1: Achievement System**
**Priority:** MEDIUM | **Time:** 4 hours | **Dependencies:** 3.4

- [ ] Create `AchievementSystem.ts` logic
- [ ] Implement 12 achievements từ MVP:
  1. 🎯 Bước đầu tiên
  2. 💰 Quản lý tài chính
  3. 🔬 Bậc thầy công nghệ
  4. 🤝 Người kết nối
  5. 🌱 Lãnh đạo xanh
  6. 📈 Phát triển kinh tế
  7. 👥 Hòa hợp xã hội
  8. 🚀 Đổi mới sáng tạo
  9. ⚖️ Cân bằng hoàn hảo
  10. ⚡ Học nhanh
  11. 🏆 Người hoàn thiện
  12. 🇻🇳 Việt Nam 2045
- [ ] Achievement detection logic
- [ ] Toast notification component (`AchievementToast.tsx`)
- [ ] Achievement persistence in LocalStorage
- [ ] Achievement gallery/modal display

**Deliverable:** Full achievement system với notifications

---

### **TASK 4.2: Scoring & Analytics System**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** 4.1

- [ ] Implement scoring logic cho mỗi phase:
  - Phase 1: max 95 điểm (budget allocation)
  - Phase 2: max 95 điểm (tech choices)
  - Phase 3: max 100 điểm (network coverage)
  - Phase 4: max 90 điểm (sustainability)
- [ ] Calculate final grade (A+, A, B+, B, C+, C, D)
- [ ] Track statistics:
  - Total playtime
  - Decisions made
  - Stat progression history
- [ ] History chart component (Canvas/Chart.js alternative)

**Grade Thresholds:**
```typescript
const gradeThresholds = {
  'A+': 90, 'A': 85, 'B+': 75, 
  'B': 65, 'C+': 55, 'C': 45, 'D': 0
};
```

**Deliverable:** Complete scoring and analytics

---

### **TASK 4.3: Save/Load System**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** 4.2

- [ ] Implement LocalStorage save logic
- [ ] Auto-save on phase completion
- [ ] Manual save button
- [ ] Load game state on mount
- [ ] Continue game functionality
- [ ] Handle corrupted save data
- [ ] Save multiple playthroughs (optional)

**Save Data Structure:**
```typescript
interface SaveData {
  version: string;
  timestamp: number;
  gameState: GameState;
  achievements: Achievement[];
  history: PhaseHistory[];
}
```

**Deliverable:** Persistent game state system

---

## 🎬 Phase 5: Results & Feedback (Day 7)

### **TASK 5.1: End Game Results Screen**
**Priority:** HIGH | **Time:** 4 hours | **Dependencies:** 4.2

- [ ] Create `GameResults.tsx` component
- [ ] Display final stats với comparison charts
- [ ] Show 3 ending scenarios:
  - 🌏 Thành công: High score, balanced stats
  - ⚙️ Cảnh báo: Medium score, imbalanced
  - 🏭 Thất bại: Low score, poor choices
- [ ] Personalized feedback messages
- [ ] Grade display (A+ → D)
- [ ] Achievement summary
- [ ] Play again button

**Ending Logic:**
```typescript
const determineEnding = (score: number, stats: GameStats): EndingType => {
  if (score >= 85 && allStatsAbove(stats, 70)) return 'SUCCESS';
  if (score >= 60) return 'WARNING';
  return 'FAILURE';
};
```

**Deliverable:** Comprehensive results screen

---

### **TASK 5.2: Tutorial System**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** 2.2

- [ ] Create `GameTutorial.tsx` overlay component
- [ ] Implement 3-step tutorial:
  1. 🎯 Mục tiêu game (game objectives)
  2. 📊 Theo dõi chỉ số (stat tracking)
  3. 🎮 Gameplay mechanics
- [ ] Step navigation (next/prev buttons)
- [ ] Skip tutorial option
- [ ] "Don't show again" checkbox
- [ ] Tutorial persistence in LocalStorage

**Deliverable:** Interactive tutorial system

---

### **TASK 5.3: Lesson Display System**
**Priority:** MEDIUM | **Time:** 2 hours | **Dependencies:** 3.4

- [ ] Create lesson display component
- [ ] Show lessons after each phase:
  - Phase 1: "Cân bằng đầu tư quyết định hướng phát triển"
  - Phase 2: "Lựa chọn công nghệ tạo nền tảng bền vững"
  - Phase 3: "Công nghệ chỉ có ý nghĩa khi phục vụ mọi người"
  - Phase 4: "Phát triển bền vững là chìa khóa tương lai"
- [ ] Animated lesson panel với Framer Motion
- [ ] Continue to next phase button
- [ ] Lesson history tracking

**Deliverable:** Educational feedback system

---

## 🎵 Phase 6: Polish & Enhancements (Day 8)

### **TASK 6.1: Sound System Integration**
**Priority:** LOW | **Time:** 3 hours | **Dependencies:** 4.3

- [ ] Setup sound file structure:
  - `public/sounds/background.mp3` (background music)
  - `public/sounds/click.mp3` (button click)
  - `public/sounds/success.mp3` (achievement unlock)
  - `public/sounds/phase-complete.mp3` (phase transition)
- [ ] Create `useSoundEffects()` hook
- [ ] Implement audio controls (play/pause/volume)
- [ ] Respect user settings (muted by default?)
- [ ] Optimize audio loading (preload)

**Note:** Có thể skip nếu không có audio files - add silent mode

**Deliverable:** Optional sound system

---

### **TASK 6.2: Animations & Transitions**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** 5.1

- [ ] Add Framer Motion animations cho:
  - Screen transitions (fade, slide)
  - Stat changes (spring animation)
  - Achievement unlocks (bounce, confetti)
  - Button hovers (scale, glow)
  - Phase progression (wipe transition)
- [ ] Optimize animation performance
- [ ] Add `prefers-reduced-motion` support
- [ ] Test animations on mobile

**Deliverable:** Polished animations throughout

---

### **TASK 6.3: Mobile Optimization**
**Priority:** HIGH | **Time:** 3 hours | **Dependencies:** 6.2

- [ ] Test all mini-games on mobile (320px - 768px)
- [ ] Adjust slider controls for touch
- [ ] Optimize map interactions for touch
- [ ] Ensure buttons are touch-friendly (44px min)
- [ ] Test swipe gestures
- [ ] Performance optimization for mobile

**Testing Devices:**
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- Android phones (various)

**Deliverable:** Fully mobile-responsive game

---

### **TASK 6.4: Accessibility Improvements**
**Priority:** MEDIUM | **Time:** 2 hours | **Dependencies:** 6.3

- [ ] Add ARIA labels to all interactive elements
- [ ] Keyboard navigation support
- [ ] Focus indicators on all controls
- [ ] Screen reader announcements for stat changes
- [ ] Color contrast validation (WCAG AA)
- [ ] Skip to content links

**Deliverable:** WCAG 2.1 AA compliant game

---

## 🧪 Phase 7: Testing & Integration (Day 8)

### **TASK 7.1: Component Testing**
**Priority:** MEDIUM | **Time:** 3 hours | **Dependencies:** 6.4

- [ ] Unit tests cho game logic:
  - Budget calculation
  - Tech selection validation
  - Network connection logic
  - Scoring algorithms
- [ ] Component tests với React Testing Library:
  - User interactions
  - State updates
  - Achievement triggers
- [ ] Integration tests for save/load

**Deliverable:** Test coverage >70%

---

### **TASK 7.2: End-to-End Testing**
**Priority:** HIGH | **Time:** 2 hours | **Dependencies:** 7.1

- [ ] Complete game playthrough test
- [ ] Test all 3 ending scenarios
- [ ] Verify achievement unlocks
- [ ] Test save/load functionality
- [ ] Validate scoring accuracy
- [ ] Test tutorial flow

**Deliverable:** E2E test suite

---

### **TASK 7.3: Performance Optimization**
**Priority:** MEDIUM | **Time:** 2 hours | **Dependencies:** 7.2

- [ ] Optimize bundle size (code splitting)
- [ ] Lazy load game components
- [ ] Optimize images/assets
- [ ] Reduce animation jank
- [ ] Test on low-end devices
- [ ] Lighthouse performance audit (target >90)

**Deliverable:** Optimized game performance

---

### **TASK 7.4: Integration với Main Website**
**Priority:** HIGH | **Time:** 2 hours | **Dependencies:** 7.3

- [ ] Remove placeholder content in `app/page.tsx`
- [ ] Replace with `<GameSection />` import
- [ ] Test smooth scroll to game section
- [ ] Verify Navbar active state tracking
- [ ] Test game within full page context
- [ ] Ensure no styling conflicts với other sections

**Final Integration:**
```tsx
// app/page.tsx
import GameSection from '@/components/sections/GameSection'

// Replace placeholder div
<GameSection />
```

**Deliverable:** Fully integrated game in website

---

## 📊 Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| **Engagement Rate** | >85% | % of visitors who start game |
| **Completion Rate** | >70% | % who finish all 4 phases |
| **Average Playtime** | 8-12 min | Time from start to results |
| **Mobile Playability** | >90% | Successful mobile completions |
| **Performance Score** | >90 | Lighthouse performance |
| **Achievement Unlock Rate** | >50% | Average achievements per player |

---

## 🚀 Deployment Checklist

- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Mobile responsive verified
- [ ] Accessibility audit passed
- [ ] Performance benchmarks met
- [ ] Cross-browser testing completed
- [ ] Tutorial tested với first-time users
- [ ] Save/load functionality verified
- [ ] Production build tested locally
- [ ] Documentation updated

---

## 📝 Additional Notes

### Migration Strategy:
1. **Start with core components** (GameContainer, Welcome)
2. **Build mini-games incrementally** (one at a time)
3. **Add systems layer** (achievements, scoring)
4. **Polish and optimize** (animations, performance)

### Risks & Mitigations:
- **Risk:** Canvas/SVG complexity for Vietnam map
  - **Mitigation:** Use simplified 3-region clickable divs với CSS
  
- **Risk:** Animation performance on mobile
  - **Mitigation:** Reduce-motion media query, simplified animations

- **Risk:** State management complexity
  - **Mitigation:** Use React Context, keep state flat

### Tech Stack Alignment:
- ✅ Next.js 16 App Router
- ✅ TypeScript strict mode
- ✅ Tailwind CSS (match existing design system)
- ✅ Framer Motion (already installed)
- ✅ No new dependencies needed

---

**Total Estimated Time:** 6-8 days (full-time equivalent)
**Priority:** HIGH - Core presentation feature
**Status:** Ready to implement

---

**Next Steps After Completion:**
1. User acceptance testing với target audience
2. Gather feedback và iterate
3. Prepare presentation demo flow
4. Create instructor guide for classroom use
