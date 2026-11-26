---
title: ActionSheet 动作面板
demoPath: "/pages/nova-demo/feedback?comp=action-sheet&title=ActionSheet%20%E5%8A%A8%E4%BD%9C%E9%9D%A2%E6%9D%BF"
---

# ActionSheet 动作面板

<div class="nv-doc-card">

## 介绍

`nv-action-sheet` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('action-sheet')" class="sec-flat">
          <nv-cell-group title="ActionSheet 动作面板" inset>
            <nv-cell title="基础动作面板" is-link @click="showSheet = true" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-action-sheet>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `actions` | `NvActionSheetAction[]` | `() =&gt; []` |
| `title` | `string` | `''` |
| `cancel-text` | `string` | `''` |
| `description` | `string` | `''` |
| `closeable` | `boolean` | `true` |
| `close-icon` | `string` | `'cross'` |
| `round` | `boolean` | `true` |
| `overlay` | `boolean` | `true` |
| `close-on-click-action` | `boolean` | `false` |
| `close-on-click-overlay` | `boolean` | `true` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `z-index` | `number` | `2000` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `select` | `action: NvActionSheetAction, index: number` |
| `cancel` | `-` |
| `close` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `description` | 自定义 `description` 区域内容 |
| `default` | 默认内容插槽 |

</div>
