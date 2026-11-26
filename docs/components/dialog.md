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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `title` | `string` | `''` |
| `message` | `string` | `''` |
| `theme` | `NvDialogTheme` | `'default'` |
| `show-confirm-button` | `boolean` | `true` |
| `show-cancel-button` | `boolean` | `false` |
| `confirm-button-text` | `string` | `'确认'` |
| `cancel-button-text` | `string` | `'取消'` |
| `confirm-button-color` | `string` | `''` |
| `cancel-button-color` | `string` | `''` |
| `close-on-click-overlay` | `boolean` | `false` |
| `z-index` | `number` | `2500` |
| `before-close` | `(action: NvDialogAction) =&gt; boolean \| Promise&lt;boolean&gt;` | `undefined` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `confirm` | `-` |
| `cancel` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义 `title` 区域内容 |
| `default` | 默认内容插槽 |

</div>
