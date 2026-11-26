---
title: TreeSelect 分类选择
demoPath: "/pages/nova-demo/navigation?comp=tree-select&title=TreeSelect%20%E5%88%86%E7%B1%BB%E9%80%89%E6%8B%A9"
---

# TreeSelect 分类选择

<div class="nv-doc-card">

## 介绍

`nv-tree-select` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('tree-select')" class="sec">
          <text class="sec-title">TreeSelect 分类选择</text>
          <nv-tree-select
            v-model:active-id="treeActiveId"
            v-model:main-active-index="treeMainIdx"
            :items="treeItems"
            :height="200"
          />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-tree-select>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `items` | `NvTreeSelectItem[]` | `() =&gt; []` |
| `active-id` | `Numeric \| Numeric[]` | `0` |
| `main-active-index` | `number` | `0` |
| `height` | `Numeric` | `300` |
| `max` | `Numeric` | `Infinity` |
| `selected-icon` | `string` | `'success'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:activeId` | `value: Numeric \| Numeric[]` |
| `update:mainActiveIndex` | `index: number` |
| `click-nav` | `index: number` |
| `click-item` | `item: NvTreeSelectChild` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `content` | 自定义 `content` 区域内容 |

</div>
