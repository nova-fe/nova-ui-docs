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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `gutter` | 子元素之间的间距 | `Numeric \| [Numeric, Numeric]` | `0` |
| `justify` | 主轴对齐方式 | `NvRowJustify` | `'start'` |
| `align` | 交叉轴对齐方式 | `NvRowAlign` | `'top'` |
| `wrap` | 子元素是否自动换行 | `boolean` | `true` |
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

<div class="nv-doc-card">

## API — `<nv-col>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `span` | 栅格列元素占据的列数（总计 24 列） | `Numeric` | `24` |
| `offset` | 栅格左侧间隔的列数 | `Numeric` | `0` |
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
