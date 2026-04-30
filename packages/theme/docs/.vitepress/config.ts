import { defineConfig } from 'vitepress-theme-huasi/config'

export default defineConfig({
  title: 'VitePress Theme Huasi',
  description: '一个花店心思的 Vitepress 主题',

  themeConfig: {
    siteTitle: 'Huasi 主题',
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: 'API', link: '/api/config' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [{ text: '配置', link: '/api/config' }]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/yangzupan/vitepress-theme-huasi' }],

    editLink: {
      pattern:
        'https://github.com/yangzupan/vitepress-theme-huasi/edit/main/packages/theme/docs/:path',
      text: '编辑此页'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024-present 杨祖攀'
    },

    search: {
      provider: 'local'
    }
  }
})
