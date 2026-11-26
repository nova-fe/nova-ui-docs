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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `actions` | 选项列表数据 | `NvActionSheetAction[]` | `() =&gt; []` |
| `title` | 标题文案 | `string` | `''` |
| `cancel-text` | 底部取消按钮文字，为空时不展示 | `string` | `''` |
| `description` | 辅助描述文字 | `string` | `''` |
| `closeable` | 是否显示关闭图标 | `boolean` | `true` |
| `close-icon` | 关闭图标名称或图片链接 | `string` | `'cross'` |
| `round` | 是否为圆角样式 | `boolean` | `true` |
| `overlay` | 是否显示背景遮罩层 | `boolean` | `true` |
| `close-on-click-action` | 点击选项后是否自动关闭面板 | `boolean` | `false` |
| `close-on-click-overlay` | 点击遮罩层时是否自动关闭 | `boolean` | `true` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `z-index` | 组件层级 z-index | `number` | `2000` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `select` | 选中某一项时触发 | `action: NvActionSheetAction, index: number` |
| `cancel` | 点击取消按钮时触发 | `-` |
| `close` | 关闭组件或弹层时触发 | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `description` | 自定义辅助描述内容 |
| `default` | 默认内容插槽 |

</div>
