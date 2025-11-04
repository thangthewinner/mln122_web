# Task 12: Content Major Update - Theory & Case Studies Revision

**Priority:** High  
**Status:** Pending  
**Estimated Time:** 4-6 hours  
**Dependencies:** None

## 📋 Overview

Cập nhật toàn bộ nội dung lý thuyết và case studies theo yêu cầu mới từ giảng viên. Thay đổi cấu trúc tabs, nội dung học thuật, và các ví dụ thực tiễn.

---

## 🎯 Main Objectives

1. **TheorySection:** Thêm tab mới, cập nhật 3 tabs, xóa 1 tab
2. **CaseStudiesSection:** Thay SME Dệt may → Fintech
3. **ImpactSection:** Cập nhật số liệu
4. **SolutionsSection:** Loại bỏ nội dung SME
5. **Footer & AI Appendix:** Sửa hiển thị text

---

## ✅ Task Breakdown

### **12.1 - TheorySection: Restructure Tabs (CRITICAL)**

**File:** `/components/sections/TheorySection.tsx`

#### Cấu trúc tabs mới:
```
[Tab 1] Khái quát cách mạng công nghiệp (NEW)
[Tab 2] Khái quát công nghiệp hóa (RENAMED + UPDATED)
[Tab 3] Tính tất yếu (UPDATED)
[Tab 4] Nội dung (UPDATED)
[DELETED] Mục tiêu
```

#### Subtasks:

**12.1.1 - Thêm Tab 1: "Khái quát cách mạng công nghiệp"**
- [ ] Tạo tab mới với id: `industrial-revolution-overview`
- [ ] Label: "Khái quát cách mạng công nghiệp"
- [ ] Content bao gồm:
  - Khái niệm cách mạng công nghiệp
  - Bảng tóm tắt 4 lần CMCN:
    | Lần | Đặc trưng chính |
    |-----|----------------|
    | CMCN 1 | Năng lượng nước & hơi nước → Cơ khí hóa |
    | CMCN 2 | Năng lượng điện → Sản xuất hàng loạt |
    | CMCN 3 | IT & máy tính → Tự động hóa |
    | CMCN 4 | Liên kết thực - ảo → Thông minh & hiệu quả |
  - Nguồn: *Nghiên cứu của Sogeti VINT, 2016*
  - Vai trò: 3 điểm (LLSX, QHSX, quản trị)

**12.1.2 - Sửa Tab 2: "Khái niệm CNH" → "Khái quát công nghiệp hóa"**
- [ ] Đổi id: `concept` → `industrialization-overview`
- [ ] Đổi label: "Khái niệm CNH" → "Khái quát công nghiệp hóa"
- [ ] Thay toàn bộ content:
  - Khái niệm CNH mới (từ thủ công → máy móc)
  - 3 mô hình CNH tiêu biểu:
    - Mô hình cổ điển (Anh, thế kỷ XVIII)
    - Mô hình Liên Xô
    - Mô hình Nhật Bản & NICs
- [ ] Xóa các phần cũ: grid 2 cột (Công nghiệp hóa/Hiện đại hóa)

**12.1.3 - Cập nhật Tab 3: "Tính tất yếu"**
- [ ] Giữ nguyên id: `necessity` và label: "Tính tất yếu"
- [ ] Thay toàn bộ content:
  - Khái niệm CNH, HĐH mới
  - 2 lý do khách quan:
    1. Quy luật phổ biến của LLSX
    2. Xây dựng cơ sở vật chất cho CNXH
  - 4 đặc điểm CNH,HĐH ở Việt Nam:
    - Định hướng XHCN
    - Gắn kinh tế tri thức
    - Kinh tế thị trường định hướng XHCN
    - Bối cảnh toàn cầu hóa
- [ ] Xóa các phần cũ: Mâu thuẫn biện chứng, đứt gãy công nghệ

**12.1.4 - Cập nhật Tab 4: "Nội dung"**
- [ ] Giữ nguyên id: `content` và label: "Nội dung"
- [ ] Thay toàn bộ content:
  - Một là: Tạo lập điều kiện chuyển đổi
  - Hai là: Thực hiện nhiệm vụ chuyển đổi
    - 4 bullet points:
      - Ứng dụng KH-CN mới
      - Chuyển đổi cơ cấu kinh tế
      - Hoàn thiện QHSX
      - Thích ứng CMCN 4.0
- [ ] Xóa các phần cũ: Grid 3 cột với icon số

**12.1.5 - Xóa Tab 5: "Mục tiêu"**
- [ ] Xóa hoàn toàn object tab có id: `objectives`
- [ ] Verify không còn reference nào đến tab này
- [ ] Test navigation và defaultTab

---

### **12.2 - CaseStudiesSection: Replace SME → Fintech**

**File:** `/components/sections/CaseStudiesSection.tsx`

#### Subtasks:

**12.2.1 - Tìm và xóa Case Study "SME Dệt may"**
- [ ] Xóa object case study có title chứa "SME" hoặc "Dệt may"
- [ ] Thường ở index [1] trong array `caseStudies`

**12.2.2 - Thêm Case Study "Fintech"**
- [ ] Vị trí: Index [1] (giữa VinFast và Nông nghiệp)
- [ ] Data structure:
```typescript
{
  id: 'fintech',
  title: 'Fintech – Tài chính trong kỷ nguyên số',
  subtitle: 'Ứng dụng AI và Blockchain',
  description: 'Công nghệ tài chính (Fintech) đang tạo ra bước đứt gãy mạnh mẽ trong ngành ngân hàng truyền thống, giúp người dùng tiếp cận dịch vụ tài chính nhanh, rẻ và minh bạch hơn.',
  stats: [
    { label: 'Thanh toán, chuyển tiền tức thì', value: 'Ví điện tử & ngân hàng số' },
    { label: 'AI phân tích hành vi', value: 'Cá nhân hóa dịch vụ KH' },
    { label: 'Blockchain', value: 'Bảo mật & giảm chi phí' }
  ],
  source: 'Nguồn: Ngân hàng Nhà nước Việt Nam, Báo cáo Chuyển đổi số 2024.',
  image: '/images/fintech.jpg', // Placeholder
  color: 'from-green-500 to-teal-500'
}
```
- [ ] Verify carousel hiển thị đúng 3 items
- [ ] Test navigation giữa các case studies

---

### **12.3 - ImpactSection: Update Statistics**

**File:** `/components/sections/ImpactSection.tsx`

#### Subtasks:

**12.3.1 - Tìm và sửa stat "70% SME"**
- [ ] Tìm trong array `stats` hoặc `positiveImpacts`/`negativeImpacts`
- [ ] Stat hiện tại: `"70% SME chưa chuyển đổi số"`
- [ ] Stat mới: `"80% Fintech (thanh toán số)"`
- [ ] Kiểm tra cột (Tích cực/Tiêu cực) - nên ở cột Tích cực
- [ ] Verify counter animation hoạt động với số mới

**12.3.2 - Verify các stats khác không đổi**
- [ ] 90% Tự động hóa VinFast (giữ nguyên)
- [ ] 30-40% Năng suất tăng Nông nghiệp số (giữ nguyên)

---

### **12.4 - SolutionsSection: Remove SME Support**

**File:** `/components/sections/SolutionsSection.tsx`

#### Subtasks:

**12.4.1 - Tìm và xóa nội dung SME**
- [ ] Tìm trong accordion items hoặc solutions array
- [ ] Xóa các items sau:
  - "Quỹ hỗ trợ SME số vốn 500 tỷ"
  - "Chương trình 'Doanh nghiệp lớn kèm SME'"
  - "Trung tâm chuyển giao công nghệ miễn phí cho SME"
- [ ] Kiểm tra xem có section title "Chính sách hỗ trợ SME & Nông thôn" không

**12.4.2 - Đổi title nếu cần**
- [ ] Nếu có title "SME & Nông thôn" → đổi thành "Nông thôn"
- [ ] Giữ nguyên toàn bộ nội dung liên quan đến Nông thôn

**12.4.3 - Verify accordion vẫn hoạt động**
- [ ] Test expand/collapse
- [ ] Kiểm tra không còn reference đến SME

---

### **12.5 - Footer: Replace "VN" with Flag/Text**

**File:** `/components/layout/Footer.tsx`

#### Subtasks:

**12.5.1 - Tìm text "VN"**
- [ ] Grep toàn bộ footer để tìm "VN"
- [ ] Thường trong phần "Chìa khóa thành công: Đồng bộ 3 trụ cột"

**12.5.2 - Thay thế**
- [ ] Option 1 (preferred): Dùng emoji flag `🇻🇳`
- [ ] Option 2 (fallback): Dùng text `"Việt Nam"`
- [ ] Test hiển thị trên các browsers

---

### **12.6 - AI Appendix: Remove English Text**

**File:** `/app/page.tsx` (hoặc `/components/sections/ReferencesSection.tsx`)

#### Subtasks:

**12.6.1 - Locate AI Appendix section**
- [ ] Tìm section có id: `ai-appendix`
- [ ] Thường nằm trong `page.tsx` cuối file

**12.6.2 - Remove English in parentheses**
- [ ] Xóa: `(Transparency)` → Giữ: `🔍 Minh bạch`
- [ ] Xóa: `(Responsibility)` → Giữ: `⚖️ Trách nhiệm`
- [ ] Xóa: `(Creativity)` → Giữ: `🎨 Sáng tạo`
- [ ] Xóa: `(Integrity)` → Giữ: `🤝 Liêm chính`
- [ ] Verify icons (emoji) vẫn hiển thị

---

## 🧪 Testing Checklist

### Functional Testing
- [ ] **TheorySection:**
  - [ ] 4 tabs hiển thị đúng thứ tự
  - [ ] Tab "Mục tiêu" không còn tồn tại
  - [ ] Default tab mở đúng (tab 1)
  - [ ] Tab switching hoạt động smooth
  - [ ] Bảng CMCN hiển thị đúng format
  - [ ] Scroll animation trigger đúng

- [ ] **CaseStudiesSection:**
  - [ ] Carousel có 3 items (VinFast, Fintech, Nông nghiệp)
  - [ ] Fintech hiển thị đầy đủ: title, stats, source
  - [ ] Navigation prev/next hoạt động
  - [ ] Touch swipe hoạt động (mobile)
  - [ ] Auto-play (nếu có) hoạt động

- [ ] **ImpactSection:**
  - [ ] Stat "80% Fintech" hiển thị đúng cột
  - [ ] Counter animation chạy đúng từ 0 → 80
  - [ ] Các stats khác không bị ảnh hưởng

- [ ] **SolutionsSection:**
  - [ ] Không còn mention "SME" trong content
  - [ ] Nội dung Nông thôn vẫn đầy đủ
  - [ ] Accordion expand/collapse hoạt động

- [ ] **Footer:**
  - [ ] "VN" đã được thay bằng 🇻🇳 hoặc "Việt Nam"
  - [ ] Layout không bị lỗi

- [ ] **AI Appendix:**
  - [ ] Không còn text tiếng Anh trong ngoặc
  - [ ] Icons (emoji) hiển thị đúng
  - [ ] 4 sections vẫn đầy đủ

### Content Accuracy
- [ ] Kiểm tra chính tả tiếng Việt
- [ ] Verify tất cả nguồn trích dẫn đúng format
- [ ] Kiểm tra số liệu phù hợp với context
- [ ] Đảm bảo tone học thuật nhất quán

### Visual & Responsive
- [ ] Desktop (1920x1080): Layout chuẩn
- [ ] Tablet (768px): Responsive đúng
- [ ] Mobile (375px): Touch-friendly
- [ ] Dark mode (nếu có): Colors hợp lý

### Performance
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Animation không lag
- [ ] Images optimize (nếu thêm fintech.jpg)

---

## 📝 Implementation Notes

### Thứ tự thực hiện đề xuất:
1. **TheorySection** (quan trọng nhất, mất nhiều thời gian nhất)
2. **CaseStudiesSection** (thay case study)
3. **ImpactSection** (thay số liệu)
4. **SolutionsSection** (xóa SME)
5. **Footer + AI Appendix** (thay đổi nhỏ)

### Backup Strategy:
```bash
# Trước khi edit, backup các file quan trọng
cp components/sections/TheorySection.tsx components/sections/TheorySection.tsx.backup
cp components/sections/CaseStudiesSection.tsx components/sections/CaseStudiesSection.tsx.backup
cp components/sections/ImpactSection.tsx components/sections/ImpactSection.tsx.backup
cp components/sections/SolutionsSection.tsx components/sections/SolutionsSection.tsx.backup
```

### Content Sources:
- Update_1.md: Toàn bộ nội dung chi tiết
- Giáo trình KTCT Mác-Lênin: Reference học thuật
- Báo cáo Chuyển đổi số 2024: Stats Fintech

---

## 🚨 Potential Issues & Solutions

### Issue 1: Bảng CMCN không responsive
**Solution:** Dùng `overflow-x-auto` wrapper cho table trên mobile

### Issue 2: Tab content quá dài
**Solution:** Thêm scroll indicator hoặc pagination cho từng tab

### Issue 3: Fintech image placeholder
**Solution:** 
- Short-term: Dùng gradient background
- Long-term: Tìm stock image phù hợp license

### Issue 4: Counter animation 80% chạy quá nhanh
**Solution:** Adjust duration trong Counter component:
```typescript
duration: value > 50 ? 2.5 : 2 // Seconds
```

### Issue 5: Flag emoji 🇻🇳 không hiển thị trên một số browsers cũ
**Solution:** Fallback sang text "Việt Nam" với conditional rendering

---

## ✅ Definition of Done

- [ ] Tất cả 6 main tasks hoàn thành
- [ ] Testing checklist pass 100%
- [ ] TypeScript compile không errors
- [ ] ESLint pass
- [ ] Git commit với message rõ ràng
- [ ] Deploy preview link test thành công
- [ ] Giảng viên review và approve nội dung
- [ ] Documentation cập nhật (nếu cần)

---

## 📊 Progress Tracking

| Task | Status | Time Spent | Notes |
|------|--------|------------|-------|
| 12.1 - TheorySection | ⏳ Pending | 0h | Quan trọng nhất |
| 12.2 - CaseStudies | ⏳ Pending | 0h | |
| 12.3 - ImpactSection | ⏳ Pending | 0h | |
| 12.4 - SolutionsSection | ⏳ Pending | 0h | |
| 12.5 - Footer | ⏳ Pending | 0h | |
| 12.6 - AI Appendix | ⏳ Pending | 0h | |
| Testing | ⏳ Pending | 0h | |

**Total Estimated:** 4-6 hours  
**Actual Time:** TBD

---

## 🔗 Related Files

- `/components/sections/TheorySection.tsx` - Main file cần edit nhiều nhất
- `/components/sections/CaseStudiesSection.tsx` - Thay case study
- `/components/sections/ImpactSection.tsx` - Đổi số liệu
- `/components/sections/SolutionsSection.tsx` - Xóa SME
- `/components/layout/Footer.tsx` - Sửa VN → 🇻🇳
- `/app/page.tsx` - AI Appendix section
- `/docs/Update_1.md` - Source document
- `/docs/core/content.md` - Cần update theo thay đổi

---

**Created:** 2025-11-04  
**Last Updated:** 2025-11-04  
**Assignee:** TBD  
**Reviewer:** Giảng viên + Team Lead
