---
title: Radio 单选框
demoPath: "/pages/nova-demo/form?comp=radio&title=Radio%20%E5%8D%95%E9%80%89%E6%A1%86"
---

# Radio 单选框

<div class="nv-doc-card">

## 介绍

`nv-radio` / `nv-radio-group` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('radio')" class="sec">
          <text class="sec-title">Radio 单选框（当前选中：{{ radioVal }}）</text>
          <view class="card">
            <nv-radio-group v-model="radioVal" direction="horizontal">
              <nv-radio name="1">单选 1</nv-radio>
              <nv-radio name="2">单选 2</nv-radio>
              <nv-radio name="3" shape="dot" checked-color="#ee0a24">圆点样式</nv-radio>
            </nv-radio-group>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-radio>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `name` | `unknown` | `undefined` |
| `shape` | `NvRadioShape` | `undefined` |
| `disabled` | `boolean` | `undefined` |
| `label-disabled` | `boolean` | `false` |
| `label-position` | `'left' \| 'right'` | `'right'` |
| `icon-size` | `Numeric` | `undefined` |
| `checked-color` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `icon` | 自定义 `icon` 区域内容 |

</div>

<div class="nv-doc-card">

## API — `<nv-radio-group>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `unknown` | `''` |
| `disabled` | `boolean` | `false` |
| `direction` | `NvRadioGroupDirection` | `'vertical'` |
| `icon-size` | `Numeric` | `20` |
| `checked-color` | `string` | `''` |
| `shape` | `NvRadioShape` | `'round'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: unknown` |
| `change` | `value: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
