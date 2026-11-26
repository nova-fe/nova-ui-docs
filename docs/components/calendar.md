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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `type` | 日历选择类型，可选值为 single（单选）/ multiple（多选）/ range（区间） | `NvCalendarType` | `'single'` |
| `title` | 标题文案 | `string` | `'日期选择'` |
| `color` | 主题色，对底部确认按钮和选中日期生效 | `string` | `''` |
| `min-date` | 可选择的最小日期下限 | `NvCalendarDateInput` | `undefined` |
| `max-date` | 可选择的最小/最大日期上限 | `NvCalendarDateInput` | `undefined` |
| `default-date` | 默认选中的日期或日期数组 | `NvCalendarDateInput \| NvCalendarDateInput[] \| null` | `undefined` |
| `confirm-text` | 确认按钮文字 | `string` | `'确定'` |
| `confirm-disabled-text` | 确认按钮处于禁用状态时的文字 | `string` | `'确定'` |
| `poppable` | 是否以弹层形式展示，设为 false 时平铺直接渲染 | `boolean` | `true` |
| `round` | 是否为圆角样式 | `boolean` | `true` |
| `position` | 弹出位置，可选值为 bottom / top / right / left | `NvPopupPosition` | `'bottom'` |
| `show-confirm` | 是否展示底部确认按钮 | `boolean` | `true` |
| `first-day-of-week` | 设置周起始日，0 表示周日、1 表示周一，依此类推 | `number` | `0` |
| `show-title` | 是否展示顶部标题 | `boolean` | `true` |
| `show-subtitle` | 是否展示日历副标题（当前年月与干支生肖） | `boolean` | `true` |
| `show-mark` | 是否显示月份背景水印 | `boolean` | `true` |
| `show-lunar` | 是否在日历中显示农历日期、传统节日与二十四节气 | `boolean` | `false` |
| `show-festival` | 是否在日历单元格中展示传统节日与二十四节气 | `boolean` | `true` |
| `close-on-click-overlay` | 点击遮罩层时是否自动关闭 | `boolean` | `true` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `allow-same-day` | 日期范围选择时是否允许起止日期为同一天 | `boolean` | `false` |
| `max-range` | 日期区间最多可选天数 | `number` | `0` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `select` | 选中某一项时触发 | `value: Date \| Date[]` |
| `confirm` | 点击确认按钮时触发 | `value: Date \| Date[]` |
| `close` | 关闭组件或弹层时触发 | `-` |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `reset` | 重置组件状态（重置日历选中、倒计时或翻滚文本） |
| `getSelectedDate` | 获取日历当前已选中的日期或日期数组 |

</div>
