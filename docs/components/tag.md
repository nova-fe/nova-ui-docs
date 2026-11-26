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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `type` | `NvTagType` | `'default'` |
| `size` | `NvTagSize` | `'normal'` |
| `text` | `string` | `''` |
| `color` | `string` | `''` |
| `text-color` | `string` | `''` |
| `plain` | `boolean` | `false` |
| `round` | `boolean` | `false` |
| `mark` | `boolean` | `false` |
| `closeable` | `boolean` | `false` |
| `show` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |
| `close` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
