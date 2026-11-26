---
title: Divider 分割线
demoPath: "/pages/nova-demo/display?comp=divider&title=Divider%20%E5%88%86%E5%89%B2%E7%BA%BF"
---

# Divider 分割线

<div class="nv-doc-card">

## 介绍

`nv-divider` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('divider')" class="sec">
          <text class="sec-title">Divider 分割线</text>
          <view class="card">
            <nv-divider text="文字居中" />
            <nv-divider text="虚线靠左" content-position="left" dashed />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-divider>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 展示文字内容 | `string` | `''` |
| `dashed` | 是否使用虚线样式 | `boolean` | `false` |
| `hairline` | 是否使用 0.5px 细边框 | `boolean` | `true` |
| `content-position` | 内容位置，可选值为 left / center / right | `'left' \| 'center' \| 'right'` | `'center'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
