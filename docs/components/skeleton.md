---
title: Skeleton 骨架屏
demoPath: "/pages/nova-demo/display?comp=skeleton&title=Skeleton%20%E9%AA%A8%E6%9E%B6%E5%B1%8F"
---

# Skeleton 骨架屏

<div class="nv-doc-card">

## 介绍

`nv-skeleton` / `nv-skeleton-title` / `nv-skeleton-paragraph` / `nv-skeleton-avatar` / `nv-skeleton-image` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('skeleton')" class="sec">
          <text class="sec-title">Skeleton 骨架屏</text>
          <view class="card">
            <nv-skeleton title avatar :row="2" />
            <view class="gap-md" />
            <nv-space :size="10" align="center">
              <nv-skeleton-avatar :avatar-size="36" />
              <nv-skeleton-image :image-size="48" />
            </nv-space>
            <view class="gap-sm" />
            <nv-skeleton-title />
            <nv-skeleton-paragraph :row="2" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `boolean` | `false` |
| `title-width` | `Numeric` | `'40%'` |
| `row` | `number` | `3` |
| `row-width` | `Numeric \| Numeric[]` | `'100%'` |
| `avatar` | `boolean` | `false` |
| `avatar-size` | `Numeric` | `32` |
| `avatar-shape` | `'round' \| 'square'` | `'round'` |
| `loading` | `boolean` | `true` |
| `animate` | `boolean` | `true` |
| `round` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `template` | 自定义 `template` 区域内容 |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-title>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title-width` | `Numeric` | `'40%'` |
| `round` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-paragraph>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `row` | `number` | `3` |
| `row-width` | `Numeric \| Numeric[]` | `'100%'` |
| `round` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-avatar>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `avatar-size` | `Numeric` | `32` |
| `avatar-shape` | `'round' \| 'square'` | `'round'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-image>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `image-size` | `Numeric` | `96` |
| `image-shape` | `'square' \| 'round'` | `'square'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

</div>
