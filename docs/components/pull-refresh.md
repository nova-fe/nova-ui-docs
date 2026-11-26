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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `boolean` | `false` |
| `pulling-text` | `string` | `'下拉即可刷新...'` |
| `loosing-text` | `string` | `'释放即可刷新...'` |
| `loading-text` | `string` | `'加载中...'` |
| `success-text` | `string` | `''` |
| `success-duration` | `number` | `500` |
| `head-height` | `Numeric` | `50` |
| `pull-distance` | `Numeric` | `50` |
| `animation-duration` | `number` | `300` |
| `disabled` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: boolean` |
| `refresh` | `-` |
| `change` | `detail: { status: NvPullRefreshStatus; distance: number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
