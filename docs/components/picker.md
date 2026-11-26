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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric[]` | `() =&gt; []` |
| `columns` | 选择器选项列配置数组 | `NvPickerOption[] \| NvPickerOption[][]` | `() =&gt; []` |
| `columns-field-names` | 自定义 columns 数据结构中的 text / value / children 字段名 | `NvPickerFieldNames` | `() =&gt; ({` |
| `title` | 标题文案 | `string` | `-` |
| `confirm-button-text` | 确认按钮文字 | `string` | `-` |
| `cancel-button-text` | 取消按钮文字 | `string` | `-` |
| `toolbar-position` | 顶部栏位置，可选值为 top / bottom | `NvPickerToolbarPosition` | `-` |
| `show-toolbar` | 是否显示顶部操作栏（含取消、标题、确认按钮） | `boolean` | `-` |
| `loading` | 是否显示为加载状态 | `boolean` | `-` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `-` |
| `option-height` | 选择器单个选项高度（单位 px） | `number` | `-` |
| `visible-option-num` | 选择器可见的选项个数 | `number` | `-` |
| `custom-class` | 自定义根节点额外类名 | `string` | `-` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: Numeric[]` |
| `confirm` | 点击确认按钮时触发 | `payload: NvPickerConfirmEvent` |
| `cancel` | 点击取消按钮时触发 | `payload: NvPickerConfirmEvent` |
| `change` | 绑定值或选中项发生变化时触发 | `payload: NvPickerChangeEvent` |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `confirm` | 主动触发选择器确认并派发 confirm 事件 |
| `getSelectedOptions` | 获取选择器当前选中的选项对象数组 |
| `getSelectedPayload` | 获取选择器当前选中的完整数据（含值、索引与选项） |

</div>
