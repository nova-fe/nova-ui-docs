---
title: Space 间距
demoPath: "/pages/nova-demo/basic?comp=space&title=Space%20%E9%97%B4%E8%B7%9D"
---

# Space 间距

<div class="nv-doc-card">

## 介绍

`nv-space` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('space')" class="sec">
          <text class="sec-title">Space 间距（水平 / 垂直 / 换行）</text>
          <nv-space :size="12" wrap>
            <nv-button size="small" type="primary">按钮 1</nv-button>
            <nv-button size="small" type="primary">按钮 2</nv-button>
            <nv-button size="small" type="primary">按钮 3</nv-button>
          </nv-space>
          <view class="gap-sm" />
          <nv-space direction="vertical" :size="8" fill>
            <nv-button size="small" plain block>垂直间距 1</nv-button>
            <nv-button size="small" plain block>垂直间距 2</nv-button>
          </nv-space>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-space>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `direction` | `NvSpaceDirection` | `'horizontal'` |
| `size` | `Numeric \| [Numeric, Numeric]` | `8` |
| `align` | `NvSpaceAlign` | `''` |
| `wrap` | `boolean` | `false` |
| `fill` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
