---
title: Sidebar 侧边栏
demoPath: "/pages/nova-demo/navigation?comp=sidebar&title=Sidebar%20%E4%BE%A7%E8%BE%B9%E6%A0%8F"
---

# Sidebar 侧边栏

<div class="nv-doc-card">

## 介绍

`nv-sidebar` / `nv-sidebar-item` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('sidebar')" class="sec">
          <text class="sec-title">Sidebar 侧边栏</text>
          <view class="side-row">
            <nv-sidebar v-model="activeSide">
              <nv-sidebar-item title="推荐" />
              <nv-sidebar-item title="热门" dot />
              <nv-sidebar-item title="最新" :badge="5" />
            </nv-sidebar>
            <view class="side-content">
              <text class="pane-txt">当前侧边栏索引：{{ activeSide }}</text>
            </view>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-sidebar>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `0` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `index: number` |
| `change` | 绑定值或选中项发生变化时触发 | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-sidebar-item>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题文案 | `string` | `''` |
| `dot` | 是否显示右上角小红点 | `boolean` | `false` |
| `badge` | 图标右上角徽标内容 | `Numeric` | `undefined` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义标题区域内容 |
| `default` | 默认内容插槽 |

</div>
