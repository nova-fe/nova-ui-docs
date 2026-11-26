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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `0` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `index: number` |
| `change` | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-sidebar-item>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `string` | `''` |
| `dot` | `boolean` | `false` |
| `badge` | `Numeric` | `undefined` |
| `disabled` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `index: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义 `title` 区域内容 |
| `default` | 默认内容插槽 |

</div>
