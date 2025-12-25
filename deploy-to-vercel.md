# Deploy to Vercel - Hướng dẫn triển khai

Hướng dẫn chi tiết để triển khai ứng dụng **English Learning Prompt Generator** lên Vercel.

## Yêu cầu

- Tài khoản [Vercel](https://vercel.com) (miễn phí)
- Tài khoản [GitHub](https://github.com) (nếu deploy qua Git)
- Node.js và npm đã cài đặt

## Phương pháp 1: Deploy qua Vercel CLI (Nhanh nhất)

### Bước 1: Cài đặt Vercel CLI

```bash
npm install -g vercel
```

### Bước 2: Đăng nhập Vercel

```bash
vercel login
```

Làm theo hướng dẫn để đăng nhập vào tài khoản Vercel của bạn.

### Bước 3: Deploy ứng dụng

Trong thư mục dự án, chạy:

```bash
vercel
```

Trả lời các câu hỏi:
- **Set up and deploy?** → Yes
- **Which scope?** → Chọn tài khoản của bạn
- **Link to existing project?** → No
- **What's your project's name?** → suggest-prompt-learn-english (hoặc tên bạn muốn)
- **In which directory is your code located?** → ./ (Enter)

Vercel sẽ tự động:
- Phát hiện đây là Vite project
- Build ứng dụng
- Deploy lên production

### Bước 4: Deploy production

Sau khi test preview URL, deploy lên production:

```bash
vercel --prod
```

✅ **Hoàn tất!** Bạn sẽ nhận được URL production như: `https://suggest-prompt-learn-english.vercel.app`

---

## Phương pháp 2: Deploy qua GitHub (Khuyến nghị)

### Bước 1: Push code lên GitHub

```bash
# Khởi tạo Git repository (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: English Learning Prompt Generator"

# Tạo repository mới trên GitHub, sau đó:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Bước 2: Import vào Vercel

1. Truy cập [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Chọn repository vừa tạo
4. Vercel sẽ tự động phát hiện cấu hình:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Click **"Deploy"**

✅ **Hoàn tất!** Mỗi lần bạn push code lên GitHub, Vercel sẽ tự động deploy lại.

---

## Cấu hình Build (Tùy chọn)

Nếu cần tùy chỉnh, tạo file `vercel.json` trong thư mục gốc:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

---

## Environment Variables (Nếu cần)

Nếu ứng dụng cần biến môi trường:

1. Vào **Project Settings** trên Vercel
2. Chọn tab **Environment Variables**
3. Thêm các biến cần thiết
4. Redeploy ứng dụng

---

## Custom Domain (Tùy chọn)

### Thêm domain riêng:

1. Vào **Project Settings** → **Domains**
2. Nhập tên domain của bạn
3. Làm theo hướng dẫn cấu hình DNS

---

## Kiểm tra Build Local

Trước khi deploy, nên test build local:

```bash
# Build ứng dụng
npm run build

# Preview build
npm run preview
```

Mở `http://localhost:4173` để kiểm tra.

---

## Troubleshooting

### Lỗi build

Nếu gặp lỗi khi build trên Vercel:

1. Kiểm tra `package.json` có đầy đủ dependencies
2. Đảm bảo Node.js version tương thích (thêm vào `package.json`):

```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

3. Xem build logs trên Vercel để debug

### Lỗi 404 khi refresh

Vite SPA không cần cấu hình thêm cho routing. Nếu gặp lỗi, kiểm tra `vite.config.ts`.

---

## Các lệnh hữu ích

```bash
# Xem danh sách deployments
vercel ls

# Xem logs
vercel logs

# Remove deployment
vercel remove [deployment-url]

# Xem thông tin project
vercel inspect
```

---

## Kết quả

Sau khi deploy thành công, bạn sẽ có:

- ✅ URL production: `https://your-project.vercel.app`
- ✅ HTTPS tự động
- ✅ CDN toàn cầu
- ✅ Auto-deploy khi push code (nếu dùng GitHub)
- ✅ Preview deployments cho mỗi PR

---

## Tài liệu tham khảo

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

**Chúc bạn deploy thành công! 🚀**
