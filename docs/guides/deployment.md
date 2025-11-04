# Hướng Dẫn Deploy Website Miễn Phí

## 🚀 Top 5 Platforms Deploy Miễn Phí cho Next.js

---

## 1. ⭐ **VERCEL** (Khuyến nghị #1)

### Ưu điểm:
- ✅ **Được tạo bởi team Next.js** - tích hợp hoàn hảo
- ✅ Deploy tự động từ GitHub
- ✅ HTTPS miễn phí
- ✅ CDN toàn cầu
- ✅ Không giới hạn bandwidth
- ✅ Domain miễn phí: `your-project.vercel.app`
- ✅ Preview cho mỗi commit

### Giới hạn Free:
- 100 GB bandwidth/tháng (quá đủ)
- Unlimited deployments
- Commercial use OK

### Cách Deploy:

#### Bước 1: Tạo GitHub Repository
```bash
cd /home/thangnt/Projects/SelfProjects/mln122

# Initialize git (nếu chưa có)
git init
git add .
git commit -m "Initial commit: MLN122 website"

# Tạo repo trên GitHub và push
git remote add origin https://github.com/[username]/mln122.git
git branch -M main
git push -u origin main
```

#### Bước 2: Deploy trên Vercel
```bash
# Cách 1: Qua Website
1. Truy cập: https://vercel.com
2. Sign up với GitHub account
3. Click "New Project"
4. Import repository "mln122"
5. Framework preset: Next.js (tự động detect)
6. Click "Deploy"
7. Đợi 2-3 phút → Done!

# Cách 2: Qua CLI (nhanh hơn)
npm install -g vercel
vercel login
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? [Your account]
# - Link to existing project? No
# - Project name? mln122
# - Directory? ./
# - Override settings? No
# → Deploy!
```

#### Bước 3: Custom Domain (Optional)
```bash
# Free subdomain
your-project.vercel.app

# Custom domain (nếu có)
# Settings → Domains → Add domain
```

**URL mẫu:** `https://mln122.vercel.app`

---

## 2. 🟣 **NETLIFY** (Khuyến nghị #2)

### Ưu điểm:
- ✅ Deploy tự động từ GitHub
- ✅ HTTPS miễn phí
- ✅ CDN toàn cầu
- ✅ Form handling, serverless functions
- ✅ Domain miễn phí: `your-project.netlify.app`

### Giới hạn Free:
- 100 GB bandwidth/tháng
- 300 build minutes/tháng
- Unlimited sites

### Cách Deploy:

```bash
# Bước 1: Push code lên GitHub (như Vercel)

# Bước 2: Deploy qua Website
1. Truy cập: https://netlify.com
2. Sign up với GitHub
3. "Add new site" → "Import an existing project"
4. Connect to GitHub → chọn repo "mln122"
5. Build settings:
   - Build command: npm run build
   - Publish directory: .next
6. Click "Deploy"

# Hoặc dùng CLI
npm install -g netlify-cli
netlify login
netlify init

# Deploy
netlify deploy --prod
```

**URL mẫu:** `https://mln122.netlify.app`

---

## 3. 🔷 **GITHUB PAGES** (Đơn giản nhất)

### ⚠️ Lưu ý:
- Next.js cần Static Export
- Mất một số tính năng SSR
- Phù hợp cho website này (không dùng API routes)

### Cách Deploy:

#### Bước 1: Cấu hình Next.js cho Static Export
```bash
# Tạo file next.config.js
```

Sửa `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Thêm dòng này
  images: {
    unoptimized: true,  // Cần cho static export
  },
}

module.exports = nextConfig
```

#### Bước 2: Thêm GitHub Actions
Tạo `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

#### Bước 3: Enable GitHub Pages
```bash
1. Push code lên GitHub
2. Vào repo → Settings → Pages
3. Source: GitHub Actions
4. Đợi build xong
```

**URL mẫu:** `https://[username].github.io/mln122`

---

## 4. 🟠 **CLOUDFLARE PAGES**

### Ưu điểm:
- ✅ CDN siêu nhanh
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ HTTPS tự động

### Cách Deploy:
```bash
1. Truy cập: https://pages.cloudflare.com
2. Sign up
3. "Create a project"
4. Connect GitHub
5. Chọn repo "mln122"
6. Build settings:
   - Framework: Next.js
   - Build command: npm run build
   - Build output: .next
7. Deploy
```

**URL mẫu:** `https://mln122.pages.dev`

---

## 5. 🔵 **RENDER**

### Ưu điểm:
- ✅ Hỗ trợ full SSR
- ✅ Free SSL
- ✅ Auto deploy từ GitHub

### Giới hạn Free:
- 750 hours/tháng (đủ dùng)
- Sleep sau 15 phút không hoạt động

### Cách Deploy:
```bash
1. Truy cập: https://render.com
2. Sign up với GitHub
3. "New" → "Web Service"
4. Connect repo "mln122"
5. Settings:
   - Environment: Node
   - Build command: npm install && npm run build
   - Start command: npm start
6. Create Web Service
```

**URL mẫu:** `https://mln122.onrender.com`

---

## 📊 So Sánh Chi Tiết

| Platform | Tốc độ setup | Performance | Bandwidth | Custom Domain | Khuyến nghị |
|----------|--------------|-------------|-----------|---------------|-------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 100GB | ✅ Free | **#1 Tốt nhất** |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 100GB | ✅ Free | #2 |
| **GitHub Pages** | ⭐⭐⭐⭐ | ⭐⭐⭐ | 100GB | ⚠️ Cần domain | #3 Đơn giản |
| **Cloudflare** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Unlimited | ✅ Free | #2 |
| **Render** | ⭐⭐⭐ | ⭐⭐⭐ | Free tier | ✅ Free | #4 |

---

## 🎯 KHUYẾN NGHỊ CHO PROJECT NÀY

### **Chọn VERCEL** vì:
1. ✅ Next.js 16 - tương thích hoàn hảo
2. ✅ Setup cực nhanh (5 phút)
3. ✅ Performance tốt nhất
4. ✅ Free SSL + CDN
5. ✅ Auto deploy khi push code
6. ✅ Preview cho mỗi pull request

---

## 🚀 QUICK START: Deploy lên Vercel trong 5 phút

### Bước 1: Chuẩn bị code
```bash
cd /home/thangnt/Projects/SelfProjects/mln122

# Đảm bảo build thành công
npm run build

# Kiểm tra .gitignore
cat .gitignore
# Phải có:
# node_modules
# .next
# .env*.local
```

### Bước 2: Push lên GitHub
```bash
# Nếu chưa có repo
git init
git add .
git commit -m "feat: Complete MLN122 website with game"

# Tạo repo trên GitHub: https://github.com/new
# Repo name: mln122
# Public hoặc Private đều OK

# Link và push
git remote add origin https://github.com/[your-username]/mln122.git
git branch -M main
git push -u origin main
```

### Bước 3: Deploy trên Vercel
```bash
# Truy cập: https://vercel.com/signup
# Sign in with GitHub

# Import project:
1. Click "Add New..." → "Project"
2. Import Git Repository → chọn "mln122"
3. Configure Project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: npm run build (default)
   - Output Directory: .next (default)
4. Click "Deploy"

# Đợi 2-3 phút...
# ✅ Done! Website live tại: https://mln122-xxx.vercel.app
```

### Bước 4: Tùy chỉnh domain (Optional)
```bash
# Trong Vercel dashboard:
Settings → Domains → Add Domain

# Free subdomain:
your-chosen-name.vercel.app

# Custom domain (nếu bạn có):
mln122.com
```

---

## 📱 TEST SAU KHI DEPLOY

### Checklist:
- [ ] Website load thành công
- [ ] All sections hiển thị đúng
- [ ] Counter animations hoạt động
- [ ] Game chạy đầy đủ 4 phases
- [ ] Navigation mượt mà
- [ ] Mobile responsive
- [ ] HTTPS working (có ổ khóa xanh)

### Performance test:
```bash
# Google PageSpeed Insights
https://pagespeed.web.dev/

# Nhập URL website của bạn
# Target: >90 điểm
```

---

## 🔧 Troubleshooting

### Issue 1: Build failed
```bash
# Nguyên nhân: TypeScript errors hoặc missing dependencies

# Fix:
npm run type-check  # Kiểm tra lỗi TypeScript
npm run build       # Test build locally
npm ci              # Clean install dependencies
```

### Issue 2: Counter không hoạt động sau deploy
```bash
# Nguyên nhân: Framer Motion không load

# Fix: Thêm vào next.config.js
transpilePackages: ['framer-motion']
```

### Issue 3: Images không hiển thị
```bash
# Nguyên nhân: Next.js Image optimization

# Fix trong next.config.js:
images: {
  unoptimized: true
}
```

### Issue 4: Game không save
```bash
# Nguyên nhân: LocalStorage không hoạt động

# Check: Browser console for errors
# Verify: 'use client' directive ở đầu components
```

---

## 💰 Chi Phí (Tất cả FREE!)

| Platform | Free Tier | Upgrade Cost |
|----------|-----------|--------------|
| Vercel | 100GB bandwidth | $20/month Pro |
| Netlify | 100GB bandwidth | $19/month Pro |
| GitHub Pages | 100GB/month | Free forever |
| Cloudflare | Unlimited | $20/month Pro |
| Render | 750h/month | $7/month Hobby |

**Kết luận:** Website này với traffic học thuật (ước tính 1000-5000 views) sẽ **HOÀN TOÀN MIỄN PHÍ** trên bất kỳ platform nào.

---

## 🎓 Bonus: Chia Sẻ với Giảng Viên

### Sau khi deploy thành công:

```markdown
📧 Email mẫu gửi giảng viên:

Subject: [MLN122] Link Website Bài Thuyết Trình

Thưa thầy/cô,

Em là [Họ tên] - NHÓM DOVAT.

Em xin gửi thầy/cô link website bài thuyết trình về đề tài 
"Đứt Gãy Công Nghệ và Con Đường CNH, HĐH tại Việt Nam":

🔗 Website: https://mln122.vercel.app

Nội dung bao gồm:
- 7 sections nội dung học thuật với đầy đủ trích dẫn
- Game tương tác "Việt Nam 2045" (4 phases)
- 14 nguồn tham khảo uy tín
- Phụ lục AI minh bạch

Website hoạt động tốt nhất trên:
- Desktop: Chrome, Firefox, Edge
- Mobile: iOS Safari, Android Chrome

Thời lượng trải nghiệm: ~15-20 phút

Em xin cảm ơn thầy/cô!
Trân trọng,
[Tên bạn]
```

---

## 📝 Post-Deployment Checklist

- [ ] Website accessible via HTTPS
- [ ] Share link với team
- [ ] Test trên mobile
- [ ] Test trên nhiều browsers
- [ ] Add link vào GitHub README
- [ ] Bookmark link để demo
- [ ] Screenshot cho backup
- [ ] Note down deployment date

---

## 🎉 KẾT LUẬN

**Khuyến nghị cuối cùng:**
1. **Deploy lên Vercel** (5 phút, free, tốt nhất)
2. **Test kỹ** sau khi deploy
3. **Share link** với giảng viên trước buổi thuyết trình
4. **Có backup** (screenshots) phòng khi mạng lỗi

**Website của bạn sẽ có URL như:**
`https://mln122-dutgaycongnghe.vercel.app`

**Professional, Free, và Ready to Present!** 🚀

---

**Cần hỗ trợ deploy?** Comment bên dưới!

**Last updated:** 2025-10-23
