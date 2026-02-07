# NullPointerFun's Personal Website 🚀

这是我的个人技术门户网站，采用 **Next.js 15** 构建，并部署于 **GitHub Pages**。

---

## 🌟 核心特性

- **现代技术栈**：使用 Next.js (App Router) + Tailwind CSS 构建。
- **动态交互**：集成交互式粒子背景，打造沉浸式视觉体验。
- **内容集成**：精选展示 [我的 CSDN 博客](https://blog.csdn.net/2301_77225287) 文章。

## 🛠️ 项目环境

- **Node.js**: v22.14.0
- **框架**: Next.js 15
- **部署**: GitHub Pages (Static Site Generation)

## 🏗️ 部署指南 (针对 Windows 用户)

由于 GitHub Pages 对 Next.js 静态导出的特殊要求，本项目采用 `output: 'export'` 模式。

### 1. 本地开发
```bash
npm install
npm run dev
```
### 2. 构建与发布
```
# 打包生成静态文件 (out 文件夹)
npm run build

# 进入生成的文件夹
cd out

# 强制同步至 GitHub main 分支
git init
git remote add origin [https://github.com/NullPointerFun/nullpointerfun.github.io.git](https://github.com/NullPointerFun/nullpointerfun.github.io.git)
git add -A
git commit -m "Site update"
git push -f origin master:main
```
## ⚠️ 技术踩坑记录 (Troubleshooting)
在部署过程中，本项目成功克服了以下技术挑战：

- **路径解析问题：**

现象：部署后页面白屏，资源报 404 错误。

解决：在 next.config.ts 中配置 trailingSlash: true，确保静态资源路径能够被 GitHub Pages 正确识别。

- **GitHub Pages 目录过滤：**

现象：GitHub 默认忽略以 _ 开头的文件夹（如 _next）。

解决：在 public 目录下创建 .nojekyll 空文件，强制 GitHub 加载所有资源。

- **浏览器缓存拦截：**

现象：代码更新推送到 GitHub 后，访问网页内容未刷新。

解决：使用 Ctrl + Shift + R 强制刷新或在无痕模式下访问。

## 📬 联系我
#### GitHub: @NullPointerFun

#### CSDN: 小鱼小鱼快快游~
