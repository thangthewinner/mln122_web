# Testing Guide - Website MLN122

## 🧪 Hướng Dẫn Test Website

### Prerequisites
```bash
cd /home/thangnt/Projects/SelfProjects/mln122
npm run dev
```

Server sẽ chạy tại: `http://localhost:3000` hoặc `http://localhost:3001`

---

## ✅ Checklist Test Toàn Bộ

### 1. **Hero Section** (Trang chủ)
- [ ] Animation fade-in title mượt mà
- [ ] Câu hỏi kiến tạo xuất hiện sau 2 giây
- [ ] Scroll indicator hoạt động
- [ ] Click "Khám phá câu chuyện" scroll xuống Theory

### 2. **Theory Section** (Lý luận)
- [ ] 4 tabs chuyển đổi mượt mà
- [ ] Nội dung hiển thị đầy đủ
- [ ] Citation hiển thị: "📚 Nguồn: Giáo trình..."
- [ ] Quote Marx hiển thị đúng

### 3. **Definition Section** (Đứt gãy)
- [ ] Text "khả năng tiếp cận" (KHÔNG phải "доступ")
- [ ] 3 mục đánh số rõ ràng
- [ ] Animation floating elements
- [ ] Quote cuối hiển thị đúng

### 4. **Impact Section** (Tác động) ⚠️ QUAN TRỌNG
- [ ] **Counter 1**: Animate từ 0 → **150** ("+150%")
- [ ] **Counter 2**: Animate từ 0 → **45** ("$ 45 tỷ USD")
- [ ] **Counter 3**: Animate từ 0 → **70** ("70%")
- [ ] **Counter 4**: Animate từ 0 → **1.2** ("1.2 triệu")
- [ ] Nguồn hiển thị dưới mỗi counter
- [ ] Animation smooth và easing đúng
- [ ] Kết thúc đúng giá trị (không bị 149 hoặc 151)

**Cách test Counter:**
1. Mở browser console (F12)
2. Scroll từ từ xuống Impact Section
3. Quan sát counter bắt đầu animate khi vào viewport
4. Counter phải chạy mượt trong 2-3 giây
5. Kết thúc đúng giá trị

**Nếu Counter vẫn là 0:**
- Hard refresh: Ctrl+Shift+R (Windows) hoặc Cmd+Shift+R (Mac)
- Xóa cache browser
- Kiểm tra Console có error không

### 5. **Case Studies Section** (Thực trạng)
- [ ] Carousel có 3 slides
- [ ] Arrow prev/next hoạt động
- [ ] Dots indicator hoạt động
- [ ] VinFast: "Nhà máy... độ tự động hóa cao"
- [ ] Nguồn: "VinFast Press Release, Q4/2024"
- [ ] SME: Nguồn "VITAS, 2024"
- [ ] Nông nghiệp: Nguồn "Bộ NN & PTNT"

### 6. **Solutions Section** (Giải pháp)
- [ ] Accordion mở/đóng mượt mà
- [ ] 3 solutions đầy đủ
- [ ] Nội dung chi tiết hiển thị
- [ ] Call-to-action cuối hiển thị

### 7. **Game Section** (Tương tác)
- [ ] Welcome screen hiển thị
- [ ] Achievement counter: 0/12
- [ ] Button "Trò chơi mới" hoạt động
- [ ] Tutorial modal mở/đóng
- [ ] **Phase 1** - Budget Allocation:
  - [ ] 4 sliders hoạt động
  - [ ] Tổng = 100% validation
  - [ ] Submit button enable/disable đúng
- [ ] **Phase 2** - Tech Tree:
  - [ ] 4 tech cards clickable
  - [ ] Budget tracking đúng
  - [ ] Selected state highlight
- [ ] **Phase 3** - Network Builder:
  - [ ] 3 regions clickable
  - [ ] Coverage % tăng
  - [ ] Connection animation
- [ ] **Phase 4** - Sustainability:
  - [ ] Slider hoạt động 0-100
  - [ ] Policy checkboxes
  - [ ] Balance label thay đổi
- [ ] Lesson panel hiển thị sau mỗi phase
- [ ] Results screen với grade A+ → D
- [ ] Play again hoạt động

### 8. **References Section** (Nguồn)
- [ ] 14 nguồn tham khảo hiển thị
- [ ] 4 categories rõ ràng
- [ ] Hover effect hoạt động
- [ ] Disclaimer box hiển thị

### 9. **AI Appendix**
- [ ] 4 boxes: Minh bạch, Trách nhiệm, Sáng tạo, Liêm chính
- [ ] Nội dung đầy đủ
- [ ] Color coding đúng

### 10. **Footer** (Kết luận)
- [ ] Message chính rõ ràng
- [ ] Link AI Appendix hoạt động
- [ ] Copyright hiển thị

### 11. **Navigation**
- [ ] Sticky navbar hoạt động
- [ ] Active section highlighting
- [ ] All 10 links hoạt động:
  - Trang chủ, Lý luận, Định nghĩa, Tác động
  - Thực trạng, Giải pháp, Tương tác
  - Nguồn, Kết luận, Phụ lục AI
- [ ] Mobile menu hoạt động
- [ ] Smooth scroll

---

## 🐛 Common Issues & Fixes

### Issue 1: Counter vẫn hiển thị 0
**Symptoms:** Số không tăng lên
**Possible causes:**
- Browser cache
- JavaScript error
- Animation không trigger

**Fix:**
```bash
# 1. Hard refresh browser
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)

# 2. Clear cache
# Chrome: Settings → Privacy → Clear browsing data

# 3. Check console
F12 → Console tab → Look for errors

# 4. Rebuild project
npm run build
npm run dev
```

### Issue 2: Game không load
**Fix:**
- Check GameContext provider wrapper
- Verify all mini-game components imported
- Check browser console for errors

### Issue 3: Animations choppy
**Fix:**
- Reduce `prefers-reduced-motion` in OS settings
- Check GPU acceleration in browser
- Close other tabs/applications

---

## 📱 Mobile Testing

### Devices to test:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Edge)

### Mobile-specific checks:
- [ ] Counters visible and animated
- [ ] Game sliders work with touch
- [ ] Carousel swipeable
- [ ] Navbar hamburger menu
- [ ] All sections readable
- [ ] No horizontal scroll

---

## ⚡ Performance Testing

### Lighthouse Audit:
```bash
# Run in Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Performance"
4. Click "Generate report"
```

**Target scores:**
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

---

## 🎯 Critical Path Testing

**Priority 1 - MUST WORK:**
1. ✅ Counter animations in Impact Section
2. ✅ Game full flow (all 4 phases)
3. ✅ Navigation smooth scrolling
4. ✅ No JavaScript errors

**Priority 2 - SHOULD WORK:**
1. ✅ All animations smooth
2. ✅ Mobile responsive
3. ✅ References section complete
4. ✅ Carousel in case studies

**Priority 3 - NICE TO HAVE:**
1. ✅ Hover effects
2. ✅ Loading states
3. ✅ Tutorial modal

---

## 📊 Test Results Log

### Test Date: [Fill in date]
### Tester: [Your name]
### Browser: [Chrome/Firefox/Safari]
### Device: [Desktop/Mobile]

| Section | Status | Notes |
|---------|--------|-------|
| Hero | ⬜ Pass / ❌ Fail | |
| Theory | ⬜ Pass / ❌ Fail | |
| Definition | ⬜ Pass / ❌ Fail | |
| **Impact (Counters)** | ⬜ Pass / ❌ Fail | **CRITICAL** |
| Case Studies | ⬜ Pass / ❌ Fail | |
| Solutions | ⬜ Pass / ❌ Fail | |
| **Game** | ⬜ Pass / ❌ Fail | **CRITICAL** |
| References | ⬜ Pass / ❌ Fail | |
| AI Appendix | ⬜ Pass / ❌ Fail | |
| Footer | ⬜ Pass / ❌ Fail | |
| Navigation | ⬜ Pass / ❌ Fail | |

---

## 🚀 Pre-Presentation Checklist

**1 hour before presentation:**
- [ ] Fresh `npm run dev` on presentation laptop
- [ ] Test all counters working
- [ ] Test game flow once through
- [ ] Open browser to homepage
- [ ] Full screen mode (F11)
- [ ] Close other tabs
- [ ] Disable notifications
- [ ] Test internet connection (if using external resources)

**Have backup:**
- [ ] Screenshots of all sections
- [ ] Video recording of game flow
- [ ] PDF export of content

---

## 📝 Notes

Counter animation uses:
- `useInView` from Framer Motion
- `requestAnimationFrame` for smooth 60fps
- Easing: `easeOutQuart`
- Duration: 2-3 seconds
- Trigger: When 50% of component is in viewport

If counters still don't work after all fixes, check:
1. Framer Motion version compatibility
2. React strict mode (may cause double render)
3. Browser DevTools → Performance tab → Record scroll

---

**Last Updated:** 2025-10-23  
**Status:** Ready for testing
