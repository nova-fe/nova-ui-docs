---
title: Tab 标签页
demoPath: "/pages/nova-demo/navigation?comp=tabs&title=Tab%20%E6%A0%87%E7%AD%BE%E9%A1%B5"
---

# Tab 标签页

<div class="nv-doc-card">

## 介绍

`nv-tabs` / `nv-tab` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('tabs')" class="sec">
          <text class="sec-title">Tabs 标签页</text>
          <nv-tabs v-model:active="activeTab">
            <nv-tab title="标签 1"><view class="tab-pane"><text class="pane-txt">内容 1</text></view></nv-tab>
            <nv-tab title="标签 2" dot><view class="tab-pane"><text class="pane-txt">内容 2</text></view></nv-tab>
            <nv-tab title="标签 3" :badge="3"><view class="tab-pane"><text class="pane-txt">内容 3</text></view></nv-tab>
          </nv-tabs>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-tabs>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `active` | `Numeric` | `0` |
| `type` | `NvTabsType` | `'line'` |
| `color` | `string` | `''` |
| `background` | `string` | `''` |
| `line-width` | `Numeric` | `40` |
| `line-height` | `Numeric` | `3` |
| `animated` | `boolean` | `false` |
| `border` | `boolean` | `false` |
| `shrink` | `boolean` | `false` |
| `scrollable` | `boolean` | `false` |
| `swipe-threshold` | `number` | `5` |
| `title-active-color` | `string` | `''` |
| `title-inactive-color` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:active` | `value: Numeric` |
| `change` | `name: Numeric, title: string` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `nav-left` | 自定义 `nav-left` 区域内容 |
| `nav-right` | 自定义 `nav-right` 区域内容 |
| `nav-bottom` | 自定义 `nav-bottom` 区域内容 |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-tab>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `string` | `''` |
| `name` | `Numeric` | `undefined` |
| `disabled` | `boolean` | `false` |
| `dot` | `boolean` | `false` |
| `badge` | `Numeric` | `undefined` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
