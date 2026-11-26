---
title: Swipe 轮播
demoPath: "/pages/nova-demo/display?comp=swipe&title=Swipe%20%E8%BD%AE%E6%92%AD"
---

# Swipe 轮播

<div class="nv-doc-card">

## 介绍

`nv-swipe` / `nv-swipe-item` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('swipe')" class="sec">
          <text class="sec-title">Swipe 轮播（支持手势左右滑动与自动播放）</text>
          <nv-swipe :autoplay="3000" :height="150">
            <nv-swipe-item>
              <view class="swipe-slide swipe-slide--1"><text class="swipe-txt">Slide 1</text></view>
            </nv-swipe-item>
            <nv-swipe-item>
              <view class="swipe-slide swipe-slide--2"><text class="swipe-txt">Slide 2</text></view>
            </nv-swipe-item>
            <nv-swipe-item>
              <view class="swipe-slide swipe-slide--3"><text class="swipe-txt">Slide 3</text></view>
            </nv-swipe-item>
          </nv-swipe>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-swipe>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `autoplay` | `number` | `0` |
| `duration` | `number` | `500` |
| `initial-swipe` | `number` | `0` |
| `loop` | `boolean` | `true` |
| `show-indicators` | `boolean` | `true` |
| `indicator-color` | `string` | `'#1989fa'` |
| `vertical` | `boolean` | `false` |
| `height` | `Numeric` | `180` |
| `touchable` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `change` | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `indicator` | 自定义 `indicator` 区域内容 |

### 方法（Expose）

通过 `ref` 可调用：`prev()`、`next()`、`swipeTo()`

</div>

<div class="nv-doc-card">

## API — `<nv-swipe-item>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
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
