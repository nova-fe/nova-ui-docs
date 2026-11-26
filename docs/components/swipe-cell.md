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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 唯一标识符名称 | `Numeric` | `''` |
| `left-width` | 指定左侧滑动区域宽度（单位 px） | `Numeric` | `0` |
| `right-width` | 指定右侧滑动区域宽度（单位 px） | `Numeric` | `0` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `before-close` | 关闭前的异步回调函数，返回 false 可阻止关闭 | `(detail: NvSwipeCellCloseDetail) =&gt; boolean \| Promise&lt;boolean&gt;` | `undefined` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `open` | 打开弹层、下拉菜单或滑动单元格时触发 | `detail: { name: Numeric; position: NvSwipeCellSide }` |
| `close` | 关闭组件或弹层时触发 | `detail: NvSwipeCellCloseDetail` |
| `click` | 点击组件时触发 | `position: NvSwipeCellPosition` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left` | 自定义左侧区域内容 |
| `default` | 默认内容插槽 |
| `right` | 自定义右侧区域内容 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `open` | 展开滑动单元格左侧或右侧操作区 |
| `close` | 收起下拉菜单或关闭滑动单元格 |

</div>
