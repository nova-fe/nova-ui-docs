---
title: Progress 进度条
demoPath: "/pages/nova-demo/display?comp=progress&title=Progress%20%E8%BF%9B%E5%BA%A6%E6%9D%A1"
---

# Progress 进度条

<div class="nv-doc-card">

## 介绍

`nv-progress` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('progress')" class="sec">
          <text class="sec-title">Progress 进度条</text>
          <view class="card">
            <nv-progress :percentage="68" />
            <view class="gap-md" />
            <nv-progress :percentage="45" color="#07c160" :stroke-width="8" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-progress>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `percentage` | `Numeric` | `0` |
| `stroke-width` | `Numeric` | `4` |
| `color` | `string` | `''` |
| `track-color` | `string` | `''` |
| `pivot-text` | `string` | `''` |
| `pivot-color` | `string` | `''` |
| `text-color` | `string` | `'#ffffff'` |
| `inactive` | `boolean` | `false` |
| `show-pivot` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

</div>
