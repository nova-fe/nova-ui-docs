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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `axis` | 拖拽移动方向限制，可选值为 x / y / xy / lock | `NvFloatingBubbleAxis` | `'y'` |
| `magnetic` | 是否开启松手自动吸边方向，可选值为 x / y | `NvFloatingBubbleMagnetic` | `''` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `gap` | 气泡与屏幕边缘的最小安全间距（单位 px） | `number` | `24` |
| `offset` | 控制气泡初始位置坐标 { x, y }（支持 v-model:offset） | `NvFloatingBubbleOffset` | `undefined` |
| `z-index` | 组件层级 z-index | `number` | `999` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:offset` | 更新气泡坐标位置（v-model:offset） | `offset: NvFloatingBubbleOffset` |
| `offset-change` | 用户拖动浮动气泡改变位置后触发 | `offset: NvFloatingBubbleOffset` |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
