---
title: Style 内置样式
demoPath: "/pages/nova-demo/basic?comp=style&title=Style%20%E5%86%85%E7%BD%AE%E6%A0%B7%E5%BC%8F"
---

# Style 内置样式

<div class="nv-doc-card">

## 介绍

Nova UI 内置跨端通用样式工具类（单行/多行省略、0.5px 细边框、安全区辅助类），无伪元素依赖，全 6 端一致生效。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('style')" class="sec">
          <text class="sec-title">Style 内置样式（省略 / 0.5px 边框）</text>
          <view class="style-card nv-hairline--surround">
            <text class="nv-ellipsis style-text">单行省略演示：这是一段非常非常长用于验证内置单行文本溢出省略效果的文案</text>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## 内置样式类

| 类名 | 说明 |
| --- | --- |
| `nv-ellipsis` | 单行文本溢出省略 |
| `nv-multi-ellipsis--l2` | 最多显示两行，超出省略 |
| `nv-multi-ellipsis--l3` | 最多显示三行，超出省略 |
| `nv-hairline--top` | 顶部 0.5px 细边框 |
| `nv-hairline--bottom` | 底部 0.5px 细边框 |
| `nv-hairline--left` | 左侧 0.5px 细边框 |
| `nv-hairline--right` | 右侧 0.5px 细边框 |
| `nv-hairline--surround` | 全四周 0.5px 细边框 |

</div>
