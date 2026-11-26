---
title: Form 表单
demoPath: "/pages/nova-demo/form?comp=form&title=Form%20%E8%A1%A8%E5%8D%95"
---

# Form 表单

<div class="nv-doc-card">

## 介绍

`nv-form` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('form')" class="sec">
          <text class="sec-title">Form 表单校验</text>
          <nv-form ref="formRef" @submit="onFormSubmit">
            <nv-cell-group inset>
              <nv-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="请输入用户名（必填）"
                clearable
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <nv-field
                v-model="phone"
                name="phone"
                label="手机号"
                type="tel"
                placeholder="请输入 11 位手机号"
                :rules="[{ pattern: /^1\d{10}$/, message: '请输入正确的 11 位手机号' }]"
              />
            </nv-cell-group>
            <view class="sec-btn">
              <nv-button type="primary" block round @click="submitForm">提交校验</nv-button>
            </view>
          </nv-form>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-form>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `label-width` | `Numeric` | `''` |
| `label-align` | `NvFormLabelAlign` | `'left'` |
| `input-align` | `NvFormAlign` | `'left'` |
| `error-message-align` | `NvFormAlign` | `'left'` |
| `colon` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `show-error` | `boolean` | `false` |
| `show-error-message` | `boolean` | `true` |
| `validate-first` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `submit` | `values: Record&lt;string, unknown&gt;` |
| `failed` | `info: { values: Record&lt;string, unknown&gt;; errors: NvFieldValidateError[] }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`validate()`、`resetValidation()`、`getValues()`、`submit()`

</div>
