---
title: Dialog 弹出框
demoPath: "/pages/nova-demo/feedback?comp=dialog&title=Dialog%20%E5%BC%B9%E5%87%BA%E6%A1%86"
---

# Dialog 弹出框

<div class="nv-doc-card">

## 介绍

`nv-dialog` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('dialog')" class="sec-flat">
          <nv-cell-group title="Dialog 弹出框" inset>
            <nv-cell title="确认弹窗" is-link @click="onDialog" />
            <nv-cell title="圆角按钮风格" is-link @click="onRoundDialog" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-dialog>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `title` | 标题文案 | `string` | `''` |
| `message` | 提示内容文案 | `string` | `''` |
| `theme` | 弹窗按钮样式风格，可选值为 default / round-button | `NvDialogTheme` | `'default'` |
| `show-confirm-button` | 是否展示确认按钮 | `boolean` | `true` |
| `show-cancel-button` | 是否展示取消按钮 | `boolean` | `false` |
| `confirm-button-text` | 确认按钮文字 | `string` | `'确认'` |
| `cancel-button-text` | 取消按钮文字 | `string` | `'取消'` |
| `confirm-button-color` | 确认按钮文字颜色 | `string` | `''` |
| `cancel-button-color` | 取消按钮文字颜色 | `string` | `''` |
| `close-on-click-overlay` | 点击遮罩层时是否自动关闭 | `boolean` | `false` |
| `z-index` | 组件层级 z-index | `number` | `2500` |
| `before-close` | 关闭前的异步回调函数，返回 false 可阻止关闭 | `(action: NvDialogAction) =&gt; boolean \| Promise&lt;boolean&gt;` | `undefined` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `confirm` | 点击确认按钮时触发 | `-` |
| `cancel` | 点击取消按钮时触发 | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义标题区域内容 |
| `default` | 默认内容插槽 |

</div>
