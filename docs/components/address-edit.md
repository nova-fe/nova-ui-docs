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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `area-list` | 省市区数据列表（含 province_list / city_list / county_list） | `NvAreaList` | `() =&gt; DEFAULT_AREA_LIST` |
| `address-info` | 收货地址初始信息对象 | `Partial&lt;NvAddressEditInfo&gt;` | `() =&gt; ({` |
| `show-delete` | 是否显示删除按钮 | `boolean` | `-` |
| `show-set-default` | 是否显示“设为默认”开关 | `boolean` | `-` |
| `show-area` | 是否显示地区选择栏 | `boolean` | `-` |
| `show-detail` | 是否显示详细地址栏 | `boolean` | `-` |
| `save-button-text` | 保存按钮文字 | `string` | `-` |
| `delete-button-text` | 删除按钮文字 | `string` | `-` |
| `is-saving` | 保存按钮是否处于加载状态 | `boolean` | `-` |
| `is-deleting` | 删除按钮是否处于加载状态 | `boolean` | `-` |
| `area-placeholder` | 地区选择栏占位提示文字 | `string` | `-` |
| `detail-maxlength` | 详细地址最大输入字数 | `number` | `-` |
| `custom-class` | 自定义根节点额外类名 | `string` | `-` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `save` | 点击保存按钮时触发 | `info: NvAddressEditInfo` |
| `delete` | 点击删除按钮或按键时触发 | `info: NvAddressEditInfo` |
| `change-detail` | 修改详细地址内容时触发 | `value: string` |
| `change-default` | 切换“设为默认”开关时触发 | `value: boolean` |

</div>
