---
title: DropdownMenu 下拉菜单
demoPath: "/pages/nova-demo/feedback?comp=dropdown-menu&title=DropdownMenu%20%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95"
---

# DropdownMenu 下拉菜单

<div class="nv-doc-card">

## 介绍

`nv-dropdown-menu` / `nv-dropdown-item` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('dropdown-menu')" class="sec-flat">
          <text class="sec-title-pad">DropdownMenu 下拉菜单</text>
          <nv-dropdown-menu>
            <nv-dropdown-item v-model="drop1" :options="dropOpt1" />
            <nv-dropdown-item v-model="drop2" :options="dropOpt2" />
          </nv-dropdown-menu>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-dropdown-menu>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `active-color` | `string` | `'#1989fa'` |
| `direction` | `NvDropdownDirection` | `'down'` |
| `z-index` | `number` | `10` |
| `duration` | `number` | `200` |
| `overlay` | `boolean` | `true` |
| `close-on-click-overlay` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`close()`

</div>

<div class="nv-doc-card">

## API — `<nv-dropdown-item>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `''` |
| `title` | `string` | `''` |
| `options` | `NvDropdownOption[]` | `() =&gt; []` |
| `disabled` | `boolean` | `false` |
| `title-class` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: Numeric` |
| `change` | `value: Numeric` |
| `open` | `-` |
| `close` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`toggle()`

</div>
