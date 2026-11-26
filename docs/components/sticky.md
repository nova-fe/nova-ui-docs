---
title: Sticky 粘性布局
demoPath: "/pages/nova-demo/display?comp=sticky&title=Sticky%20%E7%B2%98%E6%80%A7%E5%B8%83%E5%B1%80"
---

# Sticky 粘性布局

<div class="nv-doc-card">

## 介绍

`nv-sticky` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('sticky') || isShow('notice-bar')">
          <nv-sticky :offset-top="0">
            <nv-notice-bar left-icon="volume-o" text="Nova UI 展示组件合集：21 类展示组件全端可用，无伪元素无 SVG 依赖。" />
          </nv-sticky>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-sticky>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `offset-top` | `Numeric` | `0` |
| `offset-bottom` | `Numeric` | `0` |
| `z-index` | `number` | `99` |
| `position` | `'top' \| 'bottom'` | `'top'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
