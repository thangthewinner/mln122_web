# 🚀 Triển Khai Website lên Vercel - Hướng Dẫn Chi Tiết

## ✅ Trạng Thái Hiện Tại
- ✅ Git repository đã có: `origin/main`
- ✅ Build thành công: Next.js 16.0.0
- ✅ Không có lỗi TypeScript
- ✅ Code đã clean (working tree clean)

---

## 📋 BƯỚC 1: Kiểm Tra GitHub Repository

### Kiểm tra xem code đã push lên GitHub chưa:
```bash
cd /home/thangnt/Projects/SelfProjects/mln122
git remote -v
```

**Nếu đã có remote origin:**
- Tốt! Skip sang Bước 2

**Nếu chưa có remote origin:**
```bash
# Tạo repo mới trên GitHub:
# 1. Truy cập: https://github.com/new
# 2. Repository name: mln122-dutgay-congnghe
# 3. Description: Website phân tích Đứt Gãy Công Nghệ - MLN122
# 4. Public hoặc Private: Public
# 5. Không tick "Initialize with README" (vì đã có code)
# 6. Click "Create repository"

# Sau đó chạy:
git remote add origin https://github.com/[YOUR_USERNAME]/mln122-dutgay-congnghe.git
git branch -M main
git push -u origin main
```

---

## 📋 BƯỚC 2: Đăng Ký Vercel (Nếu Chưa Có)

1. Truy cập: **https://vercel.com/signup**
2. Chọn: **Continue with GitHub**
3. Authorize Vercel access to GitHub
4. ✅ Done!

---

## 📋 BƯỚC 3: Import Project vào Vercel

### Option A: Qua Website (Khuyến nghị cho lần đầu)

1. **Truy cập Dashboard:**
   - URL: https://vercel.com/dashboard
   - Click nút **"Add New..."** → **"Project"**

2. **Import Git Repository:**
   - Tìm repository: `mln122-dutgay-congnghe` (hoặc tên repo của bạn)
   - Click **"Import"**

3. **Configure Project:**
   ```
   Project Name: mln122-dutgay-congnghe
   Framework Preset: Next.js (auto-detected)
   Root Directory: ./
   
   Build Settings:
   ├─ Build Command: npm run build
   ├─ Output Directory: .next
   └─ Install Command: npm install
   
   Environment Variables: (Không cần - để trống)
   ```

4. **Click "Deploy"**
   - Đợi 2-3 phút
   - ✅ Xong!

### Option B: Qua CLI (Nhanh hơn cho dev)

```bash
# Cài Vercel CLI
npm install -g vercel

# Login
vercel login
# → Chọn GitHub
# → Authorize trong browser

# Deploy
cd /home/thangnt/Projects/SelfProjects/mln122
vercel

# Trả lời các câu hỏi:
# ? Set up and deploy "~/Projects/SelfProjects/mln122"? [Y/n] Y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] N
# ? What's your project's name? mln122-dutgay-congnghe
# ? In which directory is your code located? ./
# Auto-detected Project Settings (Next.js):
# - Build Command: npm run build
# - Output Directory: .next
# - Development Command: npm run dev
# ? Want to override the settings? [y/N] N

# Vercel sẽ:
# 🔍 Inspect: Quét project
# 🔨 Build: Build production
# 🚀 Deploy: Upload lên CDN
# ✅ Success!
```

---

## 📋 BƯỚC 4: Kiểm Tra Deployment

Sau khi deploy xong, Vercel sẽ cho bạn URL:

```
✅ Production: https://mln122-dutgay-congnghe.vercel.app
```

### Test ngay:
1. ✅ Mở URL trong browser
2. ✅ Scroll xuống phần Impact - xem Counter có animate không
3. ✅ Test Game - chơi qua 4 phases
4. ✅ Check mobile - mở trên điện thoại
5. ✅ Performance - load nhanh không

---

## 📋 BƯỚC 5: Custom Domain (Optional)

### Free Subdomain Vercel:
- Mặc định: `mln122-dutgay-congnghe.vercel.app`
- Đổi thành tên ngắn hơn:
  ```
  1. Vercel Dashboard → Project → Settings → Domains
  2. Add domain: mln122.vercel.app
  3. Save
  ```

### Custom Domain (Nếu có):
```
1. Có domain riêng: dutgaycongnghe.com
2. Vercel → Settings → Domains → Add
3. Follow hướng dẫn config DNS
4. Đợi verify (5-10 phút)
```

---

## 📋 BƯỚC 6: Setup Auto-Deploy (Đã tự động!)

**Vercel tự động deploy khi:**
- ✅ Push code mới lên `main` branch
- ✅ Merge pull request
- ✅ Tạo preview cho mỗi branch

**Workflow:**
```bash
# 1. Sửa code
vim components/sections/HeroSection.tsx

# 2. Commit
git add .
git commit -m "fix: Update hero title"

# 3. Push
git push origin main

# 4. Vercel tự động deploy!
# → Nhận notification qua email
# → Check tại: https://vercel.com/dashboard
```

---

## 🎯 BƯỚC 7: Share Link với Giảng Viên

```markdown
Subject: [MLN122] Link Website Bài Thuyết Trình

Thưa thầy/cô,

Em xin gửi thầy/cô link website bài thuyết trình:

🔗 https://mln122-dutgay-congnghe.vercel.app

Nội dung:
- 7 sections với đầy đủ trích dẫn học thuật
- Game tương tác "Việt Nam 2045"
- 14 nguồn tham khảo
- Mobile-friendly

Thời lượng: ~15 phút

Trân trọng,
Nhóm MLN122
```

---

## 🔧 Troubleshooting

### Issue 1: Build Failed - TypeScript Error
```bash
# Check locally first
npm run type-check

# Fix errors
# Redeploy: git push
```

### Issue 2: 404 Not Found
```bash
# Kiểm tra build output
npm run build

# Verify .next directory có file
ls -la .next
```

### Issue 3: Counter không hoạt động
```bash
# Hard refresh browser
Ctrl + Shift + R

# Check browser console
F12 → Console
```

### Issue 4: Cannot find module
```bash
# Vercel Dashboard → Project → Settings
# → General → Node.js Version
# Đổi thành: 18.x

# Redeploy
```

---

## 📊 Vercel Dashboard Overview

### Sau khi deploy:
```
Vercel Dashboard
├── Deployments (Lịch sử deploy)
├── Analytics (Thống kê traffic)
├── Logs (Debug logs)
├── Settings
│   ├── Domains (Quản lý domain)
│   ├── Environment Variables (Biến môi trường)
│   └── General (Cài đặt chung)
└── Project URL
```

### Useful Links:
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

## ✅ POST-DEPLOYMENT CHECKLIST

- [ ] Website load thành công
- [ ] HTTPS (ổ khóa xanh) hoạt động
- [ ] All sections render đúng
- [ ] Counter animations work
- [ ] Game playable (4 phases)
- [ ] Mobile responsive
- [ ] References section có đủ 14 nguồn
- [ ] Share link với team
- [ ] Bookmark cho demo
- [ ] Screenshot backup

---

## 🎉 HOÀN TẤT!

**Website của bạn đã live tại:**
```
https://mln122-dutgay-congnghe.vercel.app
```

**Thông số:**
- ✅ Global CDN: Tốc độ cao
- ✅ Auto HTTPS: Bảo mật
- ✅ Auto Deploy: Mỗi khi push code
- ✅ 100% Free: Không mất phí
- ✅ Professional: Domain .vercel.app

**Ready for Presentation!** 🚀

---

## 📱 QR Code (Tạo sau deploy)

Để share dễ dàng:
1. Truy cập: https://qr-code-generator.com
2. Nhập URL: https://mln122-dutgay-congnghe.vercel.app
3. Download QR code
4. In ra hoặc show trong slide

---

**Thời gian hoàn thành:** 5-10 phút  
**Độ khó:** ⭐⭐☆☆☆ (Rất dễ)  
**Cost:** $0 (FREE forever)

---

**Need help?** Check Vercel docs hoặc hỏi lại!
