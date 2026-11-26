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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `content` | `Numeric` | `undefined` |
| `color` | `string` | `''` |
| `dot` | `boolean` | `false` |
| `max` | `Numeric` | `undefined` |
| `show-zero` | `boolean` | `true` |
| `position` | `NvBadgePosition` | `'top-right'` |
| `offset` | `[Numeric, Numeric]` | `undefined` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
