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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `position` | 弹出位置，可选值为 center / top / bottom / left / right | `NvPopupPosition` | `'center'` |
| `overlay` | 是否显示背景遮罩层 | `boolean` | `true` |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `closeable` | 是否显示关闭图标 | `boolean` | `false` |
| `close-icon` | 关闭图标名称或图片链接 | `string` | `'cross'` |
| `close-icon-position` | 关闭图标位置，可选值为 top-left / top-right / bottom-left / bottom-right | `NvPopupClosePosition` | `'top-right'` |
| `close-on-click-overlay` | 点击遮罩层时是否自动关闭 | `boolean` | `true` |
| `safe-area-inset-top` | 是否开启顶部安全区适配 | `boolean` | `false` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `z-index` | 组件层级 z-index | `number` | `2000` |
| `overlay-style` | 自定义遮罩层样式 | `StyleInput` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `open` | 打开弹层、下拉菜单或滑动单元格时触发 | `-` |
| `close` | 关闭组件或弹层时触发 | `-` |
| `click-overlay` | 点击遮罩层时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
