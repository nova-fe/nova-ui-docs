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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `percentage` | 进度百分比（0 ~ 100） | `Numeric` | `0` |
| `stroke-width` | 进度条粗细 | `Numeric` | `4` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `''` |
| `track-color` | 进度条轨道背景色 | `string` | `''` |
| `pivot-text` | 进度条文字内容，默认显示当前百分比 | `string` | `''` |
| `pivot-color` | 进度文字气泡背景色 | `string` | `''` |
| `text-color` | 文字颜色 | `string` | `'#ffffff'` |
| `inactive` | 是否置灰进度条 | `boolean` | `false` |
| `show-pivot` | 是否显示进度文字气泡 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

</div>
