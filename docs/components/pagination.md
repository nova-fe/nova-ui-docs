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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `number` | `1` |
| `total-items` | 总记录条数 | `Numeric` | `0` |
| `items-per-page` | 每页显示的记录条数 | `Numeric` | `10` |
| `page-count` | 总页数 | `Numeric` | `0` |
| `show-page-size` | 显示的页码按钮个数 | `Numeric` | `5` |
| `prev-text` | 上一页按钮文字 | `string` | `'上一页'` |
| `next-text` | 下一页按钮文字 | `string` | `'下一页'` |
| `mode` | 显示模式，可选值为 multi（完整分页）/ simple（简洁模式） | `NvPaginationMode` | `'multi'` |
| `force-ellipses` | 是否显示页码省略号按钮 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: number` |
| `change` | 绑定值或选中项发生变化时触发 | `value: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `prev-text` | 自定义上一页按钮内容 |
| `page` | 自定义页码按钮展示内容 |
| `next-text` | 自定义下一页按钮内容 |

</div>
