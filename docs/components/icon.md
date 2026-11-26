---
title: Icon 图标
demoPath: "/pages/nova-demo/basic?comp=icon&title=Icon%20%E5%9B%BE%E6%A0%87"
---

# Icon 图标

<div class="nv-doc-card">

## 介绍

`nv-icon` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('icon')" class="sec">
          <text class="sec-title">Icon 图标（基础 / 角标 / 自定义颜色与尺寸）</text>
          <view class="card">
            <nv-space :size="18" align="center" wrap>
              <nv-icon name="chat-o" :size="26" :badge="9" />
              <nv-icon name="bell-o" :size="26" :badge="99" />
              <nv-icon name="setting-o" :size="26" dot />
              <nv-icon name="star" :size="26" color="#ee0a24" />
              <nv-icon name="like" :size="26" color="#ff976a" />
              <nv-icon name="home-o" :size="26" color="#1989fa" />
              <nv-icon name="search" :size="26" color="#07c160" />
              <nv-icon name="location-o" :size="26" color="#7232dd" />
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-icon>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `name` | `string` | `必填` |
| `dot` | `boolean` | `false` |
| `badge` | `Numeric` | `undefined` |
| `color` | `string` | `''` |
| `size` | `Numeric` | `16` |
| `class-prefix` | `string` | `''` |
| `font-family` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

</div>
