---
title: FloatingPanel 浮动面板
demoPath: "/pages/nova-demo/feedback?comp=floating-panel&title=FloatingPanel%20%E6%B5%AE%E5%8A%A8%E9%9D%A2%E6%9D%BF"
---

# FloatingPanel 浮动面板

<div class="nv-doc-card">

## 介绍

`nv-floating-panel` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('floating-panel')" class="sec-flat">
          <nv-cell-group title="FloatingPanel 浮动面板" inset>
            <nv-cell :title="showPanel ? '隐藏浮动面板' : '显示浮动面板'" is-link @click="showPanel = !showPanel" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-floating-panel>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `height` | `number` | `0` |
| `anchors` | `number[]` | `() =&gt; []` |
| `duration` | `number` | `300` |
| `content-draggable` | `boolean` | `true` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `z-index` | `number` | `999` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:height` | `value: number` |
| `height-change` | `detail: { height: number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `header` | 自定义 `header` 区域内容 |
| `default` | 默认内容插槽 |

</div>
