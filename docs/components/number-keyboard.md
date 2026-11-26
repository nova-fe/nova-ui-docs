---
title: NumberKeyboard 数字键盘
demoPath: "/pages/nova-demo/form?comp=number-keyboard&title=NumberKeyboard%20%E6%95%B0%E5%AD%97%E9%94%AE%E7%9B%98"
---

# NumberKeyboard 数字键盘

<div class="nv-doc-card">

## 介绍

`nv-number-keyboard` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('number-keyboard')" class="sec">
          <text class="sec-title">NumberKeyboard 数字键盘（当前输入：{{ kbVal || '空' }}）</text>
          <nv-cell-group inset>
            <nv-cell title="弹出默认键盘" is-link @click="showKb = true" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-number-keyboard>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `model-value` | `string` | `''` |
| `title` | `string` | `''` |
| `theme` | `NvNumberKeyboardTheme` | `'default'` |
| `maxlength` | `Numeric` | `Number.MAX_SAFE_INTEGER` |
| `extra-key` | `string \| string[]` | `''` |
| `close-button-text` | `string` | `''` |
| `delete-button-text` | `string` | `''` |
| `show-delete-key` | `boolean` | `true` |
| `hide-on-click-outside` | `boolean` | `true` |
| `random-key-order` | `boolean` | `false` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `z-index` | `number` | `2000` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `update:modelValue` | `value: string` |
| `input` | `key: string` |
| `delete` | `-` |
| `close` | `-` |
| `blur` | `-` |

</div>
