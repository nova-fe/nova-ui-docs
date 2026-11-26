---
title: DatePicker 日期选择
demoPath: "/pages/nova-demo/form?comp=date-picker&title=DatePicker%20%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9"
---

# DatePicker 日期选择

<div class="nv-doc-card">

## 介绍

`nv-date-picker` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('date-picker')" class="sec">
          <text class="sec-title">DatePicker 日期选择（当前：{{ dateVal.join('-') }}）</text>
          <view class="card-nopad">
            <nv-date-picker
              v-model="dateVal"
              title="选择年月日"
              @confirm="onDateConfirm"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-date-picker>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `string[]` | `() =&gt; []` |
| `columns-type` | `NvDatePickerColumnType[]` | `() =&gt; ['year', 'month', 'day']` |
| `min-date` | `NvDatePickerDateInput` | `undefined` |
| `max-date` | `NvDatePickerDateInput` | `undefined` |
| `title` | `string` | `''` |
| `confirm-button-text` | `string` | `'确认'` |
| `cancel-button-text` | `string` | `'取消'` |
| `toolbar-position` | `NvPickerToolbarPosition` | `'top'` |
| `show-toolbar` | `boolean` | `true` |
| `loading` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `option-height` | `number` | `44` |
| `visible-option-num` | `number` | `5` |
| `formatter` | `NvDatePickerFormatter` | `undefined` |
| `filter` | `NvDatePickerFilter` | `undefined` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: string[]` |
| `confirm` | `payload: NvPickerConfirmEvent` |
| `cancel` | `payload: NvPickerConfirmEvent` |
| `change` | `payload: NvPickerChangeEvent` |

### 方法（Expose）

通过 `ref` 可调用：`confirm()`

</div>
