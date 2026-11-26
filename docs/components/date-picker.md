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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `string[]` | `() =&gt; []` |
| `columns-type` | 选项列类型配置数组 | `NvDatePickerColumnType[]` | `() =&gt; ['year', 'month', 'day']` |
| `min-date` | 可选择的最小日期下限 | `NvDatePickerDateInput` | `undefined` |
| `max-date` | 可选择的最小/最大日期上限 | `NvDatePickerDateInput` | `undefined` |
| `title` | 标题文案 | `string` | `''` |
| `confirm-button-text` | 确认按钮文字 | `string` | `'确认'` |
| `cancel-button-text` | 取消按钮文字 | `string` | `'取消'` |
| `toolbar-position` | 顶部栏位置，可选值为 top / bottom | `NvPickerToolbarPosition` | `'top'` |
| `show-toolbar` | 是否显示顶部操作栏（含取消、标题、确认按钮） | `boolean` | `true` |
| `loading` | 是否显示为加载状态 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `option-height` | 选择器单个选项高度（单位 px） | `number` | `44` |
| `visible-option-num` | 选择器可见的选项个数 | `number` | `5` |
| `formatter` | 选项文案格式化函数 | `NvDatePickerFormatter` | `undefined` |
| `filter` | 选项过滤函数，用于自定义过滤可选日期或时间项 | `NvDatePickerFilter` | `undefined` |
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
