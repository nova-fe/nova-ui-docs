---
title: ShareSheet 分享面板
demoPath: "/pages/nova-demo/feedback?comp=share-sheet&title=ShareSheet%20%E5%88%86%E4%BA%AB%E9%9D%A2%E6%9D%BF"
---

# ShareSheet 分享面板

<div class="nv-doc-card">

## 介绍

`nv-share-sheet` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('share-sheet')" class="sec-flat">
          <nv-cell-group title="ShareSheet 分享面板" inset>
            <nv-cell title="展示分享面板" is-link @click="showShare = true" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-share-sheet>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `options` | `NvShareSheetOption[] \| NvShareSheetOption[][]` | `() =&gt; []` |
| `title` | `string` | `''` |
| `cancel-text` | `string` | `'取消'` |
| `description` | `string` | `''` |
| `round` | `boolean` | `true` |
| `overlay` | `boolean` | `true` |
| `close-on-click-overlay` | `boolean` | `true` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `z-index` | `number` | `2000` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `select` | `option: NvShareSheetOption, index: number` |
| `cancel` | `-` |
| `close` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义 `title` 区域内容 |
| `description` | 自定义 `description` 区域内容 |

</div>
