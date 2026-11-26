---
title: ContactList 联系人列表
demoPath: "/pages/nova-demo/business?comp=contact-list&title=ContactList%20%E8%81%94%E7%B3%BB%E4%BA%BA%E5%88%97%E8%A1%A8"
---

# ContactList 联系人列表

<div class="nv-doc-card">

## 介绍

`nv-contact-list` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('contact-list')" class="sec">
          <text class="sec-title">ContactList 联系人列表</text>
          <nv-contact-list v-model="chosenContact" :list="contactList" @add="showToast('新建联系人')" />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-contact-list>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `''` |
| `list` | 列表数据源数组 | `NvContactListItem[]` | `() =&gt; []` |
| `add-text` | 新增联系人按钮文案 | `string` | `'新建联系人'` |
| `default-tag-text` | 默认项标签文字 | `string` | `'默认'` |
| `fixed` | 是否固定定位在顶部或底部 | `boolean` | `false` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `id: Numeric` |
| `add` | 点击底部新增按钮时触发 | `-` |
| `edit` | 点击编辑按钮时触发 | `item: NvContactListItem, index: number` |
| `select` | 选中某一项时触发 | `item: NvContactListItem, index: number` |

</div>
