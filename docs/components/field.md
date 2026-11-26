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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `''` |
| `name` | 表单项名称，作为 Form 提交与校验时的唯一字段键 | `string` | `''` |
| `label` | 标题/标签文本 | `string` | `''` |
| `type` | 输入框类型，可选值为 text / password / number / digit / tel / textarea | `NvFieldType` | `'text'` |
| `placeholder` | 输入框占位提示文字 | `string` | `''` |
| `maxlength` | 最大可输入字符长度 | `number` | `-1` |
| `disabled` | 是否禁用当前组件 | `boolean` | `undefined` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `undefined` |
| `required` | 是否显示表单必填星号 | `boolean` | `false` |
| `colon` | 是否在表单项标签右侧显示冒号 | `boolean` | `undefined` |
| `clearable` | 是否启用清除图标，点击可清空当前值 | `boolean` | `false` |
| `show-password-toggle` | 密码输入框是否显示睁眼/闭眼明文切换图标 | `boolean` | `false` |
| `clickable` | 是否开启点击反馈效果 | `boolean` | `false` |
| `is-link` | 是否展示右侧箭头并开启点击反馈 | `boolean` | `false` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `show-word-limit` | 是否显示字数统计（需同时设置 maxlength） | `boolean` | `false` |
| `autosize` | 是否自适应内容高度（仅 textarea 生效） | `boolean` | `false` |
| `rows` | textarea 模式下的显示行数 | `number` | `2` |
| `label-width` | 表单项左侧标签宽度 | `Numeric` | `undefined` |
| `label-align` | 表单项左侧标签对齐方式，可选值为 left / center / right / top | `NvFormLabelAlign` | `undefined` |
| `input-align` | 输入框内容对齐方式，可选值为 left / center / right | `NvFormAlign` | `undefined` |
| `error-message` | 底部错误提示文案，为空时不展示 | `string` | `''` |
| `error-message-align` | 错误提示文案对齐方式，可选值为 left / center / right | `NvFormAlign` | `undefined` |
| `left-icon` | 左侧图标名称或图片链接 | `string` | `''` |
| `right-icon` | 右侧图标名称或图片链接 | `string` | `''` |
| `rules` | 表单校验规则数组（支持 required / pattern / validator / message） | `NvFieldRule[]` | `() =&gt; []` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `label-class` | 左侧标签自定义类名 | `string` | `''` |
| `input-class` | 输入框自定义类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: string` |
| `focus` | 输入框聚焦时触发 | `event: unknown` |
| `blur` | 输入框失焦或收起键盘时触发 | `event: unknown` |
| `clear` | 点击清空按钮时触发 | `event: unknown` |
| `toggle-password` | 点击密码输入框睁眼/闭眼切换图标时触发 | `visible: boolean` |
| `click-input` | 点击输入区域时触发 | `event: unknown` |
| `click-left-icon` | 点击输入框左侧图标时触发 | `event: unknown` |
| `click-right-icon` | 点击输入框右侧图标时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left-icon` | 自定义左侧图标内容 |
| `label` | 自定义标签文字区域 |
| `input` | 自定义输入框主体内容 |
| `right-icon` | 自定义右侧图标内容 |
| `button` | 自定义按钮区域内容 |
| `extra` | 自定义右侧额外扩展内容 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `validate` | 触发校验，返回 Promise |
| `resetValidation` | 重置表单或单个字段的校验错误状态 |

</div>
