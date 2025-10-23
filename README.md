# Đứt Gãy Công Nghệ - Website Phân tích

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)

Một website scrollytelling (kể chuyện qua cuộn trang) về "Đứt gãy công nghệ và con đường CNH, HĐH tại Việt Nam" - dự án học phần Kinh tế Chính trị Mác – Lênin.

## 📋 Tổng quan

Website được thiết kế để phục vụ bài thuyết trình 15 phút về chủ đề đứt gãy công nghệ trong bối cảnh cách mạng 4.0 và quá trình công nghiệp hóa, hiện đại hóa của Việt Nam. Đây là một sản phẩm sáng tạo, khác biệt so với các bài thuyết trình slide truyền thống.

### 🎯 Đối tượng sử dụng
- **Người dùng chính:** Giảng viên
- **Người dùng phụ:** Sinh viên trong lớp

### 🏆 Tiêu chí thành công (Rubric)
- **G1: Chiều sâu Học thuật** - Nội dung lý luận chính xác từ giáo trình
- **G2: Sáng tạo & Hình thức** - Website scrollytelling với hiệu ứng động
- **G3: Tính Tương tác** - Phần tương tác thu hút >80% sinh viên tham gia
- **G4: Ứng dụng AI** - Phụ lục AI với 4 tiêu chí (Minh bạch, Trách nhiệm, Sáng tạo, Liêm chính)
- **G5: Tính Cập nhật** - Số liệu, case study cập nhật Q4/2024-Q1/2025

## 🚀 Công nghệ sử dụng

### Frontend
- **Framework:** Next.js 16 với App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Heroicons (SVG)

### Xây dựng
- **Package Manager:** npm
- **Code Quality:** ESLint, TypeScript
- **Build Tool:** Next.js Compile

## 📁 Cấu trúc dự án

```
mln122/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/        # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── TheorySection.tsx
│   │   ├── DefinitionSection.tsx
│   │   ├── ImpactSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   └── SolutionsSection.tsx
│   └── ui/              # Reusable UI components
│       ├── Tabs.tsx
│       ├── Accordion.tsx
│       ├── Carousel.tsx
│       └── Counter.tsx
├── docs/                 # Documentation
│   ├── tasks/            # Task breakdown
│   ├── prd.md           # Product Requirements
│   ├── architecture.md   # Technical Architecture
│   └── content.md       # Content Specification
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🛠️ Hướng dẫn cài đặt

### Yêu cầu hệ thống

- **Node.js:** 18.0 hoặc cao hơn
- **npm:** 9.0 hoặc cao hơn
- **Hệ điều hành:** Windows 10+, macOS 10.15+, hoặc Linux

### Các bước cài đặt

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd mln122
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Kiểm tra cài đặt**
   ```bash
   npm run type-check
   ```

## 🎮 Hướng dẫn chạy

### Development Server

Để chạy chế độ development:

```bash
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000) để xem website.

### Production Build

Để build cho production:

```bash
npm run build
```

### Chạy Production Mode

Để chạy production server:

```bash
npm start
```

### Linting

Để kiểm tra code quality:

```bash
npm run lint
```

Để kiểm tra TypeScript:

```bash
npm run type-check
```

## 📱 Các tính năng chính

### 🎨 Mục Sections

1. **Hero Section (Mục 1)**
   - Full-screen entrance với animation
   - Câu hỏi kiến tạo hiển thị sau 2 giây
   - Button scroll to explore

2. **Theory Hub (Mục 2)**
   - 4 tabs interative về lý luận Mác - Lênin
   - Khái niệm CNH, tính tất yếu, nội dung, mục tiêu
   - Academic content với citations

3. **Technology Definition (Mục 3)**
   - Giải thích khái niệm "đứt gãy công nghệ"
   - Visual placeholder cho AI-generated infographics

4. **Impact Analysis (Mục 4)**
   - 2 cột: Tích cực vs Tiêu cực
   - Animated counters cho số liệu thống kê
   - Responsive design với gradient backgrounds

5. **Case Studies (Mục 5)**
   - Interactive carousel với 3 case studies:
     - VinFast (Bước nhảy vọt)
     - SME Dệt may (Loay hoay chuyển đổi)
     - Nông nghiệp thông minh (Hy vọng từ nông thôn)

6. **Solutions (Mục 6)**
   - Accordion-style presentation
   - 3 solutions chính với detailed content
   - Interactive expand/collapse

7. **Interactive Section (Mục 7)**
   - Placeholder cho game/quiz功能
   - Note về implementation trong presentation

8. **Conclusion & AI Appendix**
   - Final message và call to action
   - Comprehensive AI transparency documentation

### 🎯 Interactive Elements

- **Smooth Scrolling Navigation:** Sticky header với active section highlighting
- **Responsive Design:** Mobile-first, tablet, desktop optimized
- **Animations:** Scroll-triggered animations với Framer Motion
- **Tab System:** Interactive theory content presentation
- **Carousel:** Touch-enabled case study navigation
- **Accordion:** Expandable solution content
- **Counter Animations:** Dynamic number counting
- **Mobile Menu:** Responsive navigation menu

### 🎨 Design Features

- **Color Scheme:** Primary (blue), Secondary (green), Accent (orange)
- **Typography:** Inter font family, responsive scaling
- **Animations:** Smooth transitions, hover effects, loading states
- **Accessibility:** WCAG 2.1 AA compliant, semantic HTML

## 📊 Performance Metrics

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** < 1MB (optimized)
- **Mobile Performance:** Fully responsive

## 🧪 Testing

### Local Testing

1. **Test trên các devices:**
   ```bash
   npm run dev
   # Test trên mobile, tablet, desktop
   ```

2. **Performance testing:**
   - Sử dụng Chrome DevTools Lighthouse
   - Kiểm tra performance metrics
   - Test trên slow networks

3. **Accessibility testing:**
   - Sử dụng axe DevTools extension
   - Keyboard navigation testing
   - Screen reader testing

### Build Testing

```bash
# Test build process
npm run build

# Start production server
npm start

# Test production build
npm run build && npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository với Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Environment Variables

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000  # Backend API URL
```

## 🤝 Hợp tác

### Branch Strategy

- `main`: Production branch
- `develop`: Development branch
- `feature/*`: Feature branches

### Commit Convention

```bash
feat: add new feature
fix: fix bug
docs: update documentation
style: update styling
refactor: code refactoring
test: add tests
```

## 📝 Ghi chú phát triển

### Tailwind CSS Configuration

- File: `tailwind.config.js`
- Custom color palette cho brand consistency
- Responsive breakpoints
- Animation utilities

### Framer Motion Usage

- Scroll-triggered animations
- Page transitions
- Component animations
- Performance optimized với `useInView`

### TypeScript

- Strict mode enabled
- Component props typed
- No `any` types
- Proper error handling

## 🔧 Troubleshooting

### Common Issues

1. **Build fails với Tailwind CSS errors**
   ```bash
   rm -rf .next
   npm run build
   ```

2. **TypeScript errors**
   ```bash
   npm run type-check
   # Fix type errors in IDE
   ```

3. **Port conflicts**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   npm run dev
   ```

4. **Dependencies issues**
   ```bash
   rm node_modules package-lock.json
   npm install
   ```

### Performance Issues

1. **Images optimization:** Sử dụng Next.js Image component
2. **Bundle analysis:** `npm run build` để xem bundle size
3. **Animation performance:** Test trên low-end devices
4. **Memory leaks:** Check React hooks dependency arrays

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👥 Team

- **Group:** NHÓM MLN122
- **Project:** Học phần Kinh tế Chính trị Mác – Lênin
- **Contact:** Faculty contact information

---

**© 2025 NHÓM MLN122. Được phát triển cho mục đích học thuật.**
