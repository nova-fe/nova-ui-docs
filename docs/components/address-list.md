---
title: AddressList 地址列表
demoPath: "/pages/nova-demo/business?comp=address-list&title=AddressList%20%E5%9C%B0%E5%9D%80%E5%88%97%E8%A1%A8"
---

# AddressList 地址列表

<div class="nv-doc-card">

## 介绍

`nv-address-list` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('address-list')" class="sec">
          <text class="sec-title">AddressList 地址列表</text>
          <nv-address-list
            v-model="chosenAddr"
            :list="addrList"
            default-tag-text="默认"
            @add="showToast('点击新增地址')"
          />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-address-list>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `''` |
| `list` | 列表数据源数组 | `NvAddressListItem[]` | `() =&gt; []` |
| `disabled-list` | 不可配送地址列表 | `NvAddressListItem[]` | `() =&gt; []` |
| `disabled-text` | 不可配送地址区域提示文案 | `string` | `''` |
| `switchable` | 是否允许切换选中地址 | `boolean` | `true` |
| `add-button-text` | 底部新增按钮文案 | `string` | `'新增地址'` |
| `default-tag-text` | 默认项标签文字 | `string` | `'默认'` |
| `right-icon` | 右侧图标名称或图片链接 | `string` | `'edit'` |
| `fixed` | 是否固定定位在顶部或底部 | `boolean` | `false` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `id: Numeric` |
| `add` | 点击底部新增按钮时触发 | `-` |
| `edit` | 点击编辑按钮时触发 | `item: NvAddressListItem, index: number` |
| `select` | 选中某一项时触发 | `item: NvAddressListItem, index: number` |
| `edit-disabled` | 点击不可配送地址的编辑按钮时触发 | `item: NvAddressListItem, index: number` |
| `select-disabled` | 点击不可配送列表中的地址项时触发 | `item: NvAddressListItem, index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `top` | 自定义顶部扩展区域 |
| `item-bottom` | 自定义每个地址项底部扩展区域 |
| `default` | 默认内容插槽 |

</div>
