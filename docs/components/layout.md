---
title: Layout 布局
demoPath: "/pages/nova-demo/basic?comp=layout&title=Layout%20%E5%B8%83%E5%B1%80"
---

# Layout 布局

<div class="nv-doc-card">

## 介绍

`nv-row` / `nv-col` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('layout')" class="sec">
          <text class="sec-title">Layout 24 栅格布局 (Row / Col)</text>
          <nv-row :gutter="10">
            <nv-col :span="8"><view class="grid-box"><text class="grid-txt">span: 8</text></view></nv-col>
            <nv-col :span="8"><view class="grid-box grid-box--alt"><text class="grid-txt">span: 8</text></view></nv-col>
            <nv-col :span="8"><view class="grid-box"><text class="grid-txt">span: 8</text></view></nv-col>
          </nv-row>
          <view class="gap-sm" />
          <nv-row :gutter="10">
            <nv-col :span="6"><view class="grid-box"><text class="grid-txt">6</text></view></nv-col>
            <nv-col :span="12" :offset="6"><view class="grid-box grid-box--alt"><text class="grid-txt">span:12 offset:6</text></view></nv-col>
          </nv-row>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-row>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `gutter` | `Numeric \| [Numeric, Numeric]` | `0` |
| `justify` | `NvRowJustify` | `'start'` |
| `align` | `NvRowAlign` | `'top'` |
| `wrap` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-col>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `span` | `Numeric` | `24` |
| `offset` | `Numeric` | `0` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
