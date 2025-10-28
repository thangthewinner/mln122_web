# 🚀 DEPLOY LÊN VERCEL - 5 PHÚT

## ✅ Sẵn Sàng Deploy

Tôi đã kiểm tra project của bạn:
- ✅ GitHub repo: `thangthewinner/mln122_web` 
- ✅ Build successful: Next.js 16.0.0
- ✅ No TypeScript errors
- ✅ Working tree clean

**→ READY TO DEPLOY!**

---

## 🎯 CÁCH 1: Deploy qua Web UI (KHUYẾN NGHỊ)

### Bước 1: Truy cập Vercel
1. Mở browser
2. Truy cập: **https://vercel.com/login**
3. Click: **Continue with GitHub**
4. Login GitHub account: `thangthewinner`
5. Authorize Vercel (nếu chưa)

### Bước 2: Import Project
1. Sau khi login → Dashboard
2. Click nút: **"Add New..."** → **"Project"**
3. Tab **"Import Git Repository"**
4. Tìm repo: **`mln122_web`**
5. Click: **"Import"**

### Bước 3: Configure & Deploy
```
Configure Project:

┌─────────────────────────────────────┐
│ Project Name                        │
│ mln122-web                         │ ← Có thể đổi tên
├─────────────────────────────────────┤
│ Framework Preset                    │
│ Next.js  [Auto-detected ✓]        │
├─────────────────────────────────────┤
│ Root Directory                      │
│ ./                                  │
├─────────────────────────────────────┤
│ Build Command                       │
│ npm run build                       │
├─────────────────────────────────────┤
│ Output Directory                    │
│ .next                               │
├─────────────────────────────────────┤
│ Install Command                     │
│ npm install                         │
└─────────────────────────────────────┘

Environment Variables: [Leave Empty - Không cần]
```

6. Click nút to: **"Deploy"**
7. ☕ Đợi 2-3 phút...
8. ✅ **SUCCESS!**

---

## 🎉 Kết Quả

Sau khi deploy xong, bạn sẽ nhận được:

```
🎊 Congratulations!

✅ Your project is live at:
   https://mln122-web.vercel.app

📊 View Deployment:
   https://vercel.com/thangthewinner/mln122-web

🔄 Auto-deploy enabled:
   Push code → Auto deploy
```

---

## 🧪 TEST NGAY

### Mở URL và kiểm tra:
```bash
✅ Website load
✅ HTTPS (ổ khóa xanh)
✅ Scroll xuống Impact Section
✅ Counter animate: 0 → 150, 0 → 45, 0 → 70, 0 → 1.2
✅ Click "Tương tác" → Test game
✅ Play qua 4 phases
✅ Check References section (14 nguồn)
✅ Mobile: Mở trên điện thoại
```

---

## 🎯 CÁCH 2: Deploy qua CLI (Nếu muốn)

Nếu bạn muốn dùng command line:

```bash
# 1. Cài Vercel CLI
npm install -g vercel

# 2. Login
vercel login
# → Chọn GitHub
# → Authorize trong browser

# 3. Deploy
cd /home/thangnt/Projects/SelfProjects/mln122
vercel

# 4. Trả lời prompts:
# ? Set up and deploy? Y
# ? Which scope? [Your account]
# ? Link to existing? N
# ? Project name? mln122-web
# ? Directory? ./
# ? Override settings? N

# 5. Done!
```

---

## 📱 SHARE LINK

### Sau khi deploy xong:

**URL chính thức:**
```
https://mln122-web.vercel.app
hoặc
https://mln122-web-[random].vercel.app
```

### Gửi cho giảng viên:
```
📧 Email Template:

Subject: [MLN122] Website Bài Thuyết Trình - Đứt Gãy Công Nghệ

Thưa thầy/cô,

Em là [Tên] - Nhóm DOVAT.

Em xin gửi link website bài thuyết trình:
🔗 https://mln122-web.vercel.app

📋 Nội dung:
- 7 sections phân tích học thuật
- Game "Việt Nam 2045" (4 giai đoạn)
- 14 nguồn tham khảo uy tín
- Responsive mobile & desktop

⏱️ Thời lượng: ~15 phút

Website hoạt động tốt nhất trên Chrome/Firefox.

Em xin cảm ơn thầy/cô!
Nhóm DOVAT
```

---

## 🔄 AUTO-DEPLOY (Đã bật sẵn!)

Mỗi khi bạn push code:
```bash
# 1. Sửa code
vim components/sections/HeroSection.tsx

# 2. Commit & push
git add .
git commit -m "fix: Update content"
git push origin main

# 3. Vercel tự động:
# ✓ Detect push
# ✓ Build
# ✓ Deploy
# ✓ Send email notification
```

---

## 🎨 Custom Domain (Optional)

### Đổi sang tên ngắn hơn:
```
1. Vercel Dashboard → Project → Settings
2. Tab "Domains"
3. Add: mln122.vercel.app
4. Save

→ New URL: https://mln122.vercel.app
```

### Domain riêng (nếu có):
```
1. Add domain: dutgaycongnghe.com
2. Config DNS theo hướng dẫn
3. Wait 5-10 phút
4. Done!
```

---

## 🐛 Nếu Có Lỗi

### Error: "Build Failed"
```bash
# Test build locally:
npm run build

# Nếu OK → Redeploy trên Vercel
# Click "Redeploy" button
```

### Error: "404 Not Found"
```bash
# Kiểm tra Output Directory:
# Phải là: .next
# Không phải: out hoặc build
```

### Counter không hoạt động sau deploy:
```bash
# 1. Hard refresh: Ctrl + Shift + R
# 2. Clear cache
# 3. Mở Incognito window
# 4. Check console (F12) xem có lỗi không
```

---

## 📊 Vercel Features (All Free!)

```
✅ Global CDN: 20+ regions
✅ Auto HTTPS: SSL certificate
✅ Auto Deploy: On git push
✅ Preview URLs: For each PR
✅ Analytics: Traffic stats
✅ 100GB Bandwidth: Per month
✅ Unlimited Deployments
✅ Custom Domains: Free
```

---

## 🎯 CHECKLIST

Sau khi deploy:
- [ ] Website live và access được
- [ ] HTTPS working (ổ khóa xanh)
- [ ] All sections hiển thị
- [ ] Counter animations work
- [ ] Game chạy được
- [ ] Mobile responsive OK
- [ ] Share link với team
- [ ] Test trên nhiều browsers
- [ ] Bookmark URL
- [ ] Screenshot backup

---

## 🚀 HÀNH ĐỘNG TIẾP THEO

**NGAY BÂY GIỜ:**
1. ✅ Mở https://vercel.com/login
2. ✅ Login với GitHub
3. ✅ Import repo `mln122_web`
4. ✅ Click Deploy
5. ✅ Đợi 2-3 phút
6. ✅ Copy URL
7. ✅ Test website
8. ✅ Share với giảng viên

**Thời gian:** 5 phút  
**Chi phí:** $0  
**Độ khó:** ⭐☆☆☆☆

---

## 💡 PRO TIPS

1. **Preview Deployments:**
   - Mỗi branch/PR có URL riêng
   - Test trước khi merge

2. **Rollback:**
   - Dashboard → Deployments
   - Click deployment cũ → "Promote to Production"

3. **Environment Variables:**
   - Nếu cần API keys sau này
   - Settings → Environment Variables

4. **Performance:**
   - Auto optimized images
   - Auto code splitting
   - Edge caching

---

## 📞 Support

**Vercel Docs:** https://vercel.com/docs  
**GitHub Repo:** https://github.com/thangthewinner/mln122_web  
**My Support:** Comment below if need help!

---

**LET'S DEPLOY NOW! 🚀**

Open: https://vercel.com/login
