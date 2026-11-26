---
title: Cascader 级联选择
demoPath: "/pages/nova-demo/form?comp=cascader&title=Cascader%20%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9"
---

# Cascader 级联选择

<div class="nv-doc-card">

## 介绍

`nv-cascader` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('cascader')" class="sec">
          <text class="sec-title">Cascader 级联选择</text>
          <nv-cell-group inset>
            <nv-cell title="弹窗选择地区" :value="cascaderText" is-link @click="showCascader = true" />
          </nv-cell-group>
          <view class="gap-md" />
          <text class="sec-title">直接展示级联面板</text>
          <view class="card-nopad">
            <nv-cascader
              v-model="cascaderVal"
              title="请选择所在地区"
              :closeable="false"
              :options="cascaderOptions"
              @finish="onCascaderFinish"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-cascader>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `''` |
| `title` | 标题文案 | `string` | `''` |
| `options` | 可选项数据源数组 | `NvCascaderOption[]` | `() =&gt; []` |
| `placeholder` | 占位提示文字或是否生成等高占位元素 | `string` | `'请选择'` |
| `active-color` | 选中/激活状态的颜色 | `string` | `''` |
| `closeable` | 是否显示关闭图标 | `boolean` | `true` |
| `show-header` | 是否展示顶部标题栏 | `boolean` | `true` |
| `close-icon` | 关闭图标名称或图片链接 | `string` | `'cross'` |
| `field-names` | 自定义 options 结构中的 text / value / children 字段名 | `NvCascaderFieldNames` | `() =&gt; ({` |
| `custom-class` | 自定义根节点额外类名 | `string` | `-` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: Numeric` |
| `change` | 绑定值或选中项发生变化时触发 | `payload: NvCascaderEventPayload` |
| `finish` | 全部选项选择完成或倒计时结束时触发 | `payload: NvCascaderEventPayload` |
| `close` | 关闭组件或弹层时触发 | `-` |
| `click-tab` | 点击顶部标签页时触发 | `tabIndex: number, title: string` |

</div>
