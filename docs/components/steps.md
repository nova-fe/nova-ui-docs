---
title: Steps 步骤条
demoPath: "/pages/nova-demo/display?comp=steps&title=Steps%20%E6%AD%A5%E9%AA%A4%E6%9D%A1"
---

# Steps 步骤条

<div class="nv-doc-card">

## 介绍

`nv-steps` / `nv-step` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('steps')" class="sec">
          <text class="sec-title">Steps 步骤条</text>
          <nv-steps :active="1">
            <nv-step><text class="step-txt">买家下单</text></nv-step>
            <nv-step><text class="step-txt">商家接单</text></nv-step>
            <nv-step><text class="step-txt">交易完成</text></nv-step>
          </nv-steps>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-steps>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `active` | 当前激活项的索引或名称 | `Numeric` | `0` |
| `direction` | 排列或弹出方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `active-color` | 选中/激活状态的颜色 | `string` | `'#07c160'` |
| `inactive-color` | 未选中/未激活状态的颜色 | `string` | `'#969799'` |
| `active-icon` | 当前步骤对应的激活状态图标名称 | `string` | `'checked'` |
| `inactive-icon` | 未激活状态步骤对应的图标名称 | `string` | `''` |
| `finish-icon` | 已完成步骤对应的图标名称 | `string` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click-step` | 点击步骤条某一步骤时触发 | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-step>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
