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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `autoplay` | 自动轮播间隔时间（单位 ms），0 表示不自动轮播 | `number` | `0` |
| `duration` | 动画或展示持续时长 | `number` | `500` |
| `initial-swipe` | 初始展示的轮播项索引（从 0 开始） | `number` | `0` |
| `loop` | 是否开启循环滑动 | `boolean` | `true` |
| `show-indicators` | 是否显示轮播指示器 | `boolean` | `true` |
| `indicator-color` | 轮播指示器激活颜色 | `string` | `'#1989fa'` |
| `vertical` | 是否为垂直方向排列/滑动 | `boolean` | `false` |
| `height` | 组件高度 | `Numeric` | `180` |
| `touchable` | 是否可以通过手势滑动切换 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 绑定值或选中项发生变化时触发 | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `indicator` | 自定义轮播指示器 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `prev` | 轮播切换到上一项 |
| `next` | 轮播切换到下一项 |
| `swipeTo` | 切换到指定索引位置 |

</div>

<div class="nv-doc-card">

## API — `<nv-swipe-item>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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
