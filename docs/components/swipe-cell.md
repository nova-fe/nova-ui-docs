---
title: SwipeCell 滑动单元格
demoPath: "/pages/nova-demo/feedback?comp=swipe-cell&title=SwipeCell%20%E6%BB%91%E5%8A%A8%E5%8D%95%E5%85%83%E6%A0%BC"
---

# SwipeCell 滑动单元格

<div class="nv-doc-card">

## 介绍

`nv-swipe-cell` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('swipe-cell')" class="sec">
          <text class="sec-title">SwipeCell 滑动单元格（向左滑动）</text>
          <nv-swipe-cell :right-width="64">
            <nv-cell title="左滑删除示例" value="内容" />
            <template #right>
              <nv-button type="danger" square custom-class="swipe-del" @click="showToast('点击删除')">删除</nv-button>
            </template>
          </nv-swipe-cell>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-swipe-cell>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `name` | `Numeric` | `''` |
| `left-width` | `Numeric` | `0` |
| `right-width` | `Numeric` | `0` |
| `disabled` | `boolean` | `false` |
| `before-close` | `(detail: NvSwipeCellCloseDetail) =&gt; boolean \| Promise&lt;boolean&gt;` | `undefined` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `open` | `detail: { name: Numeric; position: NvSwipeCellSide }` |
| `close` | `detail: NvSwipeCellCloseDetail` |
| `click` | `position: NvSwipeCellPosition` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left` | 自定义 `left` 区域内容 |
| `default` | 默认内容插槽 |
| `right` | 自定义 `right` 区域内容 |

### 方法（Expose）

通过 `ref` 可调用：`open()`、`close()`

</div>
