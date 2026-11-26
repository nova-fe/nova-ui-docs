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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 展示文字内容 | `string` | `''` |
| `mode` | 通知栏右侧模式，可选值为 closeable / link | `'' \| 'closeable' \| 'link'` | `''` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `'#ed6a0c'` |
| `background` | 背景色 | `string` | `'#fffbe8'` |
| `left-icon` | 左侧图标名称或图片链接 | `string` | `''` |
| `scrollable` | 是否开启滚动播放或标签栏横向滚动 | `boolean` | `true` |
| `wrapable` | 通知栏是否开启多行文本换行显示 | `boolean` | `false` |
| `speed` | 动画速度（Circular 进度速度或 NoticeBar 滚动速率 px/s） | `number` | `50` |
| `delay` | 延迟时间 | `number` | `1` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |
| `close` | 关闭组件或弹层时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left-icon` | 自定义左侧图标内容 |
| `default` | 默认内容插槽 |
| `right-icon` | 自定义右侧图标内容 |

</div>
