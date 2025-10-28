# Color Palette Update: Ocean Blue Theme

**Technology Stack:** Tailwind CSS, CSS Variables  
**Priority:** MEDIUM  
**Estimated Time:** 2-3 hours  

## 🎨 New Color Palette Overview

### **Design Direction**
Chuyển từ bright blue/green theme sang ocean blue theme với tông màu xanh dương chuyên nghiệp, tạo cảm giác tin cậy và công nghệ hiện đại.

### **New Color Scheme**
```
#001D39 - Navy Deep      (Darkest - backgrounds, headers)
#0A4174 - Ocean Dark     (Dark - primary elements)
#49769F - Steel Blue     (Medium - interactive elements)
#4E8EA2 - Teal Blue      (Medium-light - accents)
#6EA2B3 - Sky Blue       (Light - hover states)
#7BBDE8 - Azure Bright   (Bright - call-to-action)
#BDD8E9 - Cloud Light    (Lightest - backgrounds, subtle elements)
```

### **Color Usage Mapping**
| Color | Hex Code | Role | Usage Examples |
|-------|----------|------|----------------|
| Navy Deep | #001D39 | Primary Dark | Hero background, footer, dark sections |
| Ocean Dark | #0A4174 | Primary | Headers, primary buttons, important text |
| Steel Blue | #49769F | Secondary | Links, secondary buttons, borders |
| Teal Blue | #4E8EA2 | Accent | Interactive elements, icons |
| Sky Blue | #6EA2B3 | Light Accent | Hover states, subtle highlights |
| Azure Bright | #7BBDE8 | Call-to-Action | CTAs, active states, emphasis |
| Cloud Light | #BDD8E9 | Background | Section backgrounds, cards, subtle areas |

---

## 📋 Implementation Tasks

### **CP-01: Update Tailwind Config**
**Priority:** HIGH | **Time:** 30 minutes | **Dependencies:** None

- [ ] Update `tailwind.config.js` with new color scale
- [ ] Create custom color names for ocean theme
- [ ] Generate shades (50-950) for each color
- [ ] Remove old color schemes (old primary/secondary/accent)
- [ ] Add color documentation comments

**New Tailwind Config Structure:**
```javascript
colors: {
  ocean: {
    50: '#f0f7fb',   // Lighter than Cloud Light
    100: '#BDD8E9',  // Cloud Light
    200: '#9fc9df',  // Between Cloud and Azure
    300: '#7BBDE8',  // Azure Bright
    400: '#6EA2B3',  // Sky Blue
    500: '#4E8EA2',  // Teal Blue (primary)
    600: '#49769F',  // Steel Blue
    700: '#0A4174',  // Ocean Dark
    800: '#07315a',  // Between Ocean and Navy
    900: '#001D39',  // Navy Deep
    950: '#001429',  // Darker than Navy
  },
  // Keep neutral colors for text/backgrounds
  neutral: {
    // ... existing grayscale
  }
}
```

**Acceptance Criteria:**
- All 7 colors properly integrated into Tailwind config
- Color scale provides good contrast ratios
- Backward compatibility maintained with component classes

---

### **CP-02: Update Global CSS Variables**
**Priority:** HIGH | **Time:** 20 minutes | **Dependencies:** CP-01

- [ ] Update `app/globals.css` with CSS custom properties
- [ ] Define light mode color variables
- [ ] Define dark mode color variables (optional)
- [ ] Add semantic color names (e.g., `--color-primary`)

**Implementation:**
```css
:root {
  /* Ocean Theme Colors */
  --color-navy-deep: #001D39;
  --color-ocean-dark: #0A4174;
  --color-steel-blue: #49769F;
  --color-teal-blue: #4E8EA2;
  --color-sky-blue: #6EA2B3;
  --color-azure-bright: #7BBDE8;
  --color-cloud-light: #BDD8E9;
  
  /* Semantic Colors */
  --color-primary: var(--color-teal-blue);
  --color-primary-dark: var(--color-ocean-dark);
  --color-primary-light: var(--color-azure-bright);
  --color-background: #ffffff;
  --color-background-alt: var(--color-cloud-light);
  --color-text: var(--color-navy-deep);
  --color-text-muted: var(--color-steel-blue);
}
```

---

### **CP-03: Update Hero Section (Mục 1)**
**Priority:** HIGH | **Time:** 15 minutes | **Dependencies:** CP-01

- [ ] Update `components/sections/HeroSection.tsx`
- [ ] Change background from current to Navy Deep (#001D39)
- [ ] Update text colors for contrast
- [ ] Update button colors to Azure Bright (#7BBDE8)
- [ ] Test readability and contrast

**Changes:**
```tsx
// Background: bg-primary-900 → bg-ocean-900
// Button: bg-primary-600 → bg-ocean-300 (Azure Bright)
// Text: text-white (keep for contrast)
```

---

### **CP-04: Update Navigation Bar**
**Priority:** HIGH | **Time:** 15 minutes | **Dependencies:** CP-01

- [ ] Update `components/layout/Navbar.tsx`
- [ ] Change background to Ocean Dark (#0A4174) or transparent
- [ ] Update active link color to Azure Bright (#7BBDE8)
- [ ] Update hover states to Sky Blue (#6EA2B3)
- [ ] Test mobile menu colors

**Changes:**
```tsx
// Background: bg-white/90 → bg-ocean-700/90
// Active link: text-primary-600 → text-ocean-300
// Hover: hover:text-primary-500 → hover:text-ocean-400
```

---

### **CP-05: Update Theory Section (Mục 2)**
**Priority:** MEDIUM | **Time:** 20 minutes | **Dependencies:** CP-01

- [ ] Update `components/sections/TheorySection.tsx`
- [ ] Update tab colors to Steel Blue (#49769F)
- [ ] Active tab: Azure Bright (#7BBDE8)
- [ ] Tab content background: Cloud Light (#BDD8E9)
- [ ] Test tab switching animations with new colors

**Changes:**
```tsx
// Tab: bg-gray-200 → bg-ocean-100
// Active tab: bg-primary-600 → bg-ocean-300
// Border: border-primary-600 → border-ocean-300
```

---

### **CP-06: Update Impact Section (Mục 4)**
**Priority:** MEDIUM | **Time:** 20 minutes | **Dependencies:** CP-01

- [ ] Update `components/sections/ImpactSection.tsx`
- [ ] Positive impacts: Teal Blue (#4E8EA2) background
- [ ] Negative impacts: Keep red or use Navy Deep (#001D39)
- [ ] Counter numbers: Azure Bright (#7BBDE8)
- [ ] Icons: Steel Blue (#49769F)

**Changes:**
```tsx
// Positive card: bg-secondary-50 → bg-ocean-500/10
// Positive border: border-secondary-300 → border-ocean-500
// Counter color: text-primary-600 → text-ocean-300
```

---

### **CP-07: Update Case Studies Carousel (Mục 5)**
**Priority:** MEDIUM | **Time:** 20 minutes | **Dependencies:** CP-01

- [ ] Update `components/sections/CaseStudiesSection.tsx`
- [ ] Card backgrounds: Cloud Light (#BDD8E9)
- [ ] Card borders: Steel Blue (#49769F)
- [ ] Navigation dots: Teal Blue (#4E8EA2)
- [ ] Active dot: Azure Bright (#7BBDE8)
- [ ] Arrow buttons: Ocean Dark (#0A4174)

**Changes:**
```tsx
// Card: bg-white → bg-ocean-100
// Border: border-gray-200 → border-ocean-600
// Dots: bg-gray-300 → bg-ocean-500
// Active dot: bg-primary-600 → bg-ocean-300
```

---

### **CP-08: Update Solutions Accordion (Mục 6)**
**Priority:** MEDIUM | **Time:** 15 minutes | **Dependencies:** CP-01

- [ ] Update `components/sections/SolutionsSection.tsx`
- [ ] Accordion headers: Ocean Dark (#0A4174)
- [ ] Expanded state: Azure Bright (#7BBDE8) accent
- [ ] Content background: Cloud Light (#BDD8E9)
- [ ] Icons: Steel Blue (#49769F)

**Changes:**
```tsx
// Header: bg-gray-100 → bg-ocean-700
// Header text: text-gray-900 → text-white
// Expanded: border-l-primary-600 → border-l-ocean-300
```

---

### **CP-09: Update UI Components**
**Priority:** MEDIUM | **Time:** 30 minutes | **Dependencies:** CP-01

- [ ] Update `components/ui/Tabs.tsx`
- [ ] Update `components/ui/Accordion.tsx`
- [ ] Update `components/ui/Carousel.tsx`
- [ ] Update `components/ui/Counter.tsx`
- [ ] Ensure consistent color usage across all UI components

**Component-Specific Changes:**
- Tabs: active state → Azure Bright
- Accordion: expand icon → Teal Blue
- Carousel: controls → Ocean Dark
- Counter: numbers → Azure Bright

---

### **CP-10: Update Footer**
**Priority:** LOW | **Time:** 10 minutes | **Dependencies:** CP-01

- [ ] Update `components/layout/Footer.tsx`
- [ ] Background: Navy Deep (#001D39)
- [ ] Text: Cloud Light (#BDD8E9)
- [ ] Links: Sky Blue (#6EA2B3)
- [ ] Link hover: Azure Bright (#7BBDE8)

---

### **CP-11: Update Game Section**
**Priority:** LOW | **Time:** 15 minutes | **Dependencies:** CP-01

- [ ] Update `components/sections/GameSection.tsx`
- [ ] Update game UI colors
- [ ] Button colors: Azure Bright (#7BBDE8)
- [ ] Score display: Ocean Dark (#0A4174)
- [ ] Interactive elements: Teal Blue (#4E8EA2)

---

## ✅ Testing & Validation

### **CP-12: Accessibility Testing**
**Priority:** HIGH | **Time:** 30 minutes | **Dependencies:** All above

- [ ] Check color contrast ratios (WCAG AA minimum)
  - Text on Navy Deep: Must be white or Cloud Light
  - Text on Cloud Light: Must be Navy Deep or Ocean Dark
  - Links must have 3:1 contrast with surroundings
- [ ] Test with browser DevTools contrast checker
- [ ] Verify readability across all sections
- [ ] Test on different screen brightnesses

**Contrast Requirements:**
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- Interactive elements: 3:1 minimum

---

### **CP-13: Visual Consistency Check**
**Priority:** MEDIUM | **Time:** 20 minutes | **Dependencies:** All above

- [ ] Review all sections for color harmony
- [ ] Ensure no old colors remain (blue-600, green-600, orange-600)
- [ ] Check hover/active states consistency
- [ ] Verify gradient transitions (if any)
- [ ] Screenshot all sections for documentation

---

### **CP-14: Browser & Device Testing**
**Priority:** MEDIUM | **Time:** 20 minutes | **Dependencies:** All above

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS, Android)
- [ ] Verify colors render consistently
- [ ] Check dark mode (if implemented)
- [ ] Test print styles (optional)

---

## 📊 Color Psychology & Branding

### **Why This Palette?**
- **Navy Deep (#001D39):** Authority, professionalism, trust
- **Ocean Dark (#0A4174):** Stability, intelligence, corporate
- **Steel Blue (#49769F):** Technology, innovation, precision
- **Teal Blue (#4E8EA2):** Balance, clarity, communication
- **Sky Blue (#6EA2B3):** Openness, accessibility, calm
- **Azure Bright (#7BBDE8):** Energy, action, optimism
- **Cloud Light (#BDD8E9):** Clean, modern, spacious

### **Theme Alignment**
Bộ màu này phù hợp với:
- ✅ Chủ đề công nghệ và cách mạng 4.0
- ✅ Tính chuyên nghiệp của bài thuyết trình học thuật
- ✅ Cảm giác tin cậy và uy tín
- ✅ Tương phản tốt cho khả năng đọc

---

## 🔄 Rollback Plan

Nếu cần quay lại màu cũ:
```bash
git diff tailwind.config.js
git checkout HEAD -- tailwind.config.js
git checkout HEAD -- app/globals.css
```

Hoặc giữ backup:
```bash
cp tailwind.config.js tailwind.config.backup.js
```

---

## 📝 Documentation Updates

- [ ] Update README.md with new color palette
- [ ] Update design documentation in `docs/`
- [ ] Add color palette preview image
- [ ] Document color usage guidelines for future changes

---

**Estimated Total Time:** 4-5 hours  
**Dependencies:** None (can start immediately)  
**Priority:** MEDIUM (enhances visual identity but not critical for functionality)
