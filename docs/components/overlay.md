---
title: Overlay 遮罩层
demoPath: "/pages/nova-demo/feedback?comp=overlay&title=Overlay%20%E9%81%AE%E7%BD%A9%E5%B1%82"
---

# Overlay 遮罩层

<div class="nv-doc-card">

## 介绍

`nv-overlay` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('overlay')" class="sec-flat">
          <nv-cell-group title="Overlay 遮罩层" inset>
            <nv-cell title="显示遮罩层" is-link @click="showOverlay = true" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-overlay>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `z-index` | 组件层级 z-index | `number` | `1000` |
| `lock-scroll` | 是否锁定背景页面滚动 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
