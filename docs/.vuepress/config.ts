import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { CATALOG_GROUPS } from './catalog'

const base = (process.env.DOCS_BASE || '/nova-ui-docs/') as `/${string}/`

export default defineUserConfig({
  base,
  lang: 'zh-CN',
  title: 'Nova UI',
  description: '轻量、可定制的 uni-app x 蒸汽模式跨 6 端移动端组件库',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: `${base}logo.svg` }]
  ],
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: [/^@vuepress\//]
      }
    }
  }),
  theme: defaultTheme({
    logo: '/logo.svg',
    repo: 'nova-fe/nova-ui',
    repoLabel: 'GitHub',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    colorMode: 'light',
    colorModeSwitch: false,
    navbar: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/button.html' },
      { text: '更新日志', link: '/guide/changelog.html' }
    ],
    sidebar: [
      {
        text: '开发指南',
        children: [
          { text: '介绍', link: '/' },
          { text: '快速上手', link: '/guide/quickstart.html' },
          { text: '主题定制', link: '/guide/theme.html' },
          { text: '蒸汽模式与跨端规范', link: '/guide/vapor.html' },
          { text: '更新日志', link: '/guide/changelog.html' }
        ]
      },
      ...CATALOG_GROUPS.map((group) => ({
        text: group.title,
        children: group.items.map((item) => ({
          text: item.label,
          link: item.link
        }))
      }))
    ]
  })
})
