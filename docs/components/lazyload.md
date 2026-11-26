---
title: Lazyload 懒加载
demoPath: "/pages/nova-demo/display?comp=lazyload&title=Lazyload%20%E6%87%92%E5%8A%A0%E8%BD%BD"
---

# Lazyload 懒加载

<div class="nv-doc-card">

## 介绍

`nv-lazyload` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('lazyload')" class="sec">
          <text class="sec-title">Lazyload 懒加载</text>
          <view class="card">
            <nv-lazyload src="/static/logo.png" :width="72" :height="72" :radius="8" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-lazyload>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `src` | `string` | `''` |
| `width` | `Numeric` | `'100%'` |
| `height` | `Numeric` | `160` |
| `mode` | `string` | `'aspectFill'` |
| `radius` | `Numeric` | `0` |
| `placeholder-color` | `string` | `'#f2f3f5'` |
| `lazy-load` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `load` | `event: unknown` |
| `error` | `event: unknown` |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `loading` | 自定义 `loading` 区域内容 |
| `error` | 自定义 `error` 区域内容 |

</div>
