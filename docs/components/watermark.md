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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | 展示文本内容 | `string \| string[]` | `''` |
| `width` | 组件宽度 | `number` | `100` |
| `height` | 组件高度 | `number` | `100` |
| `z-index` | 组件层级 z-index | `number` | `100` |
| `rotate` | 水印旋转角度（单位 deg） | `number` | `-22` |
| `opacity` | 水印透明度（0 ~ 1） | `number` | `0.12` |
| `full-page` | 水印是否全屏覆盖整个页面 | `boolean` | `false` |
| `text-color` | 文字颜色 | `string` | `'#969799'` |
| `gap-x` | 水印水平间距（单位 px） | `number` | `24` |
| `gap-y` | 水印垂直间距（单位 px） | `number` | `24` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

</div>
