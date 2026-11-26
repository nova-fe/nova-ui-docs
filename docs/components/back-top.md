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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `right` | 距离页面右侧的偏移距离 | `Numeric` | `30` |
| `bottom` | 距离页面底部的偏移距离 | `Numeric` | `40` |
| `offset` | 滚动高度达到此阈值时显示返回顶部按钮（单位 px） | `Numeric` | `200` |
| `scroll-top` | 当前页面滚动位置（单位 px） | `number` | `0` |
| `z-index` | 组件层级 z-index | `Numeric` | `100` |
| `duration` | 动画或展示持续时长 | `number` | `300` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
