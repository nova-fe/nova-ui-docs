---
title: Collapse 折叠面板
demoPath: "/pages/nova-demo/display?comp=collapse&title=Collapse%20%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF"
---

# Collapse 折叠面板

<div class="nv-doc-card">

## 介绍

`nv-collapse` / `nv-collapse-item` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('collapse')" class="sec">
          <text class="sec-title">Collapse 折叠面板</text>
          <nv-collapse v-model="activeNames">
            <nv-collapse-item title="标题 1" name="1">
              <text class="col-txt">代码是写出来给人看的，附带能在机器上运行。</text>
            </nv-collapse-item>
            <nv-collapse-item title="标题 2" name="2">
              <text class="col-txt">支持手风琴模式与多选模式。</text>
            </nv-collapse-item>
          </nv-collapse>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-collapse>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `NvCollapseName \| NvCollapseName[]` | `() =&gt; []` |
| `accordion` | `boolean` | `false` |
| `border` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: NvCollapseName \| NvCollapseName[]` |
| `change` | `value: NvCollapseName \| NvCollapseName[]` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-collapse-item>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `name` | `NvCollapseName` | `''` |
| `title` | `Numeric` | `''` |
| `value` | `Numeric` | `''` |
| `label` | `string` | `''` |
| `icon` | `string` | `''` |
| `is-link` | `boolean` | `true` |
| `disabled` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `border` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义 `icon` 区域内容 |
| `title` | 自定义 `title` 区域内容 |
| `label` | 自定义 `label` 区域内容 |
| `value` | 自定义 `value` 区域内容 |
| `right-icon` | 自定义 `right-icon` 区域内容 |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`toggle()`、`expanded()`

</div>
