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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `string` | `'优惠券'` |
| `coupons` | `NvCouponInfo[]` | `() =&gt; []` |
| `chosen-coupon` | `number` | `-1` |
| `editable` | `boolean` | `true` |
| `border` | `boolean` | `true` |
| `currency` | `string` | `'¥'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

</div>

<div class="nv-doc-card">

## API — `<nv-coupon-list>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `coupons` | `NvCouponInfo[]` | `() =&gt; []` |
| `disabled-coupons` | `NvCouponInfo[]` | `() =&gt; []` |
| `chosen-coupon` | `number` | `-1` |
| `code` | `string` | `''` |
| `enabled-title` | `string` | `'可用'` |
| `disabled-title` | `string` | `'不可用'` |
| `exchange-button-text` | `string` | `'兑换'` |
| `exchange-button-disabled` | `boolean` | `false` |
| `exchange-button-loading` | `boolean` | `false` |
| `close-button-text` | `string` | `'不使用优惠'` |
| `input-placeholder` | `string` | `'请输入优惠码'` |
| `show-exchange-bar` | `boolean` | `true` |
| `show-close-button` | `boolean` | `true` |
| `show-count` | `boolean` | `true` |
| `currency` | `string` | `'¥'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `change` | `index: number` |
| `exchange` | `code: string` |
| `update:code` | `code: string` |

</div>
