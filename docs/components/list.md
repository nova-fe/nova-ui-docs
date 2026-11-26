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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `loading` | `boolean` | `false` |
| `error` | `boolean` | `false` |
| `finished` | `boolean` | `false` |
| `offset` | `Numeric` | `300` |
| `loading-text` | `string` | `'加载中...'` |
| `finished-text` | `string` | `'没有更多了'` |
| `error-text` | `string` | `'请求失败，点击重新加载'` |
| `immediate-check` | `boolean` | `true` |
| `height` | `Numeric` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:loading` | `value: boolean` |
| `update:error` | `value: boolean` |
| `load` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `loading` | 自定义 `loading` 区域内容 |
| `finished` | 自定义 `finished` 区域内容 |
| `error` | 自定义 `error` 区域内容 |

### 方法（Expose）

通过 `ref` 可调用：`check()`

</div>
