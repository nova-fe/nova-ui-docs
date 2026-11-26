---
title: TimePicker 时间选择
demoPath: "/pages/nova-demo/form?comp=time-picker&title=TimePicker%20%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9"
---

# TimePicker 时间选择

<div class="nv-doc-card">

## 介绍

`nv-time-picker` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('time-picker')" class="sec">
          <text class="sec-title">TimePicker 时间选择（当前：{{ timeVal.join(':') }}）</text>
          <view class="card-nopad">
            <nv-time-picker
              v-model="timeVal"
              title="选择时间"
              @confirm="onTimeConfirm"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-time-picker>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `string[]` | `() =&gt; []` |
| `columns-type` | `NvTimePickerColumnType[]` | `() =&gt; ['hour', 'minute']` |
| `min-hour` | `Numeric` | `0` |
| `max-hour` | `Numeric` | `23` |
| `min-minute` | `Numeric` | `0` |
| `max-minute` | `Numeric` | `59` |
| `min-second` | `Numeric` | `0` |
| `max-second` | `Numeric` | `59` |
| `min-time` | `string` | `''` |
| `max-time` | `string` | `''` |
| `title` | `string` | `''` |
| `confirm-button-text` | `string` | `'确认'` |
| `cancel-button-text` | `string` | `'取消'` |
| `toolbar-position` | `NvPickerToolbarPosition` | `'top'` |
| `show-toolbar` | `boolean` | `true` |
| `loading` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `option-height` | `number` | `44` |
| `visible-option-num` | `number` | `5` |
| `formatter` | `NvTimePickerFormatter` | `undefined` |
| `filter` | `NvTimePickerFilter` | `undefined` |
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
