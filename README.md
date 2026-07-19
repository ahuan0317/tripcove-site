# TripCove（途湾）官网

「打开就有惊喜的周边旅游探索助手」产品官网 — 基于 Next.js App Router 的纯静态营销站点。

## 技术栈

- **框架**：Next.js 15（App Router）+ React 19 + TypeScript
- **样式**：Tailwind CSS v4（CSS-first 设计令牌，见 `src/app/globals.css` 的 `@theme`）
- **动效**：Motion（framer-motion 12）— 可拖拽卡片堆、滚动触发显现、SVG 航迹/点亮动画、数字滚动
- **SEO**：全静态预渲染（SSG）、Metadata API（OG/Twitter/canonical）、`sitemap.ts`、`robots.ts`、JSON-LD（SoftwareApplication + FAQPage）

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 生产构建（全静态）
pnpm start      # 生产预览
```

## 设计语言 —「旅行手帐 × 现代编辑风」

与小程序端「明信片拼贴风」呼应：

| 令牌 | 色值 | 用途 |
|---|---|---|
| `paper` | `#f7f1e6` | 暖纸米白底 |
| `cove` / `cove-deep` | `#0e5e59` / `#0a423f` | 品牌湾青 |
| `coral` | `#ff6b4a` | 日落珊瑚 · CTA |
| `sun` | `#ffb443` | 暖金点缀 |
| `night` / `glow` | `#0b1b2b` / `#3ee6c1` | 足迹章节深夜蓝 + 点亮青 |

字体：标题 Noto Serif SC（镜像 CDN + 本地宋体回退）· 数字/坐标 IBM Plex Mono · 正文系统中文无衬线栈。

## 页面结构

Hero（可拖拽卡片堆，演示「右滑收藏/左滑跳过」）→ 功能跑马灯 → 01 零输入探索 → 02 AI 行程（聊天演示 + 预算仪表盘）→ 03 足迹点亮（暗色星座版图）→ 04 功能网格 → 05 用户场景 → 06 FAQ → CTA + 页脚。

## 上线前待办

- [ ] 替换 `src/app/layout.tsx`、`sitemap.ts`、`robots.ts` 中的占位域名 `https://www.tripcove.cn`
- [ ] 替换页脚 ICP 备案号占位
- [ ] 用真实小程序码替换 `Footer.tsx` 中的二维码占位 SVG
- [ ] 补充 `opengraph-image`（可用 Hero 截图）
