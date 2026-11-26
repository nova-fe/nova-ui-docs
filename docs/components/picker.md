---
title: Picker 选择器
demoPath: "/pages/nova-demo/form?comp=picker&title=Picker%20%E9%80%89%E6%8B%A9%E5%99%A8"
---

# Picker 选择器

<div class="nv-doc-card">

## 介绍

`nv-picker` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('picker')" class="sec">
          <text class="sec-title">Picker 选择器（当前：{{ pickerVal[0] }}）</text>
          <view class="card-nopad">
            <nv-picker
              v-model="pickerVal"
              title="选择城市"
              :columns="pickerCols"
              @confirm="onPickerConfirm"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-picker>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric[]` | `() =&gt; []` |
| `columns` | `NvPickerOption[] \| NvPickerOption[][]` | `() =&gt; []` |
| `columns-field-names` | `NvPickerFieldNames` | `() =&gt; ({` |
| `title` | `string` | `-` |
| `confirm-button-text` | `string` | `-` |
| `cancel-button-text` | `string` | `-` |
| `toolbar-position` | `NvPickerToolbarPosition` | `-` |
| `show-toolbar` | `boolean` | `-` |
| `loading` | `boolean` | `-` |
| `readonly` | `boolean` | `-` |
| `option-height` | `number` | `-` |
| `visible-option-num` | `number` | `-` |
| `custom-class` | `string` | `-` |
| `custom-style` | `StyleInput` | `-` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: Numeric[]` |
| `confirm` | `payload: NvPickerConfirmEvent` |
| `cancel` | `payload: NvPickerConfirmEvent` |
| `change` | `payload: NvPickerChangeEvent` |

### 方法（Expose）

通过 `ref` 可调用：`confirm()`、`getSelectedOptions()`、`getSelectedPayload()`

</div>
