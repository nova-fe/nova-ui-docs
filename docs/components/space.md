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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `direction` | 间距方向，可选值为 horizontal / vertical | `NvSpaceDirection` | `'horizontal'` |
| `size` | 间距大小（单位 px，支持传入数组 [水平, 垂直]） | `Numeric \| [Numeric, Numeric]` | `8` |
| `align` | 交叉轴对齐方式 | `NvSpaceAlign` | `''` |
| `wrap` | 子元素是否自动换行 | `boolean` | `false` |
| `fill` | 是否让 Space 容器宽度占满父级 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
