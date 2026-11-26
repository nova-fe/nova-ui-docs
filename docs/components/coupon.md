---
title: Coupon 优惠券
demoPath: "/pages/nova-demo/business?comp=coupon&title=Coupon%20%E4%BC%98%E6%83%A0%E5%88%B8"
---

# Coupon 优惠券

<div class="nv-doc-card">

## 介绍

`nv-coupon-cell` / `nv-coupon-list` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('coupon')" class="sec">
          <text class="sec-title">Coupon 优惠券单元格 &amp; 优惠券列表</text>
          <nv-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showCoupon = true"
          />
          <view class="gap-md" />
          <view class="card-nopad">
            <nv-coupon-list
              :coupons="coupons"
              :disabled-coupons="disabledCoupons"
              :chosen-coupon="chosenCoupon"
              @change="onCouponChange"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-coupon-cell>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题文案 | `string` | `'优惠券'` |
| `coupons` | 可用优惠券列表 | `NvCouponInfo[]` | `() =&gt; []` |
| `chosen-coupon` | 当前选中优惠券的索引，-1 表示未选中 | `number` | `-1` |
| `editable` | 是否可编辑/可点击进入选择 | `boolean` | `true` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `currency` | 货币符号（默认 ¥） | `string` | `'¥'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

</div>

<div class="nv-doc-card">

## API — `<nv-coupon-list>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `coupons` | 可用优惠券列表 | `NvCouponInfo[]` | `() =&gt; []` |
| `disabled-coupons` | 不可用优惠券列表 | `NvCouponInfo[]` | `() =&gt; []` |
| `chosen-coupon` | 当前选中优惠券的索引，-1 表示未选中 | `number` | `-1` |
| `code` | 兑换码输入框的绑定值（支持 v-model:code） | `string` | `''` |
| `enabled-title` | 可用优惠券标签页标题 | `string` | `'可用'` |
| `disabled-title` | 不可用优惠券标签页标题 | `string` | `'不可用'` |
| `exchange-button-text` | 兑换按钮文字 | `string` | `'兑换'` |
| `exchange-button-disabled` | 是否禁用兑换按钮 | `boolean` | `false` |
| `exchange-button-loading` | 兑换按钮是否显示加载状态 | `boolean` | `false` |
| `close-button-text` | 关闭/完成按钮文字 | `string` | `'不使用优惠'` |
| `input-placeholder` | 兑换码输入框占位提示文字 | `string` | `'请输入优惠码'` |
| `show-exchange-bar` | 是否展示顶部优惠码兑换栏 | `boolean` | `true` |
| `show-close-button` | 是否显示底部“不使用优惠券”关闭按钮 | `boolean` | `true` |
| `show-count` | 是否在标签栏标题中显示优惠券数量 | `boolean` | `true` |
| `currency` | 货币符号（默认 ¥） | `string` | `'¥'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 绑定值或选中项发生变化时触发 | `index: number` |
| `exchange` | 点击优惠券兑换按钮时触发 | `code: string` |
| `update:code` | 更新兑换码输入值（v-model:code） | `code: string` |

</div>
