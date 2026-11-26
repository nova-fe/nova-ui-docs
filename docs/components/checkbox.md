---
title: Checkbox 复选框
demoPath: "/pages/nova-demo/form?comp=checkbox&title=Checkbox%20%E5%A4%8D%E9%80%89%E6%A1%86"
---

# Checkbox 复选框

<div class="nv-doc-card">

## 介绍

`nv-checkbox` / `nv-checkbox-group` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('checkbox')" class="sec">
          <text class="sec-title">Checkbox 复选框</text>
          <view class="card">
            <nv-checkbox v-model="singleChecked">单独使用复选框</nv-checkbox>
            <view class="gap-md" />
            <text class="sub-label">复选框组（当前选中：{{ checkedList.join(', ') || '无' }}）</text>
            <nv-checkbox-group v-model="checkedList" direction="horizontal">
              <nv-checkbox name="a">选项 A</nv-checkbox>
              <nv-checkbox name="b">选项 B</nv-checkbox>
              <nv-checkbox name="c" shape="square" checked-color="#07c160">方形 C</nv-checkbox>
            </nv-checkbox-group>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-checkbox>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `boolean` | `false` |
| `name` | 复选框唯一标识符（在 CheckboxGroup 内必传） | `unknown` | `undefined` |
| `shape` | 图标形状，可选值为 round / square | `NvCheckboxShape` | `undefined` |
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
| `update:modelValue` | 更新组件绑定值（v-model） | `value: boolean` |
| `change` | 绑定值或选中项发生变化时触发 | `value: boolean` |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `icon` | 自定义图标内容 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `toggle` | 切换展开/收起或选中/未选中状态 |

</div>

<div class="nv-doc-card">

## API — `<nv-checkbox-group>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `unknown[]` | `() =&gt; []` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `max` | 最大允许值或最大可选数量 | `number` | `0` |
| `direction` | 排列或弹出方向 | `NvCheckboxGroupDirection` | `'vertical'` |
| `icon-size` | 图标大小 | `Numeric` | `20` |
| `checked-color` | 选中状态的颜色 | `string` | `''` |
| `shape` | 组件形状（如 round / square） | `NvCheckboxShape` | `'round'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: unknown[]` |
| `change` | 绑定值或选中项发生变化时触发 | `value: unknown[]` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `toggleAll` | 全选、反选或取消全选复选框组内的所有选项 |

</div>
