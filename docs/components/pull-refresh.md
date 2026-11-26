---
title: PullRefresh 下拉刷新
demoPath: "/pages/nova-demo/feedback?comp=pull-refresh&title=PullRefresh%20%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0"
---

# PullRefresh 下拉刷新

<div class="nv-doc-card">

## 介绍

`nv-pull-refresh` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## API — `<nv-pull-refresh>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `boolean` | `false` |
| `pulling-text` | 下拉过程提示文案 | `string` | `'下拉即可刷新...'` |
| `loosing-text` | 下拉释放过程提示文案 | `string` | `'释放即可刷新...'` |
| `loading-text` | 加载过程中的提示文字 | `string` | `'加载中...'` |
| `success-text` | 刷新成功后的提示文案 | `string` | `''` |
| `success-duration` | 刷新成功提示展示时长（单位 ms） | `number` | `500` |
| `head-height` | 顶部下拉提示区域高度（单位 px） | `Numeric` | `50` |
| `pull-distance` | 触发下拉刷新的最小拖动距离（单位 px） | `Numeric` | `50` |
| `animation-duration` | 下拉回弹动画时长（单位 ms） | `number` | `300` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: boolean` |
| `refresh` | 下拉触发刷新时触发 | `-` |
| `change` | 绑定值或选中项发生变化时触发 | `detail: { status: NvPullRefreshStatus; distance: number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
