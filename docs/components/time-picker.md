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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `string[]` | `() =&gt; []` |
| `columns-type` | 选项列类型配置数组 | `NvTimePickerColumnType[]` | `() =&gt; ['hour', 'minute']` |
| `min-hour` | 可选的最小小时数 | `Numeric` | `0` |
| `max-hour` | 可选的最大小时数 | `Numeric` | `23` |
| `min-minute` | 可选的最小分钟数 | `Numeric` | `0` |
| `max-minute` | 可选的最大分钟数 | `Numeric` | `59` |
| `min-second` | 可选的最小秒数 | `Numeric` | `0` |
| `max-second` | 可选的最大秒数 | `Numeric` | `59` |
| `min-time` | 可选的最小时间（格式 HH:mm:ss） | `string` | `''` |
| `max-time` | 可选的最大时间（格式 HH:mm:ss） | `string` | `''` |
| `title` | 标题文案 | `string` | `''` |
| `confirm-button-text` | 确认按钮文字 | `string` | `'确认'` |
| `cancel-button-text` | 取消按钮文字 | `string` | `'取消'` |
| `toolbar-position` | 顶部栏位置，可选值为 top / bottom | `NvPickerToolbarPosition` | `'top'` |
| `show-toolbar` | 是否显示顶部操作栏（含取消、标题、确认按钮） | `boolean` | `true` |
| `loading` | 是否显示为加载状态 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `option-height` | 选择器单个选项高度（单位 px） | `number` | `44` |
| `visible-option-num` | 选择器可见的选项个数 | `number` | `5` |
| `formatter` | 选项文案格式化函数 | `NvTimePickerFormatter` | `undefined` |
| `filter` | 选项过滤函数，用于自定义过滤可选日期或时间项 | `NvTimePickerFilter` | `undefined` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: string[]` |
| `confirm` | 点击确认按钮时触发 | `payload: NvPickerConfirmEvent` |
| `cancel` | 点击取消按钮时触发 | `payload: NvPickerConfirmEvent` |
| `change` | 绑定值或选中项发生变化时触发 | `payload: NvPickerChangeEvent` |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `confirm` | 主动触发选择器确认并派发 confirm 事件 |

</div>
