import { defineConfig } from 'vitepress-theme-huasi/config'

export default defineConfig({
  title: 'Huasi 主题演示',
  description: 'vitepress-theme-huasi 的演示站点',

  themeConfig: {
    siteTitle: '🌸 Huasi 演示',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/guide' },
      { text: '组件', link: '/components/example' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: '文档',
          items: [
            { text: '指南', link: '/docs/guide' },
            { text: '快速开始', link: '/docs/getting-started' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '示例组件', link: '/components/example' },
            { text: '更多组件', link: '/components/more' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangzupan/vitepress-theme-huasi' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024-present 杨祖攀'
    },

    search: {
      provider: 'local'
    }
  }
})
