---
title: Image 图片
demoPath: "/pages/nova-demo/basic?comp=image&title=Image%20%E5%9B%BE%E7%89%87"
---

# Image 图片

<div class="nv-doc-card">

## 介绍

`nv-image` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('image')" class="sec">
          <text class="sec-title">Image 图片（圆角 / 圆形 / 裁剪模式）</text>
          <view class="card">
            <nv-space :size="14" align="center" wrap>
              <nv-image src="/static/logo.png" :width="72" :height="72" fit="contain" />
              <nv-image src="/static/logo.png" :width="72" :height="72" :radius="10" fit="cover" />
              <nv-image src="/static/logo.png" :width="72" :height="72" round fit="cover" />
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-image>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `src` | `string` | `''` |
| `width` | `Numeric` | `''` |
| `height` | `Numeric` | `''` |
| `fit` | `NvImageFit` | `'fill'` |
| `radius` | `Numeric` | `''` |
| `round` | `boolean` | `false` |
| `lazy-load` | `boolean` | `false` |
| `show-loading` | `boolean` | `true` |
| `show-error` | `boolean` | `true` |
| `loading-icon` | `string` | `'photo-o'` |
| `error-icon` | `string` | `'warning-o'` |
| `icon-size` | `Numeric` | `32` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |
| `load` | `event: unknown` |
| `error` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `loading` | 自定义 `loading` 区域内容 |
| `error` | 自定义 `error` 区域内容 |
| `default` | 默认内容插槽 |

</div>
