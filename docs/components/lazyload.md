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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 图片资源地址 | `string` | `''` |
| `width` | 组件宽度 | `Numeric` | `'100%'` |
| `height` | 组件高度 | `Numeric` | `160` |
| `mode` | 图片裁剪与缩放模式（同 uni-app image mode） | `string` | `'aspectFill'` |
| `radius` | 圆角大小 | `Numeric` | `0` |
| `placeholder-color` | 占位区域背景色 | `string` | `'#f2f3f5'` |
| `lazy-load` | 是否开启图片懒加载 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `load` | 图片加载成功或列表触底需要加载更多数据时触发 | `event: unknown` |
| `error` | 图片加载失败时触发 | `event: unknown` |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `loading` | 自定义加载中状态提示内容 |
| `error` | 自定义加载失败提示内容 |

</div>
