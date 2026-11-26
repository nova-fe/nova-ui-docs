---
title: Popup 弹出层
demoPath: "/pages/nova-demo/basic?comp=popup&title=Popup%20%E5%BC%B9%E5%87%BA%E5%B1%82"
---

# Popup 弹出层

<div class="nv-doc-card">

## 介绍

`nv-popup` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('popup')" class="sec-flat">
          <nv-cell-group title="Popup 弹出层（各方向与圆角）" inset>
            <nv-cell title="底部圆角弹出层" is-link @click="openPop('bottom')" />
            <nv-cell title="居中圆角弹出层" is-link @click="openPop('center')" />
            <nv-cell title="顶部弹出层" is-link @click="openPop('top')" />
            <nv-cell title="左侧弹出层" is-link @click="openPop('left')" />
            <nv-cell title="右侧弹出层" is-link @click="openPop('right')" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-popup>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `position` | `NvPopupPosition` | `'center'` |
| `overlay` | `boolean` | `true` |
| `round` | `boolean` | `false` |
| `closeable` | `boolean` | `false` |
| `close-icon` | `string` | `'cross'` |
| `close-icon-position` | `NvPopupClosePosition` | `'top-right'` |
| `close-on-click-overlay` | `boolean` | `true` |
| `safe-area-inset-top` | `boolean` | `false` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `z-index` | `number` | `2000` |
| `overlay-style` | `StyleInput` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `open` | `-` |
| `close` | `-` |
| `click-overlay` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
