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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `NvCollapseName \| NvCollapseName[]` | `() =&gt; []` |
| `accordion` | 是否开启手风琴模式（每次只展开一个面板） | `boolean` | `false` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: NvCollapseName \| NvCollapseName[]` |
| `change` | 绑定值或选中项发生变化时触发 | `value: NvCollapseName \| NvCollapseName[]` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-collapse-item>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 唯一标识符名称 | `NvCollapseName` | `''` |
| `title` | 标题文案 | `Numeric` | `''` |
| `value` | 右侧内容或当前展示值 | `Numeric` | `''` |
| `label` | 标题/标签文本 | `string` | `''` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `is-link` | 是否展示右侧箭头并开启点击反馈 | `boolean` | `true` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义图标内容 |
| `title` | 自定义标题区域内容 |
| `label` | 自定义标签文字区域 |
| `value` | 自定义右侧内容区域 |
| `right-icon` | 自定义右侧图标内容 |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `toggle` | 切换展开/收起或选中/未选中状态 |
| `expanded` | 当前折叠面板项的展开状态（只读响应式值） |

</div>
