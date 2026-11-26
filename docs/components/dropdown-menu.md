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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `active-color` | 选中/激活状态的颜色 | `string` | `'#1989fa'` |
| `direction` | 菜单展开方向，可选值为 down / up | `NvDropdownDirection` | `'down'` |
| `z-index` | 组件层级 z-index | `number` | `10` |
| `duration` | 动画或展示持续时长 | `number` | `200` |
| `overlay` | 是否显示背景遮罩层 | `boolean` | `true` |
| `close-on-click-overlay` | 点击遮罩层时是否自动关闭 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `close` | 收起下拉菜单或关闭滑动单元格 |

</div>

<div class="nv-doc-card">

## API — `<nv-dropdown-item>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `''` |
| `title` | 标题文案 | `string` | `''` |
| `options` | 可选项数据源数组 | `NvDropdownOption[]` | `() =&gt; []` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `title-class` | 标题自定义类名 | `string` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: Numeric` |
| `change` | 绑定值或选中项发生变化时触发 | `value: Numeric` |
| `open` | 打开弹层、下拉菜单或滑动单元格时触发 | `-` |
| `close` | 关闭组件或弹层时触发 | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `toggle` | 切换展开/收起或选中/未选中状态 |

</div>
