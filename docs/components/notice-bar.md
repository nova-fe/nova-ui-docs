---
title: NoticeBar 通知栏
demoPath: "/pages/nova-demo/display?comp=notice-bar&title=NoticeBar%20%E9%80%9A%E7%9F%A5%E6%A0%8F"
---

# NoticeBar 通知栏

<div class="nv-doc-card">

## 介绍

`nv-notice-bar` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

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

## API — `<nv-notice-bar>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `text` | `string` | `''` |
| `mode` | `'' \| 'closeable' \| 'link'` | `''` |
| `color` | `string` | `'#ed6a0c'` |
| `background` | `string` | `'#fffbe8'` |
| `left-icon` | `string` | `''` |
| `scrollable` | `boolean` | `true` |
| `wrapable` | `boolean` | `false` |
| `speed` | `number` | `50` |
| `delay` | `number` | `1` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |
| `close` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left-icon` | 自定义 `left-icon` 区域内容 |
| `default` | 默认内容插槽 |
| `right-icon` | 自定义 `right-icon` 区域内容 |

</div>
