---
title: Loading 加载
demoPath: "/pages/nova-demo/feedback?comp=loading&title=Loading%20%E5%8A%A0%E8%BD%BD"
---

# Loading 加载

<div class="nv-doc-card">

## 介绍

`nv-loading` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('loading')" class="sec">
          <text class="sec-title">Loading 加载</text>
          <view class="card">
            <nv-space :size="20" align="center" wrap>
              <nv-loading />
              <nv-loading color="#1989fa" text="加载中..." />
              <nv-loading color="#07c160" text="垂直排版" vertical />
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-loading>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `color` | `string` | `'#c8c9cc'` |
| `size` | `Numeric` | `24` |
| `text` | `string` | `''` |
| `text-size` | `Numeric` | `14` |
| `text-color` | `string` | `''` |
| `vertical` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
