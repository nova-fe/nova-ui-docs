---
title: Watermark 水印
demoPath: "/pages/nova-demo/display?comp=watermark&title=Watermark%20%E6%B0%B4%E5%8D%B0"
---

# Watermark 水印

<div class="nv-doc-card">

## 介绍

`nv-watermark` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('watermark')" class="sec">
          <text class="sec-title">Watermark 水印</text>
          <view class="wm-box">
            <nv-watermark content="Nova UI" />
            <view class="wm-content">
              <text class="col-txt">局部水印容器示例</text>
            </view>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-watermark>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `content` | `string \| string[]` | `''` |
| `width` | `number` | `100` |
| `height` | `number` | `100` |
| `z-index` | `number` | `100` |
| `rotate` | `number` | `-22` |
| `opacity` | `number` | `0.12` |
| `full-page` | `boolean` | `false` |
| `text-color` | `string` | `'#969799'` |
| `gap-x` | `number` | `24` |
| `gap-y` | `number` | `24` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

</div>
