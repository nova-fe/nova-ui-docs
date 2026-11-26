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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `model-value` | 当前绑定值（支持 v-model） | `string` | `''` |
| `title` | 标题文案 | `string` | `''` |
| `theme` | 键盘样式风格，可选值为 default / custom | `NvNumberKeyboardTheme` | `'default'` |
| `maxlength` | 最大可输入字符长度 | `Numeric` | `Number.MAX_SAFE_INTEGER` |
| `extra-key` | 键盘左下角额外按键内容（支持单个字符或数组） | `string \| string[]` | `''` |
| `close-button-text` | 关闭/完成按钮文字 | `string` | `''` |
| `delete-button-text` | 删除按钮文字 | `string` | `''` |
| `show-delete-key` | 是否展示删除按键 | `boolean` | `true` |
| `hide-on-click-outside` | 点击外部区域时是否自动收起数字键盘 | `boolean` | `true` |
| `random-key-order` | 是否将数字键盘按键顺序随机打乱 | `boolean` | `false` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `z-index` | 组件层级 z-index | `number` | `2000` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: string` |
| `input` | 点击数字键盘按键输入内容时触发 | `key: string` |
| `delete` | 点击删除按钮或按键时触发 | `-` |
| `close` | 关闭组件或弹层时触发 | `-` |
| `blur` | 输入框失焦或收起键盘时触发 | `-` |

</div>
