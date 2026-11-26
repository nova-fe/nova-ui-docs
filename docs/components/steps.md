---
title: Steps 步骤条
demoPath: "/pages/nova-demo/display?comp=steps&title=Steps%20%E6%AD%A5%E9%AA%A4%E6%9D%A1"
---

# Steps 步骤条

<div class="nv-doc-card">

## 介绍

`nv-steps` / `nv-step` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('steps')" class="sec">
          <text class="sec-title">Steps 步骤条</text>
          <nv-steps :active="1">
            <nv-step><text class="step-txt">买家下单</text></nv-step>
            <nv-step><text class="step-txt">商家接单</text></nv-step>
            <nv-step><text class="step-txt">交易完成</text></nv-step>
          </nv-steps>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-steps>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `active` | `Numeric` | `0` |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `active-color` | `string` | `'#07c160'` |
| `inactive-color` | `string` | `'#969799'` |
| `active-icon` | `string` | `'checked'` |
| `inactive-icon` | `string` | `''` |
| `finish-icon` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click-step` | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-step>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
