<template>
  <div class="nv-site">
    <!-- Top Vant-style dark navy header -->
    <header class="nv-header">
      <div class="nv-header__left">
        <button class="nv-header__menu-btn" aria-label="菜单" @click="mobileNavOpen = !mobileNavOpen">
          ☰
        </button>
        <RouterLink class="nv-header__brand" to="/">
          <img class="nv-header__logo" :src="withBase('/logo.svg')" alt="Nova UI" />
          <span class="nv-header__title">Nova UI</span>
          <span class="nv-header__sub">（适用于 uni-app x 蒸汽模式）</span>
        </RouterLink>
      </div>

      <div class="nv-header__right">
        <span class="nv-header__pill">v0.1.0</span>
        <a
          class="nv-header__link"
          href="https://github.com/nova-fe/nova-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          class="nv-header__link"
          href="https://github.com/nova-fe"
          target="_blank"
          rel="noopener noreferrer"
        >
          nova-fe
        </a>
      </div>
    </header>

    <!-- Mobile backdrop -->
    <div v-if="mobileNavOpen" class="nv-sidebar-mask" @click="mobileNavOpen = false" />

    <div class="nv-body">
      <!-- Left fixed sidebar -->
      <aside class="nv-sidebar" :class="{ 'nv-sidebar--open': mobileNavOpen }">
        <div class="nv-sidebar__group">
          <div class="nv-sidebar__group-title">开发指南</div>
          <RouterLink
            v-for="item in guideLinks"
            :key="item.link"
            :to="item.link"
            class="nv-sidebar__item"
            :class="{ 'nv-sidebar__item--active': isActive(item.link) }"
            @click="mobileNavOpen = false"
          >
            {{ item.text }}
          </RouterLink>
        </div>

        <div v-for="group in CATALOG_GROUPS" :key="group.key" class="nv-sidebar__group">
          <div class="nv-sidebar__group-title">{{ group.title }}</div>
          <RouterLink
            v-for="item in group.items"
            :key="item.key"
            :to="item.link"
            class="nv-sidebar__item"
            :class="{ 'nv-sidebar__item--active': isActive(item.link) }"
            @click="mobileNavOpen = false"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </aside>

      <!-- Center card-based document column -->
      <main class="nv-main">
        <div class="nv-content">
          <Content />
        </div>
        <footer class="nv-footer">
          MIT Licensed | Copyright © 2026
          <a href="https://github.com/nova-fe" target="_blank" rel="noopener noreferrer">nova-fe</a>
        </footer>
      </main>

      <!-- Right sticky mobile live simulator (Vant 4 style) -->
      <aside class="nv-simulator-wrap">
        <div class="nv-simulator">
          <iframe
            :key="iframeKey"
            class="nv-simulator__frame"
            :src="simulatorUrl"
            title="Nova UI 实时预览"
            frameborder="0"
          />
        </div>
        <div class="nv-simulator-bar">
          <button class="nv-sim-btn" @click="goHomeDemo">示例首页</button>
          <button class="nv-sim-btn" @click="reloadSim">刷新预览</button>
          <a class="nv-sim-btn" :href="simulatorUrl" target="_blank" rel="noopener noreferrer">新窗口打开</a>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePageData, usePageFrontmatter, withBase } from 'vuepress/client'
import { CATALOG_GROUPS } from '../catalog'

const pageData = usePageData()
const frontmatter = usePageFrontmatter<{ demoPath?: string }>()

const mobileNavOpen = ref(false)
const iframeKey = ref(0)
const forceHome = ref(false)

const guideLinks = [
  { text: '介绍', link: '/' },
  { text: '快速上手', link: '/guide/quickstart.html' },
  { text: '主题定制', link: '/guide/theme.html' },
  { text: '蒸汽模式与跨端规范', link: '/guide/vapor.html' },
  { text: '更新日志', link: '/guide/changelog.html' }
]

const isActive = (link: string) => {
  const cur = pageData.value.path
  if (link === '/') return cur === '/' || cur === '/index.html'
  return cur === link || cur === link.replace(/\.html$/, '')
}

const currentDemoHash = computed(() => {
  if (forceHome.value) return '/pages/nova-demo/index'
  const fmPath = frontmatter.value?.demoPath
  if (typeof fmPath === 'string' && fmPath.trim() !== '') {
    return fmPath
  }
  return '/pages/nova-demo/index'
})

const simulatorUrl = computed(() => {
  const entry = withBase('/demo/index.html')
  return `${entry}#${currentDemoHash.value}`
})

const goHomeDemo = () => {
  forceHome.value = true
  iframeKey.value += 1
  setTimeout(() => {
    forceHome.value = false
  }, 150)
}

const reloadSim = () => {
  iframeKey.value += 1
}
</script>
