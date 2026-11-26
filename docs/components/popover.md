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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `actions` | `NvPopoverAction[]` | `() =&gt; []` |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| `theme` | `'light' \| 'dark'` | `'light'` |
| `trigger` | `'click' \| 'manual'` | `'click'` |
| `show-arrow` | `boolean` | `true` |
| `overlay` | `boolean` | `false` |
| `close-on-click-action` | `boolean` | `true` |
| `close-on-click-outside` | `boolean` | `true` |
| `z-index` | `number` | `2000` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `select` | `action: NvPopoverAction, index: number` |
| `open` | `-` |
| `close` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `reference` | 自定义 `reference` 区域内容 |
| `default` | 默认内容插槽 |

</div>
