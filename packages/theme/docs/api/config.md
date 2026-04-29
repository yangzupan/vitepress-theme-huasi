# 配置

## 主题配置

`vitepress-theme-huasi` 继承了 VitePress 默认主题的所有配置选项。

### 基本配置

```typescript
import { defineConfig } from 'vitepress-theme-huasi'

export default defineConfig({
  themeConfig: {
    siteTitle: '站点标题',
    logo: '/logo.png',
    nav: [],
    sidebar: {},
    socialLinks: [],
    footer: {}
  }
})
```

### 完整类型定义

```typescript
interface TeekConfig {
  logo?: string
  siteTitle?: string
  nav?: NavItem[]
  sidebar?: Sidebar
  socialLinks?: SocialLink[]
  footer?: Footer
  editLink?: EditLink
  lastUpdated?: LastUpdatedOptions
  search?: SearchOptions
  outline?: Outline
  docFooter?: DocFooter
}
```

更多详细配置请参考 [VitePress 官方文档](https://vitepress.dev/zh/reference/default-theme-config)。
