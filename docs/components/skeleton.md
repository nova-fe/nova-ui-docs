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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题文案 | `boolean` | `false` |
| `title-width` | 骨架屏标题占位宽度 | `Numeric` | `'40%'` |
| `row` | 段落占位图行数 | `number` | `3` |
| `row-width` | 段落占位图宽度（支持字符串或每行宽度数组） | `Numeric \| Numeric[]` | `'100%'` |
| `avatar` | 是否显示头像占位图 | `boolean` | `false` |
| `avatar-size` | 头像占位图尺寸 | `Numeric` | `32` |
| `avatar-shape` | 头像占位图形状，可选值为 round / square | `'round' \| 'square'` | `'round'` |
| `loading` | 是否显示为加载状态 | `boolean` | `true` |
| `animate` | 是否开启骨架屏闪烁动画 | `boolean` | `true` |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `template` | 自定义骨架屏内部布局模板 |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-title>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title-width` | 骨架屏标题占位宽度 | `Numeric` | `'40%'` |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-paragraph>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `row` | 段落占位图行数 | `number` | `3` |
| `row-width` | 段落占位图宽度（支持字符串或每行宽度数组） | `Numeric \| Numeric[]` | `'100%'` |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-avatar>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `avatar-size` | 头像占位图尺寸 | `Numeric` | `32` |
| `avatar-shape` | 头像占位图形状，可选值为 round / square | `'round' \| 'square'` | `'round'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

</div>

<div class="nv-doc-card">

## API — `<nv-skeleton-image>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `image-size` | 图片尺寸 | `Numeric` | `96` |
| `image-shape` | 图片占位图形状，可选值为 square / round | `'square' \| 'round'` | `'square'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

</div>
