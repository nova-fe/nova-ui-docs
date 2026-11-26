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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label-width` | 表单项左侧标签宽度 | `Numeric` | `''` |
| `label-align` | 表单项左侧标签对齐方式，可选值为 left / center / right / top | `NvFormLabelAlign` | `'left'` |
| `input-align` | 输入框内容对齐方式，可选值为 left / center / right | `NvFormAlign` | `'left'` |
| `error-message-align` | 错误提示文案对齐方式，可选值为 left / center / right | `NvFormAlign` | `'left'` |
| `colon` | 是否在表单项标签右侧显示冒号 | `boolean` | `false` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `show-error` | 是否在校验不通过时标红对应输入框内容 | `boolean` | `false` |
| `show-error-message` | 是否在校验不通过时在输入框下方展示错误提示 | `boolean` | `true` |
| `validate-first` | 是否在某一项校验不通过时立即停止后续表单项校验 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `submit` | 提交表单、确认签名或点击提交订单按钮时触发 | `values: Record&lt;string, unknown&gt;` |
| `failed` | 表单提交校验未通过时触发 | `info: { values: Record&lt;string, unknown&gt;; errors: NvFieldValidateError[] }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `validate` | 触发校验，返回 Promise |
| `resetValidation` | 重置表单或单个字段的校验错误状态 |
| `getValues` | 获取所有表单项当前的键值对对象 |
| `submit` | 提交表单（触发校验与 submit 事件）或导出当前签名图片 |

</div>
