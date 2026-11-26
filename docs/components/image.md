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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 图片资源地址 | `string` | `''` |
| `width` | 组件宽度 | `Numeric` | `''` |
| `height` | 组件高度 | `Numeric` | `''` |
| `fit` | 图片裁剪与缩放填充模式 | `NvImageFit` | `'fill'` |
| `radius` | 圆角大小 | `Numeric` | `''` |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `lazy-load` | 是否开启图片懒加载 | `boolean` | `false` |
| `show-loading` | 是否展示加载中占位提示 | `boolean` | `true` |
| `show-error` | 图片加载失败时是否展示失败占位提示 | `boolean` | `true` |
| `loading-icon` | 加载中状态显示的图标名称 | `string` | `'photo-o'` |
| `error-icon` | 加载失败时显示的图标名称或图片链接 | `string` | `'warning-o'` |
| `icon-size` | 图标大小 | `Numeric` | `32` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |
| `load` | 图片加载成功或列表触底需要加载更多数据时触发 | `event: unknown` |
| `error` | 图片加载失败时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `loading` | 自定义加载中状态提示内容 |
| `error` | 自定义加载失败提示内容 |
| `default` | 默认内容插槽 |

</div>
