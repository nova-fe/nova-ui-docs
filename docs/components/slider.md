---
title: Slider 滑块
demoPath: "/pages/nova-demo/form?comp=slider&title=Slider%20%E6%BB%91%E5%9D%97"
---

# Slider 滑块

<div class="nv-doc-card">

## 介绍

`nv-slider` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('slider')" class="sec">
          <text class="sec-title">Slider 滑块（当前：{{ sliderVal }}）</text>
          <view class="card">
            <nv-slider v-model="sliderVal" />
            <view class="gap-md" />
            <text class="sub-label">双滑块区间：{{ rangeSliderVal[0] }} - {{ rangeSliderVal[1] }}</text>
            <nv-slider v-model="rangeSliderVal" range active-color="#ee0a24" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-slider>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `NvSliderValue` | `0` |
| `min` | `number` | `0` |
| `max` | `number` | `100` |
| `step` | `number` | `1` |
| `bar-height` | `Numeric` | `2` |
| `button-size` | `Numeric` | `24` |
| `active-color` | `string` | `''` |
| `inactive-color` | `string` | `''` |
| `range` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `vertical` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: NvSliderValue` |
| `change` | `value: NvSliderValue` |
| `drag-start` | `event: unknown` |
| `drag-end` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left-button` | 自定义 `left-button` 区域内容 |
| `button` | 自定义 `button` 区域内容 |
| `right-button` | 自定义 `right-button` 区域内容 |

</div>
