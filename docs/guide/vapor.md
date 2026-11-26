---
title: 蒸汽模式与跨端规范
demoPath: "/pages/nova-demo/index"
---

# 蒸汽模式与跨端规范

<div class="nv-doc-card">

## 为什么面向蒸汽模式专门设计？

**uni-app x 蒸汽模式（Vapor Mode）** 在 Android 与 iOS 上直接以原生视图与 UCSS 渲染，与传统 Web CSS 存在若干关键约束。Nova UI 在架构阶段即全库贯彻以下规范：

- **样式隔离 2.0**：所有样式均为扁平单类 BEM 选择器，不使用后代组合选择器。
- **零伪元素 / 零 SVG**：全部角标、分割线、进度环、几何图标均通过原生 `<view>` 组合实现，避免 App 端 `::before` / `::after` 失效。
- **显式溢出控制**：uni-app x 中 `<view>` 默认 `overflow: hidden`，凡含徽标、滑块手柄、气泡弹层的容器均已显式设置 `overflow: visible`。
- **小程序宿主层适配**：针对微信小程序与支付宝小程序自定义组件宿主节点宽度坍缩、2D Canvas 节点查询、`reactive` 解包等差异均做了全端统一兼容。
- **组件通信解耦**：父子组件联动统一通过 `useRelation`（`provide` / `inject` + `markRaw`）实现，无 VDOM 遍历依赖。

</div>

<div class="nv-doc-card">

## 6 端支持矩阵

| 目标平台 | 编译模式 | 状态 |
| --- | --- | --- |
| Android | uni-app x Vapor | ✅ 已验证 |
| iOS | uni-app x Vapor | ✅ 已验证 |
| Web / H5 | uni-app x Web | ✅ 已验证 |
| 微信小程序 | `mp-weixin` | ✅ 已验证 |
| 支付宝小程序 | `mp-alipay`（基础库 2.0） | ✅ 已验证 |

</div>
