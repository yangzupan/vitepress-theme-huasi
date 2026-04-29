# 快速开始

## 环境要求

- Node.js >= 18
- VitePress >= 2.0

## 安装

```bash
# 使用 npm
npm install vitepress vitepress-theme-huasi

# 使用 yarn
yarn add vitepress vitepress-theme-huasi

# 使用 pnpm
pnpm add vitepress vitepress-theme-huasi
```

## 创建项目结构

```
your-project/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts
│   │   └── theme/
│   │       └── index.ts
│   ├── index.md
│   └── guide.md
└── package.json
```

## 配置

### config.ts

```typescript
import { defineConfig } from 'vitepress-theme-huasi'

export default defineConfig({
  title: '你的文档',
  description: '你的描述',

  themeConfig: {
    siteTitle: '站点标题',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    sidebar: {
      '/': [
        { text: '指南', items: [
          { text: '快速开始', link: '/guide' }
        ]}
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/...' }
    ],
    footer: {
      message: '基于 MIT 许可',
      copyright: '版权所有'
    }
  }
})
```

### theme/index.ts

```typescript
import HuasiTheme from 'vitepress-theme-huasi'

export default HuasiTheme
```

## 启动

在 package.json 中添加脚本：

```json
{
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  }
}
```

然后运行：

```bash
npm run dev
```

访问 `http://localhost:5173` 查看效果！（具体端口可能不同）
