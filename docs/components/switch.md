---
title: Switch 开关
demoPath: "/pages/nova-demo/form?comp=switch&title=Switch%20%E5%BC%80%E5%85%B3"
---

# Switch 开关

<div class="nv-doc-card">

## 介绍

`nv-switch` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('switch')" class="sec">
          <text class="sec-title">Switch 开关</text>
          <view class="card">
            <nv-space :size="16" align="center">
              <nv-switch v-model="switchVal" />
              <nv-switch v-model="switchVal" active-color="#07c160" />
              <nv-switch :model-value="true" loading />
              <nv-switch :model-value="true" disabled />
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-switch>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `unknown` | `false` |
| `active-value` | `unknown` | `true` |
| `inactive-value` | `unknown` | `false` |
| `loading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `size` | `Numeric` | `26` |
| `active-color` | `string` | `''` |
| `inactive-color` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: unknown` |
| `change` | `value: unknown` |

</div>
