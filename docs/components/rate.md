---
title: Rate 评分
demoPath: "/pages/nova-demo/form?comp=rate&title=Rate%20%E8%AF%84%E5%88%86"
---

# Rate 评分

<div class="nv-doc-card">

## 介绍

`nv-rate` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('rate')" class="sec">
          <text class="sec-title">Rate 评分（当前：{{ rateVal }} 星）</text>
          <view class="card">
            <nv-rate v-model="rateVal" allow-half :size="24" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-rate>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `number` | `0` |
| `count` | `number` | `5` |
| `size` | `Numeric` | `20` |
| `gutter` | `Numeric` | `4` |
| `color` | `string` | `'#ee0a24'` |
| `void-color` | `string` | `'#c8c9cc'` |
| `disabled-color` | `string` | `'#c8c9cc'` |
| `icon` | `string` | `'star'` |
| `void-icon` | `string` | `'star-o'` |
| `allow-half` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `clearable` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: number` |
| `change` | `value: number` |

</div>
