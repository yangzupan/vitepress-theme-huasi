# 快速开始

## 安装

```bash
npm install vitepress-theme-huasi
```

或者使用 yarn/pnpm：

```bash
yarn add vitepress-theme-huasi
pnpm add vitepress-theme-huasi
```

## 使用

在你的 VitePress 配置文件中引入主题：

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress-theme-huasi'

export default defineConfig({
  themeConfig: {
    // 主题配置
  }
})
```

然后创建主题入口文件：

```typescript
// .vitepress/theme/index.ts
import HuasiTheme from 'vitepress-theme-huasi'

export default HuasiTheme
```

## 下一步

接下来你可以：

- 查看 [API 文档](/api/config) 了解更多配置选项
- 自定义主题样式
