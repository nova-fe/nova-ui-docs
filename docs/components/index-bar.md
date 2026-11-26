---
title: IndexBar 索引栏
demoPath: "/pages/nova-demo/navigation?comp=index-bar&title=IndexBar%20%E7%B4%A2%E5%BC%95%E6%A0%8F"
---

# IndexBar 索引栏

<div class="nv-doc-card">

## 介绍

`nv-index-bar` / `nv-index-anchor` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('index-bar')" class="sec">
          <text class="sec-title">IndexBar 索引栏</text>
          <nv-index-bar :index-list="['A', 'B', 'C']">
            <nv-index-anchor index="A" />
            <nv-cell title="Apple" />
            <nv-cell title="Apricot" />
            <nv-index-anchor index="B" />
            <nv-cell title="Banana" />
            <nv-index-anchor index="C" />
            <nv-cell title="Cherry" />
          </nv-index-bar>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-index-bar>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `index-list` | 右侧索引字符列表（默认为 A-Z） | `Numeric[]` | `() =&gt; []` |
| `highlight-color` | 索引字符高亮颜色 | `string` | `''` |
| `sticky` | 是否开启锚点自动吸顶 | `boolean` | `true` |
| `z-index` | 组件层级 z-index | `Numeric` | `1` |
| `sticky-offset-top` | 锚点吸顶时与顶部的距离（单位 px） | `number` | `0` |
| `scroll-top` | 当前页面滚动位置（单位 px） | `number` | `-1` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `select` | 选中某一项时触发 | `index: Numeric` |
| `change` | 绑定值或选中项发生变化时触发 | `index: Numeric` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `scrollTo` | 滚动到指定索引锚点位置 |

</div>

<div class="nv-doc-card">

## API — `<nv-index-anchor>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `index` | 索引锚点字符（如 A / B / C） | `Numeric` | `必填` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义标题区域内容 |
| `default` | 默认内容插槽 |

</div>
