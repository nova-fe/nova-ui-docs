---
title: Field 输入框
demoPath: "/pages/nova-demo/form?comp=field&title=Field%20%E8%BE%93%E5%85%A5%E6%A1%86"
---

# Field 输入框

<div class="nv-doc-card">

## 介绍

`nv-field` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('field')" class="sec">
          <text class="sec-title">Field 输入框（文本 / 密码睁闭眼切换 / 清除 / 多行字数统计）</text>
          <nv-cell-group inset>
            <nv-field v-model="fieldText" label="文本" placeholder="请输入用户名" clearable />
            <nv-field v-model="fieldPwd" label="密码" type="password" placeholder="请输入密码（支持显隐切换）" show-password-toggle />
            <nv-field
              v-model="remark"
              label="留言"
              type="textarea"
              placeholder="请输入留言内容"
              :maxlength="50"
              show-word-limit
            />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-field>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `''` |
| `name` | `string` | `''` |
| `label` | `string` | `''` |
| `type` | `NvFieldType` | `'text'` |
| `placeholder` | `string` | `''` |
| `maxlength` | `number` | `-1` |
| `disabled` | `boolean` | `undefined` |
| `readonly` | `boolean` | `undefined` |
| `required` | `boolean` | `false` |
| `colon` | `boolean` | `undefined` |
| `clearable` | `boolean` | `false` |
| `show-password-toggle` | `boolean` | `false` |
| `clickable` | `boolean` | `false` |
| `is-link` | `boolean` | `false` |
| `border` | `boolean` | `true` |
| `show-word-limit` | `boolean` | `false` |
| `autosize` | `boolean` | `false` |
| `rows` | `number` | `2` |
| `label-width` | `Numeric` | `undefined` |
| `label-align` | `NvFormLabelAlign` | `undefined` |
| `input-align` | `NvFormAlign` | `undefined` |
| `error-message` | `string` | `''` |
| `error-message-align` | `NvFormAlign` | `undefined` |
| `left-icon` | `string` | `''` |
| `right-icon` | `string` | `''` |
| `rules` | `NvFieldRule[]` | `() =&gt; []` |
| `custom-class` | `string` | `''` |
| `label-class` | `string` | `''` |
| `input-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: string` |
| `focus` | `event: unknown` |
| `blur` | `event: unknown` |
| `clear` | `event: unknown` |
| `toggle-password` | `visible: boolean` |
| `click-input` | `event: unknown` |
| `click-left-icon` | `event: unknown` |
| `click-right-icon` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left-icon` | 自定义 `left-icon` 区域内容 |
| `label` | 自定义 `label` 区域内容 |
| `input` | 自定义 `input` 区域内容 |
| `right-icon` | 自定义 `right-icon` 区域内容 |
| `button` | 自定义 `button` 区域内容 |
| `extra` | 自定义 `extra` 区域内容 |

### 方法（Expose）

通过 `ref` 可调用：`validate()`、`resetValidation()`

</div>
