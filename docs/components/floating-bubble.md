---
title: FloatingBubble 浮动气泡
demoPath: "/pages/nova-demo/feedback?comp=floating-bubble&title=FloatingBubble%20%E6%B5%AE%E5%8A%A8%E6%B0%94%E6%B3%A1"
---

# FloatingBubble 浮动气泡

<div class="nv-doc-card">

## 介绍

`nv-floating-bubble` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('floating-bubble')" class="sec">
          <text class="sec-title">FloatingBubble 浮动气泡</text>
          <view class="card">
            <text class="panel-txt">右下角蓝色圆形气泡支持自由拖动，松手后自动磁吸贴边。</text>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-floating-bubble>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `axis` | `NvFloatingBubbleAxis` | `'y'` |
| `magnetic` | `NvFloatingBubbleMagnetic` | `''` |
| `icon` | `string` | `''` |
| `gap` | `number` | `24` |
| `offset` | `NvFloatingBubbleOffset` | `undefined` |
| `z-index` | `number` | `999` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:offset` | `offset: NvFloatingBubbleOffset` |
| `offset-change` | `offset: NvFloatingBubbleOffset` |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
