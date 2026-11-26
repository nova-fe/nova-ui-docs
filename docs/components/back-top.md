---
title: BackTop 返回顶部
demoPath: "/pages/nova-demo/navigation?comp=back-top&title=BackTop%20%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8"
---

# BackTop 返回顶部

<div class="nv-doc-card">

## 介绍

`nv-back-top` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('back-top')" class="sec">
          <text class="sec-title">BackTop 返回顶部</text>
          <view class="tab-pane">
            <text class="pane-txt">右下角圆形按钮为 BackTop 返回顶部组件，点击平滑回到顶部。</text>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-back-top>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `right` | `Numeric` | `30` |
| `bottom` | `Numeric` | `40` |
| `offset` | `Numeric` | `200` |
| `scroll-top` | `number` | `0` |
| `z-index` | `Numeric` | `100` |
| `duration` | `number` | `300` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
