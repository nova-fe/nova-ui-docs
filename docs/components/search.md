---
title: Search 搜索
demoPath: "/pages/nova-demo/form?comp=search&title=Search%20%E6%90%9C%E7%B4%A2"
---

# Search 搜索

<div class="nv-doc-card">

## 介绍

`nv-search` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('search')" class="sec">
          <text class="sec-title">Search 搜索</text>
          <nv-search v-model="searchVal" show-action placeholder="请输入搜索关键词" @search="onSearch" />
          <view class="gap-sm" />
          <nv-search v-model="searchVal" shape="round" background="#4fc08d" placeholder="圆角自定义背景" />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-search>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `string` | `''` |
| `label` | 标题/标签文本 | `string` | `''` |
| `shape` | 搜索框形状，可选值为 square / round | `'square' \| 'round'` | `'square'` |
| `background` | 背景色 | `string` | `'#ffffff'` |
| `maxlength` | 最大可输入字符长度 | `number` | `-1` |
| `placeholder` | 占位提示文字或是否生成等高占位元素 | `string` | `'请输入搜索关键词'` |
| `clearable` | 是否启用清除图标，点击可清空当前值 | `boolean` | `true` |
| `show-action` | 是否在搜索框右侧显示操作按钮 | `boolean` | `false` |
| `action-text` | 右侧取消/操作按钮文字 | `string` | `'取消'` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `input-align` | 输入框内容对齐方式，可选值为 left / center / right | `'left' \| 'center' \| 'right'` | `'left'` |
| `left-icon` | 左侧图标名称或图片链接 | `string` | `'search'` |
| `right-icon` | 右侧图标名称或图片链接 | `string` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: string` |
| `search` | 确认搜索（点击键盘搜索键）时触发 | `value: string` |
| `cancel` | 点击取消按钮时触发 | `-` |
| `clear` | 点击清空按钮时触发 | `event: unknown` |
| `focus` | 输入框聚焦时触发 | `event: unknown` |
| `blur` | 输入框失焦或收起键盘时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left` | 自定义左侧区域内容 |
| `label` | 自定义标签文字区域 |
| `left-icon` | 自定义左侧图标内容 |
| `right-icon` | 自定义右侧图标内容 |
| `action` | 自定义右侧操作按钮区域内容 |

</div>
