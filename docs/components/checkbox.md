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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `boolean` | `false` |
| `name` | `unknown` | `undefined` |
| `shape` | `NvCheckboxShape` | `undefined` |
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
| `update:modelValue` | `value: boolean` |
| `change` | `value: boolean` |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `icon` | 自定义 `icon` 区域内容 |

### 方法（Expose）

通过 `ref` 可调用：`toggle()`

</div>

<div class="nv-doc-card">

## API — `<nv-checkbox-group>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `unknown[]` | `() =&gt; []` |
| `disabled` | `boolean` | `false` |
| `max` | `number` | `0` |
| `direction` | `NvCheckboxGroupDirection` | `'vertical'` |
| `icon-size` | `Numeric` | `20` |
| `checked-color` | `string` | `''` |
| `shape` | `NvCheckboxShape` | `'round'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: unknown[]` |
| `change` | `value: unknown[]` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`toggleAll()`

</div>
