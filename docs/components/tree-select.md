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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 分类选择左侧导航与右侧选项树形数据 | `NvTreeSelectItem[]` | `() =&gt; []` |
| `active-id` | 右侧选中项的 id，支持单选或多选数组 | `Numeric \| Numeric[]` | `0` |
| `main-active-index` | 左侧选中项的索引（支持 v-model:main-active-index） | `number` | `0` |
| `height` | 组件高度 | `Numeric` | `300` |
| `max` | 最大允许值或最大可选数量 | `Numeric` | `Infinity` |
| `selected-icon` | 右侧选项选中时的图标名称 | `string` | `'success'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:activeId` | 更新右侧选中项 id（v-model:active-id） | `value: Numeric \| Numeric[]` |
| `update:mainActiveIndex` | 更新左侧导航选中索引（v-model:main-active-index） | `index: number` |
| `click-nav` | 点击左侧分类导航项时触发 | `index: number` |
| `click-item` | 点击右侧可选项时触发 | `item: NvTreeSelectChild` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `content` | 自定义右侧展示区域内容 |

</div>
