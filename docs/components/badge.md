---
title: Badge 徽标
demoPath: "/pages/nova-demo/display?comp=badge&title=Badge%20%E5%BE%BD%E6%A0%87"
---

# Badge 徽标

<div class="nv-doc-card">

## 介绍

`nv-badge` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('badge')" class="sec">
          <text class="sec-title">Badge 徽标</text>
          <view class="card">
            <nv-space :size="20" align="center" wrap>
              <nv-badge :content="5"><view class="badge-box" /></nv-badge>
              <nv-badge :content="108" :max="99"><view class="badge-box" /></nv-badge>
              <nv-badge dot><view class="badge-box" /></nv-badge>
              <nv-badge :content="12"><nv-tag type="primary">徽标标签</nv-tag></nv-badge>
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-badge>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | 展示文本内容 | `Numeric` | `undefined` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `''` |
| `dot` | 是否显示右上角小红点 | `boolean` | `false` |
| `max` | 最大允许值或最大可选数量 | `Numeric` | `undefined` |
| `show-zero` | 当徽标内容为数字 0 时是否展示 | `boolean` | `true` |
| `position` | 徽标定位角，可选值为 top-right / top-left / bottom-right / bottom-left | `NvBadgePosition` | `'top-right'` |
| `offset` | 设置徽标位置偏移量 [x, y] | `[Numeric, Numeric]` | `undefined` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
