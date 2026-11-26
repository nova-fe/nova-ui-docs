---
title: 介绍
demoPath: "/pages/nova-demo/index"
---

<div class="nv-doc-card nv-hero-card">
  <svg class="nv-hero-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" aria-label="Nova UI">
    <defs>
      <linearGradient id="nvHeroGrad" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#07c160"/>
        <stop offset="52%" stop-color="#1989fa"/>
        <stop offset="100%" stop-color="#4e6ef2"/>
      </linearGradient>
    </defs>
    <polygon points="60,8 106,34 106,86 60,112 14,86 14,34" fill="url(#nvHeroGrad)"/>
    <polygon points="60,24 91,42 91,78 60,96 29,78 29,42" fill="#ffffff" fill-opacity="0.16"/>
    <path d="M42 82V38h10l18 28V38h10v44H70L52 54v28H42z" fill="#ffffff"/>
  </svg>
  <h1 class="nv-hero-title">Nova UI</h1>
  <p class="nv-hero-desc">轻量、可定制的 uni-app x 蒸汽模式跨 6 端移动端组件库</p>
  <div class="nv-hero-badges">
    <span class="nv-hero-badge">Android Vapor</span>
    <span class="nv-hero-badge">iOS Vapor</span>
    <span class="nv-hero-badge">Web / H5</span>
    <span class="nv-hero-badge">微信小程序</span>
    <span class="nv-hero-badge">支付宝小程序</span>
    <span class="nv-hero-badge">81 类 / 101 组件</span>
  </div>
</div>

<div class="nv-doc-card">

## 介绍

**Nova UI** 是一套参考 Vant 4 设计规范、专为 **uni-app x 蒸汽模式（Vapor Mode）** 从零原生打造的跨端移动端 UI 组件库，由 [nova-fe](https://github.com/nova-fe) 开源维护。

一套 `.uvue` + TypeScript 源码即可编译运行至 **Android（蒸汽模式）**、**iOS（蒸汽模式）**、**H5 / Web**、**微信小程序** 与 **支付宝小程序**，开箱即用，零第三方运行时依赖。

</div>

<div class="nv-doc-card">

## 特性

- 🚀 **全量 Vant 4 对齐**：完整覆盖 **81 大类共 101 个** `nv-*` 移动端组件，涵盖基础、表单、反馈、展示、导航与业务场景。
- ⚡ **原生蒸汽模式 & UCSS 零警告**：严守 `<script setup lang="ts">` 与 `styleIsolationVersion: "2"`，全库扁平单类选择器，无 `::before` / `::after` 伪元素与 SVG 依赖。
- 📱 **全 6 端一致呈现**：内置跨端纯 View 几何图标、手势轮播、2D Canvas 手写签名（支持 DPR 适配与零坐标偏移）、农历与二十四节气日历。
- 🎨 **完整的亮暗主题系统**：基于 Design Tokens 与 `<nv-config-provider>`，支持一键切换暗黑模式与全局/局部品牌色覆写。
- 🧩 **Easycom 零注册按需编译**：标准 DCloud `uni_modules` 结构，引入后直接使用 `<nv-button>` 等标签即可按需打包。
- 💪 **TypeScript 完整类型定义**：所有 Props、Events、Expose 方法及指令式 API 均提供严谨类型提示。

</div>

<div class="nv-doc-card">

## 相关链接

- 组件库源码仓库：[github.com/nova-fe/nova-ui](https://github.com/nova-fe/nova-ui)
- 文档站点源码仓库：[github.com/nova-fe/nova-ui-docs](https://github.com/nova-fe/nova-ui-docs)
- 下一步阅读：<RouterLink to="/guide/quickstart.html">快速上手 →</RouterLink>

</div>
