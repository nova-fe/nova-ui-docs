---
title: Calendar 日历
demoPath: "/pages/nova-demo/form?comp=calendar&title=Calendar%20%E6%97%A5%E5%8E%86"
---

# Calendar 日历

<div class="nv-doc-card">

## 介绍

`nv-calendar` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('calendar')" class="sec">
          <text class="sec-title">Calendar 日历（支持农历 / 传统节日 / 二十四节气）</text>
          <nv-cell-group inset>
            <nv-cell title="显示农历与节气" center>
              <nv-switch v-model="showCalendarLunar" size="22" />
            </nv-cell>
            <nv-cell title="选择单个日期" :value="calSingleText" is-link @click="openCal('single')" />
            <nv-cell title="选择多个日期" :value="calMultiText" is-link @click="openCal('multiple')" />
            <nv-cell title="选择日期区间" :value="calRangeText" is-link @click="openCal('range')" />
          </nv-cell-group>
          <view class="gap-md" />
          <text class="sec-title">平铺展示日历（poppable = false）</text>
          <view class="card-nopad">
            <nv-calendar
              :poppable="false"
              :show-confirm="false"
              :show-lunar="showCalendarLunar"
              min-date="2025-01-01"
              max-date="2027-12-31"
              title="日历平铺展示"
              @select="onInlineCalSelect"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-calendar>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `type` | `NvCalendarType` | `'single'` |
| `title` | `string` | `'日期选择'` |
| `color` | `string` | `''` |
| `min-date` | `NvCalendarDateInput` | `undefined` |
| `max-date` | `NvCalendarDateInput` | `undefined` |
| `default-date` | `NvCalendarDateInput \| NvCalendarDateInput[] \| null` | `undefined` |
| `confirm-text` | `string` | `'确定'` |
| `confirm-disabled-text` | `string` | `'确定'` |
| `poppable` | `boolean` | `true` |
| `round` | `boolean` | `true` |
| `position` | `NvPopupPosition` | `'bottom'` |
| `show-confirm` | `boolean` | `true` |
| `first-day-of-week` | `number` | `0` |
| `show-title` | `boolean` | `true` |
| `show-subtitle` | `boolean` | `true` |
| `show-mark` | `boolean` | `true` |
| `show-lunar` | `boolean` | `false` |
| `show-festival` | `boolean` | `true` |
| `close-on-click-overlay` | `boolean` | `true` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `allow-same-day` | `boolean` | `false` |
| `max-range` | `number` | `0` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `select` | `value: Date \| Date[]` |
| `confirm` | `value: Date \| Date[]` |
| `close` | `-` |

### 方法（Expose）

通过 `ref` 可调用：`reset()`、`getSelectedDate()`

</div>
