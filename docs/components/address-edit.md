---
title: AddressEdit 地址编辑
demoPath: "/pages/nova-demo/business?comp=address-edit&title=AddressEdit%20%E5%9C%B0%E5%9D%80%E7%BC%96%E8%BE%91"
---

# AddressEdit 地址编辑

<div class="nv-doc-card">

## 介绍

`nv-address-edit` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('address-edit')" class="sec">
          <text class="sec-title">AddressEdit 地址编辑</text>
          <view class="card-nopad">
            <nv-address-edit show-set-default show-delete @save="showSuccessToast('地址已保存')" @delete="showToast('已删除')" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-address-edit>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `area-list` | `NvAreaList` | `() =&gt; DEFAULT_AREA_LIST` |
| `address-info` | `Partial&lt;NvAddressEditInfo&gt;` | `() =&gt; ({` |
| `show-delete` | `boolean` | `-` |
| `show-set-default` | `boolean` | `-` |
| `show-area` | `boolean` | `-` |
| `show-detail` | `boolean` | `-` |
| `save-button-text` | `string` | `-` |
| `delete-button-text` | `string` | `-` |
| `is-saving` | `boolean` | `-` |
| `is-deleting` | `boolean` | `-` |
| `area-placeholder` | `string` | `-` |
| `detail-maxlength` | `number` | `-` |
| `custom-class` | `string` | `-` |
| `custom-style` | `StyleInput` | `-` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `save` | `info: NvAddressEditInfo` |
| `delete` | `info: NvAddressEditInfo` |
| `change-detail` | `value: string` |
| `change-default` | `value: boolean` |

</div>
