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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `''` |
| `list` | `NvAddressListItem[]` | `() =&gt; []` |
| `disabled-list` | `NvAddressListItem[]` | `() =&gt; []` |
| `disabled-text` | `string` | `''` |
| `switchable` | `boolean` | `true` |
| `add-button-text` | `string` | `'新增地址'` |
| `default-tag-text` | `string` | `'默认'` |
| `right-icon` | `string` | `'edit'` |
| `fixed` | `boolean` | `false` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `id: Numeric` |
| `add` | `-` |
| `edit` | `item: NvAddressListItem, index: number` |
| `select` | `item: NvAddressListItem, index: number` |
| `edit-disabled` | `item: NvAddressListItem, index: number` |
| `select-disabled` | `item: NvAddressListItem, index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `top` | 自定义 `top` 区域内容 |
| `item-bottom` | 自定义 `item-bottom` 区域内容 |
| `default` | 默认内容插槽 |

</div>
