---
title: Popover 气泡弹出框
demoPath: "/pages/nova-demo/display?comp=popover&title=Popover%20%E6%B0%94%E6%B3%A1%E5%BC%B9%E5%87%BA%E6%A1%86"
---

# Popover 气泡弹出框

<div class="nv-doc-card">

## 介绍

`nv-popover` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('popover')" class="sec">
          <text class="sec-title">Popover 气泡弹出框</text>
          <view class="card">
            <nv-space :size="14">
              <nv-popover v-model:show="showPopover" :actions="popActions" @select="onPopSelect">
                <template #reference>
                  <nv-button size="small" type="primary">亮色气泡</nv-button>
                </template>
              </nv-popover>
              <nv-popover v-model:show="showDarkPopover" theme="dark" :actions="popActions" @select="onPopSelect">
                <template #reference>
                  <nv-button size="small" plain>深色气泡</nv-button>
                </template>
              </nv-popover>
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-popover>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `actions` | 选项列表数据 | `NvPopoverAction[]` | `() =&gt; []` |
| `placement` | 气泡弹出位置（top / bottom / left / right 等） | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| `theme` | 气泡主题风格，可选值为 light / dark | `'light' \| 'dark'` | `'light'` |
| `trigger` | 气泡触发方式 | `'click' \| 'manual'` | `'click'` |
| `show-arrow` | 气泡弹出框是否显示指向小箭头 | `boolean` | `true` |
| `overlay` | 是否显示背景遮罩层 | `boolean` | `false` |
| `close-on-click-action` | 点击选项后是否自动关闭面板 | `boolean` | `true` |
| `close-on-click-outside` | 点击外部区域时是否自动关闭 | `boolean` | `true` |
| `z-index` | 组件层级 z-index | `number` | `2000` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `select` | 选中某一项时触发 | `action: NvPopoverAction, index: number` |
| `open` | 打开弹层、下拉菜单或滑动单元格时触发 | `-` |
| `close` | 关闭组件或弹层时触发 | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `reference` | 触发气泡弹出框显示的参照元素 |
| `default` | 默认内容插槽 |

</div>
