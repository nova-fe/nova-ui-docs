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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `index-list` | `Numeric[]` | `() =&gt; []` |
| `highlight-color` | `string` | `''` |
| `sticky` | `boolean` | `true` |
| `z-index` | `Numeric` | `1` |
| `sticky-offset-top` | `number` | `0` |
| `scroll-top` | `number` | `-1` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `select` | `index: Numeric` |
| `change` | `index: Numeric` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`scrollTo()`

</div>

<div class="nv-doc-card">

## API — `<nv-index-anchor>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `index` | `Numeric` | `必填` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义 `title` 区域内容 |
| `default` | 默认内容插槽 |

</div>
