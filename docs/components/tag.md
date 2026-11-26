---
title: Tag 标签
demoPath: "/pages/nova-demo/display?comp=tag&title=Tag%20%E6%A0%87%E7%AD%BE"
---

# Tag 标签

<div class="nv-doc-card">

## 介绍

`nv-tag` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('tag')" class="sec">
          <text class="sec-title">Tag 标签</text>
          <view class="card">
            <nv-space :size="10" align="center" wrap>
              <nv-tag type="primary">主要标签</nv-tag>
              <nv-tag type="success" round>圆角标签</nv-tag>
              <nv-tag type="warning" plain>朴素标签</nv-tag>
              <nv-tag type="danger" mark>标记样式</nv-tag>
              <nv-tag type="primary" size="large">大号标签</nv-tag>
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-tag>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 标签类型，可选值为 primary / success / warning / danger / default | `NvTagType` | `'default'` |
| `size` | 标签大小，可选值为 large / medium / default | `NvTagSize` | `'normal'` |
| `text` | 展示文字内容 | `string` | `''` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `''` |
| `text-color` | 文字颜色 | `string` | `''` |
| `plain` | 是否为朴素（描边镂空）样式 | `boolean` | `false` |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `mark` | 是否为标记样式（右侧半圆角） | `boolean` | `false` |
| `closeable` | 是否显示关闭图标 | `boolean` | `false` |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |
| `close` | 关闭组件或弹层时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
