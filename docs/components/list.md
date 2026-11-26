---
title: List 列表
demoPath: "/pages/nova-demo/display?comp=list&title=List%20%E5%88%97%E8%A1%A8"
---

# List 列表

<div class="nv-doc-card">

## 介绍

`nv-list` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('list')" class="sec">
          <view class="list-head">
            <text class="sec-title">List 列表（支持滚动/点击分页加载，当前 {{ listItems.length }} 条）</text>
            <text class="list-reset" @click="resetList">重置</text>
          </view>
          <view class="card-list">
            <nv-list
              v-model:loading="listLoading"
              :finished="listFinished"
              :immediate-check="false"
              finished-text="已加载全部 30 条数据"
              @load="onListLoad"
            >
              <nv-cell
                v-for="num in listItems"
                :key="num"
                :title="`列表项 ${num}`"
                :value="`第 ${Math.ceil(num / 10)} 页`"
              />
            </nv-list>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-list>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 是否显示为加载状态 | `boolean` | `false` |
| `error` | 列表加载是否失败（支持 v-model:error，点击失败提示可重新触发加载） | `boolean` | `false` |
| `finished` | 列表数据是否已全部加载完成，为 true 后不再触发 load 事件 | `boolean` | `false` |
| `offset` | 滚动条与底部距离小于 offset 时触发 load 事件（单位 px） | `Numeric` | `300` |
| `loading-text` | 加载过程中的提示文字 | `string` | `'加载中...'` |
| `finished-text` | 数据全部加载完成后的底部提示文案 | `string` | `'没有更多了'` |
| `error-text` | 加载失败后的提示文案 | `string` | `'请求失败，点击重新加载'` |
| `immediate-check` | 是否在初始化时立即检查滚动位置并触发加载 | `boolean` | `true` |
| `height` | 组件高度 | `Numeric` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:loading` | 更新列表加载状态（v-model:loading） | `value: boolean` |
| `update:error` | 更新列表错误状态（v-model:error） | `value: boolean` |
| `load` | 图片加载成功或列表触底需要加载更多数据时触发 | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `loading` | 自定义加载中状态提示内容 |
| `finished` | 自定义列表加载完成后的底部提示内容 |
| `error` | 自定义加载失败提示内容 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `check` | 检查当前滚动位置，若已触底则主动触发 load 事件 |

</div>
