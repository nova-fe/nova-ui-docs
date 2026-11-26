---
title: Pagination 分页
demoPath: "/pages/nova-demo/navigation?comp=pagination&title=Pagination%20%E5%88%86%E9%A1%B5"
---

# Pagination 分页

<div class="nv-doc-card">

## 介绍

`nv-pagination` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('pagination')" class="sec">
          <text class="sec-title">Pagination 分页</text>
          <nv-pagination v-model="currentPage" :total-items="50" :items-per-page="10" />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-pagination>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `number` | `1` |
| `total-items` | `Numeric` | `0` |
| `items-per-page` | `Numeric` | `10` |
| `page-count` | `Numeric` | `0` |
| `show-page-size` | `Numeric` | `5` |
| `prev-text` | `string` | `'上一页'` |
| `next-text` | `string` | `'下一页'` |
| `mode` | `NvPaginationMode` | `'multi'` |
| `force-ellipses` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: number` |
| `change` | `value: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `prev-text` | 自定义 `prev-text` 区域内容 |
| `page` | 自定义 `page` 区域内容 |
| `next-text` | 自定义 `next-text` 区域内容 |

</div>
