---
title: Stepper 步进器
demoPath: "/pages/nova-demo/form?comp=stepper&title=Stepper%20%E6%AD%A5%E8%BF%9B%E5%99%A8"
---

# Stepper 步进器

<div class="nv-doc-card">

## 介绍

`nv-stepper` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('stepper')" class="sec">
          <text class="sec-title">Stepper 步进器</text>
          <view class="card">
            <view class="row-item">
              <text class="row-label">默认样式</text>
              <nv-stepper v-model="stepperVal" />
            </view>
            <view class="row-item">
              <text class="row-label">圆角风格</text>
              <nv-stepper v-model="stepperVal" theme="round" />
            </view>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-stepper>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `1` |
| `min` | `Numeric` | `1` |
| `max` | `Numeric` | `Infinity` |
| `step` | `Numeric` | `1` |
| `name` | `Numeric` | `''` |
| `input-width` | `Numeric` | `32` |
| `button-size` | `Numeric` | `28` |
| `decimal-length` | `number` | `undefined` |
| `theme` | `'default' \| 'round'` | `'default'` |
| `integer` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `disable-plus` | `boolean` | `false` |
| `disable-minus` | `boolean` | `false` |
| `disable-input` | `boolean` | `false` |
| `show-plus` | `boolean` | `true` |
| `show-minus` | `boolean` | `true` |
| `show-input` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: Numeric` |
| `change` | `value: Numeric, detail: { name: Numeric }` |
| `plus` | `-` |
| `minus` | `-` |
| `overlimit` | `type: 'plus' \| 'minus'` |

</div>
