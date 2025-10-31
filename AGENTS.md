# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 项目概述

**AI觉醒派** - 移动端AI信息阅读平台，基于 Next.js 16 + React 19 + Shadcn UI + TypeScript 构建。

**核心特点**：

- 移动优先设计（max-width: lg）
- 暖色调配色系统（主色: #FF6B35，背景: #F7F4ED）
- 使用 Shadcn UI (New York 风格) + Lucide Icons
- 集成 Vercel Analytics

---

## 常用命令

### 开发与构建

```bash
# 开发服务器（已运行，禁止重复启动）
pnpm dev

# 生产构建
pnpm build

# 生产环境启动
pnpm start

# 代码检查
pnpm lint
```

### Shadcn UI 组件管理

```bash
# 添加新组件
pnpx shadcn@latest add [component-name]

# 查看可用组件
pnpx shadcn@latest add
```

---

## 项目架构

### 目录结构

```
my-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 根布局（含 Analytics）
│   ├── page.tsx            # 首页（手机端日历流）
│   ├── article/[id]/       # 文章详情页（动态路由）
│   ├── member/             # 会员专区
│   ├── profile/            # 个人中心
│   ├── checkin/            # 签到页
│   └── handbook/           # 手册页
├── components/
│   └── ui/                 # Shadcn UI 组件库
├── lib/
│   └── utils.ts            # cn() 工具函数
├── public/                 # 静态资源（图片占位符）
└── app/globals.css         # 全局样式 + CSS Variables
```

### 技术栈关键点

**1. 路径别名（tsconfig.json）**

```typescript
"@/*": ["./*"]  // 所有文件从根目录引用
```

**2. Shadcn UI 配置（components.json）**

- 风格：New York
- 颜色：Slate
- 图标库：lucide-react
- 别名：
  - `@/components` → components/
  - `@/lib/utils` → lib/utils.ts
  - `@/ui` → components/ui/

**3. 设计系统（globals.css）**

- 主色调：`--primary: #FF6B35`（橙色）
- 背景色：`--background: #F7F4ED`（米黄色）
- 卡片：`--card: #FFFFFF`
- 圆角：`--radius: 0.75rem`（12px）
- 字体：Inter（通过 next/font/google 加载）

**4. 组件模式**

- 所有交互式组件需 `"use client"` 指令
- 使用 `cn()` 工具函数合并 Tailwind 类名
- 底部导航固定在 `max-w-lg mx-auto` 容器内

---

## 关键设计规范

### 移动端布局约束

```tsx
// 所有页面必须包裹在这个容器内
<div className="max-w-lg mx-auto">
  {/* 页面内容 */}
</div>
```

### 底部导航栏

- 高度：`h-20`（80px）
- 背景：`bg-[#F7F4ED]/95 backdrop-blur-sm`
- 边框：`border-t border-[#E8E3D8]`
- 固定定位：`fixed bottom-0` + `max-w-lg mx-auto`
- 页面需预留 `pb-24` 避免被遮挡

### 色彩使用

```css
/* 主色调（按钮、激活状态） */
text-[#FF6B35]  bg-[#FF6B35]

/* 背景色 */
bg-[#F7F4ED]  /* 页面背景 */
bg-white      /* 卡片背景 */

/* 文字颜色 */
text-[#1A1A1A]  /* 主标题 */
text-[#2C2C2C]  /* 正文 */
text-[#7A7A7A]  /* 次要文本 */
text-[#ADADAD]  /* 占位符 */

/* 边框 */
border-[#E8E3D8]
```

### 圆角规范

- 大卡片：`rounded-xl`（12px）
- 输入框/按钮：`rounded-lg`（8px）
- 日期选择器：`rounded-full`（完全圆形）

### 阴影层级

```css
shadow-sm        /* 普通卡片 */
shadow-md        /* hover 状态 */
hover:shadow-md  /* 交互式卡片 */
```

---

## 路由结构

| 路径              | 页面     | 说明                 |
| ----------------- | -------- | -------------------- |
| `/`             | 首页     | 日历流 + 热门内容    |
| `/article/[id]` | 文章详情 | 动态路由，支持付费墙 |
| `/member`       | 会员专区 | 订阅页面             |
| `/profile`      | 个人中心 | 用户信息 + 设置      |
| `/checkin`      | 签到页   | 积分系统             |
| `/handbook`     | 手册页   | 文档/资源列表        |

---

## 开发注意事项

### 1. 禁止事项

- ❌ 不要运行 `pnpm dev`（已在后台运行）
- ❌ 不要使用 `npm`/`yarn`（必须用 pnpm）
- ❌ 不要修改 globals.css 中的 CSS Variables（除非明确需要）

### 2. 组件开发规范

```tsx
// ✅ 正确示例
"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function MyComponent() {
  return (
    <div className={cn(
      "max-w-lg mx-auto",
      "bg-white rounded-xl p-4"
    )}>
      <Button className="bg-[#FF6B35]">点击我</Button>
    </div>
  )
}
```

### 3. 图片资源处理

- 当前使用占位符路径（如 `/abstract-gradient-shapes-modern-design.jpg`）
- 实际使用时需替换为真实图片或 Next.js Image 组件
- 建议使用 `next/image` 优化性能

### 4. 响应式处理

```tsx
// 横向滚动（隐藏滚动条）
<div className="overflow-x-auto no-scrollbar">
  {/* 内容 */}
</div>

<style jsx>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
```

### 5. Metadata 规范

```tsx
// 每个页面应包含
export const metadata: Metadata = {
  title: "页面标题 - AI觉醒派",
  description: "页面描述",
}
```

---

## 与 v0.dev 集成

本项目由 v0.dev 生成的组件代码组成，保持以下一致性：

1. **组件引用**：优先使用 Shadcn UI 组件
2. **样式方式**：Tailwind CSS（禁止使用 CSS-in-JS）
3. **图标库**：Lucide React
4. **动画**：使用 Tailwind 内置动画 + `tailwindcss-animate`

---

## 数据流（未来扩展）

当前为静态 UI，未来需要：

- [ ] API 路由（`app/api/` 目录）
- [ ] 数据获取（Server Components）
- [ ] 状态管理（React Context 或 Zustand）
- [ ] 认证系统（NextAuth.js）
- [ ] 数据库集成（Prisma + PostgreSQL）

---

## Git 提交规范

遵循 Conventional Commits：

```bash
feat: 添加新功能
fix: 修复 bug
style: 样式调整
refactor: 代码重构
docs: 文档更新
chore: 构建/工具链更新
```

---

## 相关文档

- [Next.js 16 文档](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
