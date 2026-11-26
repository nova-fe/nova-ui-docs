---
title: PasswordInput 密码输入框
demoPath: "/pages/nova-demo/form?comp=password-input&title=PasswordInput%20%E5%AF%86%E7%A0%81%E8%BE%93%E5%85%A5%E6%A1%86"
---

# PasswordInput 密码输入框

<div class="nv-doc-card">

## 介绍

`nv-password-input` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('password-input')" class="sec">
          <text class="sec-title">PasswordInput 密码输入框（点击唤起数字键盘）</text>
          <nv-password-input :value="pwdVal" info="密码为 6 位数字" :focused="showPwdKb" @focus="showPwdKb = true" />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-password-input>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `value` | `string` | `''` |
| `info` | `string` | `''` |
| `error-info` | `string` | `''` |
| `length` | `Numeric` | `6` |
| `gutter` | `Numeric` | `0` |
| `mask` | `boolean` | `true` |
| `focused` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `focus` | `event: unknown` |

</div>
