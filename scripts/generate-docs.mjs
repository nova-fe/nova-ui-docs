#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const DOCS_ROOT = path.resolve(process.cwd(), 'docs')
const NOVA_ROOT = process.env.NOVA_UI_ROOT || path.resolve(process.cwd(), '../nova')
const COMPONENTS_DIR = path.join(NOVA_ROOT, 'uni_modules/nova-ui/components')
const DEMO_DIR = path.join(NOVA_ROOT, 'playground/pages/nova-demo')

export const CATALOG = [
  {
    key: 'basic',
    title: '基础组件',
    items: [
      { key: 'button', label: 'Button 按钮', comps: ['nv-button'] },
      { key: 'cell', label: 'Cell 单元格', comps: ['nv-cell', 'nv-cell-group'] },
      { key: 'config-provider', label: 'ConfigProvider 全局配置', comps: ['nv-config-provider'] },
      { key: 'icon', label: 'Icon 图标', comps: ['nv-icon'] },
      { key: 'image', label: 'Image 图片', comps: ['nv-image'] },
      { key: 'layout', label: 'Layout 布局', comps: ['nv-row', 'nv-col'] },
      { key: 'popup', label: 'Popup 弹出层', comps: ['nv-popup'] },
      { key: 'space', label: 'Space 间距', comps: ['nv-space'] },
      { key: 'style', label: 'Style 内置样式', comps: [] },
      { key: 'toast', label: 'Toast 轻提示', comps: ['nv-toast'] }
    ]
  },
  {
    key: 'form',
    title: '表单组件',
    items: [
      { key: 'calendar', label: 'Calendar 日历', comps: ['nv-calendar'] },
      { key: 'cascader', label: 'Cascader 级联选择', comps: ['nv-cascader'] },
      { key: 'checkbox', label: 'Checkbox 复选框', comps: ['nv-checkbox', 'nv-checkbox-group'] },
      { key: 'date-picker', label: 'DatePicker 日期选择', comps: ['nv-date-picker'] },
      { key: 'field', label: 'Field 输入框', comps: ['nv-field'] },
      { key: 'form', label: 'Form 表单', comps: ['nv-form'] },
      { key: 'number-keyboard', label: 'NumberKeyboard 数字键盘', comps: ['nv-number-keyboard'] },
      { key: 'password-input', label: 'PasswordInput 密码输入框', comps: ['nv-password-input'] },
      { key: 'picker', label: 'Picker 选择器', comps: ['nv-picker'] },
      { key: 'picker-group', label: 'PickerGroup 选择器组', comps: ['nv-picker-group'] },
      { key: 'radio', label: 'Radio 单选框', comps: ['nv-radio', 'nv-radio-group'] },
      { key: 'rate', label: 'Rate 评分', comps: ['nv-rate'] },
      { key: 'search', label: 'Search 搜索', comps: ['nv-search'] },
      { key: 'signature', label: 'Signature 签名', comps: ['nv-signature'] },
      { key: 'slider', label: 'Slider 滑块', comps: ['nv-slider'] },
      { key: 'stepper', label: 'Stepper 步进器', comps: ['nv-stepper'] },
      { key: 'switch', label: 'Switch 开关', comps: ['nv-switch'] },
      { key: 'time-picker', label: 'TimePicker 时间选择', comps: ['nv-time-picker'] },
      { key: 'uploader', label: 'Uploader 文件上传', comps: ['nv-uploader'] }
    ]
  },
  {
    key: 'feedback',
    title: '反馈组件',
    items: [
      { key: 'action-sheet', label: 'ActionSheet 动作面板', comps: ['nv-action-sheet'] },
      { key: 'barrage', label: 'Barrage 弹幕', comps: ['nv-barrage'] },
      { key: 'dialog', label: 'Dialog 弹出框', comps: ['nv-dialog'] },
      { key: 'dropdown-menu', label: 'DropdownMenu 下拉菜单', comps: ['nv-dropdown-menu', 'nv-dropdown-item'] },
      { key: 'floating-panel', label: 'FloatingPanel 浮动面板', comps: ['nv-floating-panel'] },
      { key: 'floating-bubble', label: 'FloatingBubble 浮动气泡', comps: ['nv-floating-bubble'] },
      { key: 'loading', label: 'Loading 加载', comps: ['nv-loading'] },
      { key: 'notify', label: 'Notify 消息通知', comps: ['nv-notify'] },
      { key: 'overlay', label: 'Overlay 遮罩层', comps: ['nv-overlay'] },
      { key: 'pull-refresh', label: 'PullRefresh 下拉刷新', comps: ['nv-pull-refresh'] },
      { key: 'share-sheet', label: 'ShareSheet 分享面板', comps: ['nv-share-sheet'] },
      { key: 'swipe-cell', label: 'SwipeCell 滑动单元格', comps: ['nv-swipe-cell'] }
    ]
  },
  {
    key: 'display',
    title: '展示组件',
    items: [
      { key: 'badge', label: 'Badge 徽标', comps: ['nv-badge'] },
      { key: 'circle', label: 'Circle 环形进度条', comps: ['nv-circle'] },
      { key: 'collapse', label: 'Collapse 折叠面板', comps: ['nv-collapse', 'nv-collapse-item'] },
      { key: 'count-down', label: 'CountDown 倒计时', comps: ['nv-count-down'] },
      { key: 'divider', label: 'Divider 分割线', comps: ['nv-divider'] },
      { key: 'empty', label: 'Empty 空状态', comps: ['nv-empty'] },
      { key: 'highlight', label: 'Highlight 高亮文本', comps: ['nv-highlight'] },
      { key: 'image-preview', label: 'ImagePreview 图片预览', comps: ['nv-image-preview'] },
      { key: 'lazyload', label: 'Lazyload 懒加载', comps: ['nv-lazyload'] },
      { key: 'list', label: 'List 列表', comps: ['nv-list'] },
      { key: 'notice-bar', label: 'NoticeBar 通知栏', comps: ['nv-notice-bar'] },
      { key: 'popover', label: 'Popover 气泡弹出框', comps: ['nv-popover'] },
      { key: 'progress', label: 'Progress 进度条', comps: ['nv-progress'] },
      { key: 'rolling-text', label: 'RollingText 翻滚文本', comps: ['nv-rolling-text'] },
      {
        key: 'skeleton',
        label: 'Skeleton 骨架屏',
        comps: ['nv-skeleton', 'nv-skeleton-title', 'nv-skeleton-paragraph', 'nv-skeleton-avatar', 'nv-skeleton-image']
      },
      { key: 'steps', label: 'Steps 步骤条', comps: ['nv-steps', 'nv-step'] },
      { key: 'sticky', label: 'Sticky 粘性布局', comps: ['nv-sticky'] },
      { key: 'swipe', label: 'Swipe 轮播', comps: ['nv-swipe', 'nv-swipe-item'] },
      { key: 'tag', label: 'Tag 标签', comps: ['nv-tag'] },
      { key: 'text-ellipsis', label: 'TextEllipsis 文本省略', comps: ['nv-text-ellipsis'] },
      { key: 'watermark', label: 'Watermark 水印', comps: ['nv-watermark'] }
    ]
  },
  {
    key: 'navigation',
    title: '导航组件',
    items: [
      { key: 'action-bar', label: 'ActionBar 动作栏', comps: ['nv-action-bar', 'nv-action-bar-icon', 'nv-action-bar-button'] },
      { key: 'back-top', label: 'BackTop 返回顶部', comps: ['nv-back-top'] },
      { key: 'grid', label: 'Grid 宫格', comps: ['nv-grid', 'nv-grid-item'] },
      { key: 'index-bar', label: 'IndexBar 索引栏', comps: ['nv-index-bar', 'nv-index-anchor'] },
      { key: 'nav-bar', label: 'NavBar 导航栏', comps: ['nv-nav-bar'] },
      { key: 'pagination', label: 'Pagination 分页', comps: ['nv-pagination'] },
      { key: 'sidebar', label: 'Sidebar 侧边栏', comps: ['nv-sidebar', 'nv-sidebar-item'] },
      { key: 'tabs', label: 'Tab 标签页', comps: ['nv-tabs', 'nv-tab'] },
      { key: 'tabbar', label: 'Tabbar 标签栏', comps: ['nv-tabbar', 'nv-tabbar-item'] },
      { key: 'tree-select', label: 'TreeSelect 分类选择', comps: ['nv-tree-select'] }
    ]
  },
  {
    key: 'business',
    title: '业务组件',
    items: [
      { key: 'address-edit', label: 'AddressEdit 地址编辑', comps: ['nv-address-edit'] },
      { key: 'address-list', label: 'AddressList 地址列表', comps: ['nv-address-list'] },
      { key: 'area', label: 'Area 省市区选择', comps: ['nv-area'] },
      { key: 'card', label: 'Card 商品卡片', comps: ['nv-card'] },
      { key: 'contact-card', label: 'ContactCard 联系人卡片', comps: ['nv-contact-card'] },
      { key: 'contact-edit', label: 'ContactEdit 联系人编辑', comps: ['nv-contact-edit'] },
      { key: 'contact-list', label: 'ContactList 联系人列表', comps: ['nv-contact-list'] },
      { key: 'coupon', label: 'Coupon 优惠券', comps: ['nv-coupon-cell', 'nv-coupon-list'] },
      { key: 'submit-bar', label: 'SubmitBar 提交订单栏', comps: ['nv-submit-bar'] }
    ]
  }
]

function escapeMdCell(str) {
  return String(str || '-')
    .replace(/\|/g, '\\|')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\r?\n/g, ' ')
    .trim()
}

function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function parseComponentSource(compName) {
  const filePath = path.join(COMPONENTS_DIR, compName, `${compName}.uvue`)
  if (!fs.existsSync(filePath)) return null
  const src = fs.readFileSync(filePath, 'utf8')

  const props = []
  const defaultsMap = {}

  const defaultsMatch = src.match(/withDefaults\s*\(\s*defineProps<\{([\s\S]*?)\}>\(\)\s*,\s*\{([\s\S]*?)\}\s*\)/)
  let propsBlock = ''
  if (defaultsMatch) {
    propsBlock = defaultsMatch[1]
    const defBlock = defaultsMatch[2]
    for (const line of defBlock.split('\n')) {
      const m = line.match(/^\s*([a-zA-Z0-9_]+)\s*:\s*(.+?),?\s*$/)
      if (m) {
        defaultsMap[m[1]] = m[2].replace(/,\s*$/, '').trim()
      }
    }
  } else {
    const simpleMatch = src.match(/defineProps<\{([\s\S]*?)\}>\(\)/)
    if (simpleMatch) propsBlock = simpleMatch[1]
  }

  for (const line of propsBlock.split('\n')) {
    const m = line.match(/^\s*([a-zA-Z0-9_]+)(\??)\s*:\s*(.+?)\s*$/)
    if (m) {
      const propName = m[1]
      const typeStr = m[3].replace(/;$/, '').trim()
      props.push({
        name: camelToKebab(propName),
        type: typeStr,
        defaultVal: defaultsMap[propName] ?? (m[2] === '?' ? '-' : '必填')
      })
    }
  }

  const events = []
  const emitsMatch = src.match(/defineEmits<\{([\s\S]*?)\}>\(\)/)
  if (emitsMatch) {
    for (const line of emitsMatch[1].split('\n')) {
      const m = line.match(/\(\s*e\s*:\s*['"]([^'"]+)['"]([^)]*)\)/)
      if (m) {
        const params = m[2].replace(/^\s*,\s*/, '').trim() || '-'
        events.push({ name: m[1], params })
      }
    }
  }

  const slots = new Set()
  const slotMatches = src.matchAll(/<slot(?:\s+name=['"]([^'"]+)['"])?/g)
  for (const sm of slotMatches) {
    slots.add(sm[1] || 'default')
  }

  const exposes = []
  const exposeMatch = src.match(/defineExpose\(\{([\s\S]*?)\}\)/)
  if (exposeMatch) {
    for (const line of exposeMatch[1].split('\n')) {
      const m = line.match(/^\s*([a-zA-Z0-9_]+)\s*[,:]?/)
      if (m) exposes.push(m[1])
    }
  }

  return { compName, props, events, slots: [...slots], exposes }
}

function extractDemoSnippet(catKey, compKey) {
  const demoPath = path.join(DEMO_DIR, `${catKey}.uvue`)
  if (!fs.existsSync(demoPath)) return ''
  const src = fs.readFileSync(demoPath, 'utf8')
  const marker = `isShow('${compKey}')`
  const idx = src.indexOf(marker)
  if (idx === -1) return ''
  const startLineIdx = src.lastIndexOf('<view', idx)
  if (startLineIdx === -1) return ''

  let depth = 0
  let pos = startLineIdx
  const tagRe = /<\/?view\b[^>]*>/g
  tagRe.lastIndex = startLineIdx
  let endPos = -1
  let m
  while ((m = tagRe.exec(src))) {
    const tag = m[0]
    if (tag.startsWith('</view')) {
      depth -= 1
      if (depth <= 0) {
        endPos = m.index + tag.length
        break
      }
    } else if (!tag.endsWith('/>')) {
      depth += 1
    }
    pos = m.index
  }
  if (endPos === -1 || endPos - startLineIdx > 3200) return ''
  const raw = src.slice(startLineIdx, endPos)
  const lines = raw.split('\n')
  const nonEmpty = lines.filter((l) => l.trim().length > 0)
  const minIndent = Math.min(...nonEmpty.map((l) => (l.match(/^(\s*)/)?.[1].length ?? 0)))
  return lines.map((l) => l.slice(minIndent)).join('\n')
}

function renderComponentDoc(cat, item) {
  const snippet = extractDemoSnippet(cat.key, item.key)
  const parsedList = item.comps.map(parseComponentSource).filter(Boolean)
  const demoHash = `/pages/nova-demo/${cat.key}?comp=${encodeURIComponent(item.key)}&title=${encodeURIComponent(item.label)}`

  const lines = []
  lines.push('---')
  lines.push(`title: ${item.label}`)
  lines.push(`demoPath: "${demoHash}"`)
  lines.push('---')
  lines.push('')
  lines.push(`# ${item.label}`)
  lines.push('')
  lines.push('<div class="nv-doc-card">')
  lines.push('')
  lines.push('## 介绍')
  lines.push('')
  if (item.comps.length > 0) {
    lines.push(
      `\`${item.comps.join('` / `')}\` 属于 Nova UI **${cat.title}**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。`
    )
  } else {
    lines.push(
      `Nova UI 内置跨端通用样式工具类（单行/多行省略、0.5px 细边框、安全区辅助类），无伪元素依赖，全 6 端一致生效。`
    )
  }
  lines.push('')
  lines.push('</div>')
  lines.push('')

  if (snippet) {
    lines.push('<div class="nv-doc-card">')
    lines.push('')
    lines.push('## 代码演示')
    lines.push('')
    lines.push('```html')
    lines.push(snippet)
    lines.push('```')
    lines.push('')
    lines.push('</div>')
    lines.push('')
  }

  if (item.key === 'style') {
    lines.push('<div class="nv-doc-card">')
    lines.push('')
    lines.push('## 内置样式类')
    lines.push('')
    lines.push('| 类名 | 说明 |')
    lines.push('| --- | --- |')
    lines.push('| `nv-ellipsis` | 单行文本溢出省略 |')
    lines.push('| `nv-multi-ellipsis--l2` | 最多显示两行，超出省略 |')
    lines.push('| `nv-multi-ellipsis--l3` | 最多显示三行，超出省略 |')
    lines.push('| `nv-hairline--top` | 顶部 0.5px 细边框 |')
    lines.push('| `nv-hairline--bottom` | 底部 0.5px 细边框 |')
    lines.push('| `nv-hairline--left` | 左侧 0.5px 细边框 |')
    lines.push('| `nv-hairline--right` | 右侧 0.5px 细边框 |')
    lines.push('| `nv-hairline--surround` | 全四周 0.5px 细边框 |')
    lines.push('')
    lines.push('</div>')
    lines.push('')
  }

  for (const parsed of parsedList) {
    lines.push('<div class="nv-doc-card">')
    lines.push('')
    lines.push(`## API — \`<${parsed.compName}>\``)
    lines.push('')

    if (parsed.props.length > 0) {
      lines.push('### Props')
      lines.push('')
      lines.push('| 参数 | 类型 | 默认值 |')
      lines.push('| --- | --- | --- |')
      for (const p of parsed.props) {
        lines.push(`| \`${p.name}\` | \`${escapeMdCell(p.type)}\` | \`${escapeMdCell(p.defaultVal)}\` |`)
      }
      lines.push('')
    }

    if (parsed.events.length > 0) {
      lines.push('### Events')
      lines.push('')
      lines.push('| 事件名 | 回调参数 |')
      lines.push('| --- | --- |')
      for (const ev of parsed.events) {
        lines.push(`| \`${ev.name}\` | \`${escapeMdCell(ev.params)}\` |`)
      }
      lines.push('')
    }

    if (parsed.slots.length > 0) {
      lines.push('### Slots')
      lines.push('')
      lines.push('| 插槽名 | 说明 |')
      lines.push('| --- | --- |')
      for (const sl of parsed.slots) {
        lines.push(`| \`${sl}\` | ${sl === 'default' ? '默认内容插槽' : `自定义 \`${sl}\` 区域内容`} |`)
      }
      lines.push('')
    }

    if (parsed.exposes.length > 0) {
      lines.push('### 方法（Expose）')
      lines.push('')
      lines.push(`通过 \`ref\` 可调用：${parsed.exposes.map((e) => `\`${e}()\``).join('、')}`)
      lines.push('')
    }

    lines.push('</div>')
    lines.push('')
  }

  return lines.join('\n')
}

function main() {
  const compDocsDir = path.join(DOCS_ROOT, 'components')
  fs.mkdirSync(compDocsDir, { recursive: true })

  let count = 0
  for (const cat of CATALOG) {
    for (const item of cat.items) {
      const md = renderComponentDoc(cat, item)
      fs.writeFileSync(path.join(compDocsDir, `${item.key}.md`), md, 'utf8')
      count += 1
    }
  }

  // Write catalog metadata for sidebar & simulator routing
  const metaPath = path.join(DOCS_ROOT, '.vuepress/catalog.ts')
  const metaContent = `export interface CatalogItem {
  key: string
  label: string
  category: string
  link: string
  demoPath: string
}

export interface CatalogGroup {
  key: string
  title: string
  items: CatalogItem[]
}

export const CATALOG_GROUPS: CatalogGroup[] = ${JSON.stringify(
    CATALOG.map((cat) => ({
      key: cat.key,
      title: cat.title,
      items: cat.items.map((item) => ({
        key: item.key,
        label: item.label,
        category: cat.key,
        link: `/components/${item.key}.html`,
        demoPath: `/pages/nova-demo/${cat.key}?comp=${encodeURIComponent(item.key)}&title=${encodeURIComponent(item.label)}`
      }))
    })),
    null,
    2
  )}
`
  fs.writeFileSync(metaPath, metaContent, 'utf8')
  console.log(`[nova-docs] Generated ${count} component docs and catalog.ts`)
}

main()
