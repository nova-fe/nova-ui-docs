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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 单选框唯一标识符 | `unknown` | `undefined` |
| `shape` | 图标形状，可选值为 round / square | `NvRadioShape` | `undefined` |
| `disabled` | 是否禁用当前组件 | `boolean` | `undefined` |
| `label-disabled` | 是否禁用文本区域点击切换选中状态 | `boolean` | `false` |
| `label-position` | 文本位置，可选值为 left / right | `'left' \| 'right'` | `'right'` |
| `icon-size` | 图标大小 | `Numeric` | `undefined` |
| `checked-color` | 选中状态的颜色 | `string` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `icon` | 自定义图标内容 |

</div>

<div class="nv-doc-card">

## API — `<nv-radio-group>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `unknown` | `''` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `direction` | 排列或弹出方向 | `NvRadioGroupDirection` | `'vertical'` |
| `icon-size` | 图标大小 | `Numeric` | `20` |
| `checked-color` | 选中状态的颜色 | `string` | `''` |
| `shape` | 组件形状（如 round / square） | `NvRadioShape` | `'round'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: unknown` |
| `change` | 绑定值或选中项发生变化时触发 | `value: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
