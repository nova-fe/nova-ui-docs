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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `active` | 当前激活项的索引或名称 | `Numeric` | `0` |
| `type` | 标签栏样式风格，可选值为 line / card | `NvTabsType` | `'line'` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `''` |
| `background` | 背景色 | `string` | `''` |
| `line-width` | 线条宽度（签名笔触粗细或标签页指示条宽度） | `Numeric` | `40` |
| `line-height` | 底部激活指示条高度 | `Numeric` | `3` |
| `animated` | 是否开启切换标签内容时的转场动画 | `boolean` | `false` |
| `border` | 是否显示边框 | `boolean` | `false` |
| `shrink` | 是否开启标签左侧收缩布局 | `boolean` | `false` |
| `scrollable` | 是否开启滚动播放或标签栏横向滚动 | `boolean` | `false` |
| `swipe-threshold` | 标签页滚动阈值，标签数量超过该值且总宽度超出时可横向滚动 | `number` | `5` |
| `title-active-color` | 标签标题选中态颜色 | `string` | `''` |
| `title-inactive-color` | 标签标题默认态颜色 | `string` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:active` | 更新当前激活标签索引（v-model:active） | `value: Numeric` |
| `change` | 绑定值或选中项发生变化时触发 | `name: Numeric, title: string` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `nav-left` | 自定义标签栏左侧内容 |
| `nav-right` | 自定义标签栏右侧内容 |
| `nav-bottom` | 自定义标签栏底部扩展内容 |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-tab>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标签页标题 | `string` | `''` |
| `name` | 标签唯一标识，默认使用索引值 | `Numeric` | `undefined` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `dot` | 是否显示右上角小红点 | `boolean` | `false` |
| `badge` | 图标右上角徽标内容 | `Numeric` | `undefined` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
