# 指南

欢迎使用 `vitepress-theme-huasi`！

## 主题特色

- 🌸 温馨的花店风格配色
- 🎨 优雅的设计语言
- 🌙 完美的深色模式支持
- 🔍 内置搜索功能
- 📱 响应式布局

## 快速开始

### 安装

```bash
npm install vitepress-theme-huasi
```

### 配置

在 `.vitepress/config.ts` 中：

```typescript
import { defineConfig } from 'vitepress-theme-huasi'

export default defineConfig({
  title: '我的文档',
  description: '描述',
  
  themeConfig: {
    siteTitle: '站点标题',
    nav: [],
    sidebar: {}
  }
})
```

在 `.vitepress/theme/index.ts` 中：

```typescript
import HuasiTheme from 'vitepress-theme-huasi'

export default HuasiTheme
```

就这么简单！你已经拥有了一个漂亮的花店主题文档站点。
