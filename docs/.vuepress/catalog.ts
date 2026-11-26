export interface CatalogItem {
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

export const CATALOG_GROUPS: CatalogGroup[] = [
  {
    "key": "basic",
    "title": "基础组件",
    "items": [
      {
        "key": "button",
        "label": "Button 按钮",
        "category": "basic",
        "link": "/components/button.html",
        "demoPath": "/pages/nova-demo/basic?comp=button&title=Button%20%E6%8C%89%E9%92%AE"
      },
      {
        "key": "cell",
        "label": "Cell 单元格",
        "category": "basic",
        "link": "/components/cell.html",
        "demoPath": "/pages/nova-demo/basic?comp=cell&title=Cell%20%E5%8D%95%E5%85%83%E6%A0%BC"
      },
      {
        "key": "config-provider",
        "label": "ConfigProvider 全局配置",
        "category": "basic",
        "link": "/components/config-provider.html",
        "demoPath": "/pages/nova-demo/basic?comp=config-provider&title=ConfigProvider%20%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE"
      },
      {
        "key": "icon",
        "label": "Icon 图标",
        "category": "basic",
        "link": "/components/icon.html",
        "demoPath": "/pages/nova-demo/basic?comp=icon&title=Icon%20%E5%9B%BE%E6%A0%87"
      },
      {
        "key": "image",
        "label": "Image 图片",
        "category": "basic",
        "link": "/components/image.html",
        "demoPath": "/pages/nova-demo/basic?comp=image&title=Image%20%E5%9B%BE%E7%89%87"
      },
      {
        "key": "layout",
        "label": "Layout 布局",
        "category": "basic",
        "link": "/components/layout.html",
        "demoPath": "/pages/nova-demo/basic?comp=layout&title=Layout%20%E5%B8%83%E5%B1%80"
      },
      {
        "key": "popup",
        "label": "Popup 弹出层",
        "category": "basic",
        "link": "/components/popup.html",
        "demoPath": "/pages/nova-demo/basic?comp=popup&title=Popup%20%E5%BC%B9%E5%87%BA%E5%B1%82"
      },
      {
        "key": "space",
        "label": "Space 间距",
        "category": "basic",
        "link": "/components/space.html",
        "demoPath": "/pages/nova-demo/basic?comp=space&title=Space%20%E9%97%B4%E8%B7%9D"
      },
      {
        "key": "style",
        "label": "Style 内置样式",
        "category": "basic",
        "link": "/components/style.html",
        "demoPath": "/pages/nova-demo/basic?comp=style&title=Style%20%E5%86%85%E7%BD%AE%E6%A0%B7%E5%BC%8F"
      },
      {
        "key": "toast",
        "label": "Toast 轻提示",
        "category": "basic",
        "link": "/components/toast.html",
        "demoPath": "/pages/nova-demo/basic?comp=toast&title=Toast%20%E8%BD%BB%E6%8F%90%E7%A4%BA"
      }
    ]
  },
  {
    "key": "form",
    "title": "表单组件",
    "items": [
      {
        "key": "calendar",
        "label": "Calendar 日历",
        "category": "form",
        "link": "/components/calendar.html",
        "demoPath": "/pages/nova-demo/form?comp=calendar&title=Calendar%20%E6%97%A5%E5%8E%86"
      },
      {
        "key": "cascader",
        "label": "Cascader 级联选择",
        "category": "form",
        "link": "/components/cascader.html",
        "demoPath": "/pages/nova-demo/form?comp=cascader&title=Cascader%20%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9"
      },
      {
        "key": "checkbox",
        "label": "Checkbox 复选框",
        "category": "form",
        "link": "/components/checkbox.html",
        "demoPath": "/pages/nova-demo/form?comp=checkbox&title=Checkbox%20%E5%A4%8D%E9%80%89%E6%A1%86"
      },
      {
        "key": "date-picker",
        "label": "DatePicker 日期选择",
        "category": "form",
        "link": "/components/date-picker.html",
        "demoPath": "/pages/nova-demo/form?comp=date-picker&title=DatePicker%20%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9"
      },
      {
        "key": "field",
        "label": "Field 输入框",
        "category": "form",
        "link": "/components/field.html",
        "demoPath": "/pages/nova-demo/form?comp=field&title=Field%20%E8%BE%93%E5%85%A5%E6%A1%86"
      },
      {
        "key": "form",
        "label": "Form 表单",
        "category": "form",
        "link": "/components/form.html",
        "demoPath": "/pages/nova-demo/form?comp=form&title=Form%20%E8%A1%A8%E5%8D%95"
      },
      {
        "key": "number-keyboard",
        "label": "NumberKeyboard 数字键盘",
        "category": "form",
        "link": "/components/number-keyboard.html",
        "demoPath": "/pages/nova-demo/form?comp=number-keyboard&title=NumberKeyboard%20%E6%95%B0%E5%AD%97%E9%94%AE%E7%9B%98"
      },
      {
        "key": "password-input",
        "label": "PasswordInput 密码输入框",
        "category": "form",
        "link": "/components/password-input.html",
        "demoPath": "/pages/nova-demo/form?comp=password-input&title=PasswordInput%20%E5%AF%86%E7%A0%81%E8%BE%93%E5%85%A5%E6%A1%86"
      },
      {
        "key": "picker",
        "label": "Picker 选择器",
        "category": "form",
        "link": "/components/picker.html",
        "demoPath": "/pages/nova-demo/form?comp=picker&title=Picker%20%E9%80%89%E6%8B%A9%E5%99%A8"
      },
      {
        "key": "picker-group",
        "label": "PickerGroup 选择器组",
        "category": "form",
        "link": "/components/picker-group.html",
        "demoPath": "/pages/nova-demo/form?comp=picker-group&title=PickerGroup%20%E9%80%89%E6%8B%A9%E5%99%A8%E7%BB%84"
      },
      {
        "key": "radio",
        "label": "Radio 单选框",
        "category": "form",
        "link": "/components/radio.html",
        "demoPath": "/pages/nova-demo/form?comp=radio&title=Radio%20%E5%8D%95%E9%80%89%E6%A1%86"
      },
      {
        "key": "rate",
        "label": "Rate 评分",
        "category": "form",
        "link": "/components/rate.html",
        "demoPath": "/pages/nova-demo/form?comp=rate&title=Rate%20%E8%AF%84%E5%88%86"
      },
      {
        "key": "search",
        "label": "Search 搜索",
        "category": "form",
        "link": "/components/search.html",
        "demoPath": "/pages/nova-demo/form?comp=search&title=Search%20%E6%90%9C%E7%B4%A2"
      },
      {
        "key": "signature",
        "label": "Signature 签名",
        "category": "form",
        "link": "/components/signature.html",
        "demoPath": "/pages/nova-demo/form?comp=signature&title=Signature%20%E7%AD%BE%E5%90%8D"
      },
      {
        "key": "slider",
        "label": "Slider 滑块",
        "category": "form",
        "link": "/components/slider.html",
        "demoPath": "/pages/nova-demo/form?comp=slider&title=Slider%20%E6%BB%91%E5%9D%97"
      },
      {
        "key": "stepper",
        "label": "Stepper 步进器",
        "category": "form",
        "link": "/components/stepper.html",
        "demoPath": "/pages/nova-demo/form?comp=stepper&title=Stepper%20%E6%AD%A5%E8%BF%9B%E5%99%A8"
      },
      {
        "key": "switch",
        "label": "Switch 开关",
        "category": "form",
        "link": "/components/switch.html",
        "demoPath": "/pages/nova-demo/form?comp=switch&title=Switch%20%E5%BC%80%E5%85%B3"
      },
      {
        "key": "time-picker",
        "label": "TimePicker 时间选择",
        "category": "form",
        "link": "/components/time-picker.html",
        "demoPath": "/pages/nova-demo/form?comp=time-picker&title=TimePicker%20%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9"
      },
      {
        "key": "uploader",
        "label": "Uploader 文件上传",
        "category": "form",
        "link": "/components/uploader.html",
        "demoPath": "/pages/nova-demo/form?comp=uploader&title=Uploader%20%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0"
      }
    ]
  },
  {
    "key": "feedback",
    "title": "反馈组件",
    "items": [
      {
        "key": "action-sheet",
        "label": "ActionSheet 动作面板",
        "category": "feedback",
        "link": "/components/action-sheet.html",
        "demoPath": "/pages/nova-demo/feedback?comp=action-sheet&title=ActionSheet%20%E5%8A%A8%E4%BD%9C%E9%9D%A2%E6%9D%BF"
      },
      {
        "key": "barrage",
        "label": "Barrage 弹幕",
        "category": "feedback",
        "link": "/components/barrage.html",
        "demoPath": "/pages/nova-demo/feedback?comp=barrage&title=Barrage%20%E5%BC%B9%E5%B9%95"
      },
      {
        "key": "dialog",
        "label": "Dialog 弹出框",
        "category": "feedback",
        "link": "/components/dialog.html",
        "demoPath": "/pages/nova-demo/feedback?comp=dialog&title=Dialog%20%E5%BC%B9%E5%87%BA%E6%A1%86"
      },
      {
        "key": "dropdown-menu",
        "label": "DropdownMenu 下拉菜单",
        "category": "feedback",
        "link": "/components/dropdown-menu.html",
        "demoPath": "/pages/nova-demo/feedback?comp=dropdown-menu&title=DropdownMenu%20%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95"
      },
      {
        "key": "floating-panel",
        "label": "FloatingPanel 浮动面板",
        "category": "feedback",
        "link": "/components/floating-panel.html",
        "demoPath": "/pages/nova-demo/feedback?comp=floating-panel&title=FloatingPanel%20%E6%B5%AE%E5%8A%A8%E9%9D%A2%E6%9D%BF"
      },
      {
        "key": "floating-bubble",
        "label": "FloatingBubble 浮动气泡",
        "category": "feedback",
        "link": "/components/floating-bubble.html",
        "demoPath": "/pages/nova-demo/feedback?comp=floating-bubble&title=FloatingBubble%20%E6%B5%AE%E5%8A%A8%E6%B0%94%E6%B3%A1"
      },
      {
        "key": "loading",
        "label": "Loading 加载",
        "category": "feedback",
        "link": "/components/loading.html",
        "demoPath": "/pages/nova-demo/feedback?comp=loading&title=Loading%20%E5%8A%A0%E8%BD%BD"
      },
      {
        "key": "notify",
        "label": "Notify 消息通知",
        "category": "feedback",
        "link": "/components/notify.html",
        "demoPath": "/pages/nova-demo/feedback?comp=notify&title=Notify%20%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5"
      },
      {
        "key": "overlay",
        "label": "Overlay 遮罩层",
        "category": "feedback",
        "link": "/components/overlay.html",
        "demoPath": "/pages/nova-demo/feedback?comp=overlay&title=Overlay%20%E9%81%AE%E7%BD%A9%E5%B1%82"
      },
      {
        "key": "pull-refresh",
        "label": "PullRefresh 下拉刷新",
        "category": "feedback",
        "link": "/components/pull-refresh.html",
        "demoPath": "/pages/nova-demo/feedback?comp=pull-refresh&title=PullRefresh%20%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0"
      },
      {
        "key": "share-sheet",
        "label": "ShareSheet 分享面板",
        "category": "feedback",
        "link": "/components/share-sheet.html",
        "demoPath": "/pages/nova-demo/feedback?comp=share-sheet&title=ShareSheet%20%E5%88%86%E4%BA%AB%E9%9D%A2%E6%9D%BF"
      },
      {
        "key": "swipe-cell",
        "label": "SwipeCell 滑动单元格",
        "category": "feedback",
        "link": "/components/swipe-cell.html",
        "demoPath": "/pages/nova-demo/feedback?comp=swipe-cell&title=SwipeCell%20%E6%BB%91%E5%8A%A8%E5%8D%95%E5%85%83%E6%A0%BC"
      }
    ]
  },
  {
    "key": "display",
    "title": "展示组件",
    "items": [
      {
        "key": "badge",
        "label": "Badge 徽标",
        "category": "display",
        "link": "/components/badge.html",
        "demoPath": "/pages/nova-demo/display?comp=badge&title=Badge%20%E5%BE%BD%E6%A0%87"
      },
      {
        "key": "circle",
        "label": "Circle 环形进度条",
        "category": "display",
        "link": "/components/circle.html",
        "demoPath": "/pages/nova-demo/display?comp=circle&title=Circle%20%E7%8E%AF%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1"
      },
      {
        "key": "collapse",
        "label": "Collapse 折叠面板",
        "category": "display",
        "link": "/components/collapse.html",
        "demoPath": "/pages/nova-demo/display?comp=collapse&title=Collapse%20%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF"
      },
      {
        "key": "count-down",
        "label": "CountDown 倒计时",
        "category": "display",
        "link": "/components/count-down.html",
        "demoPath": "/pages/nova-demo/display?comp=count-down&title=CountDown%20%E5%80%92%E8%AE%A1%E6%97%B6"
      },
      {
        "key": "divider",
        "label": "Divider 分割线",
        "category": "display",
        "link": "/components/divider.html",
        "demoPath": "/pages/nova-demo/display?comp=divider&title=Divider%20%E5%88%86%E5%89%B2%E7%BA%BF"
      },
      {
        "key": "empty",
        "label": "Empty 空状态",
        "category": "display",
        "link": "/components/empty.html",
        "demoPath": "/pages/nova-demo/display?comp=empty&title=Empty%20%E7%A9%BA%E7%8A%B6%E6%80%81"
      },
      {
        "key": "highlight",
        "label": "Highlight 高亮文本",
        "category": "display",
        "link": "/components/highlight.html",
        "demoPath": "/pages/nova-demo/display?comp=highlight&title=Highlight%20%E9%AB%98%E4%BA%AE%E6%96%87%E6%9C%AC"
      },
      {
        "key": "image-preview",
        "label": "ImagePreview 图片预览",
        "category": "display",
        "link": "/components/image-preview.html",
        "demoPath": "/pages/nova-demo/display?comp=image-preview&title=ImagePreview%20%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88"
      },
      {
        "key": "lazyload",
        "label": "Lazyload 懒加载",
        "category": "display",
        "link": "/components/lazyload.html",
        "demoPath": "/pages/nova-demo/display?comp=lazyload&title=Lazyload%20%E6%87%92%E5%8A%A0%E8%BD%BD"
      },
      {
        "key": "list",
        "label": "List 列表",
        "category": "display",
        "link": "/components/list.html",
        "demoPath": "/pages/nova-demo/display?comp=list&title=List%20%E5%88%97%E8%A1%A8"
      },
      {
        "key": "notice-bar",
        "label": "NoticeBar 通知栏",
        "category": "display",
        "link": "/components/notice-bar.html",
        "demoPath": "/pages/nova-demo/display?comp=notice-bar&title=NoticeBar%20%E9%80%9A%E7%9F%A5%E6%A0%8F"
      },
      {
        "key": "popover",
        "label": "Popover 气泡弹出框",
        "category": "display",
        "link": "/components/popover.html",
        "demoPath": "/pages/nova-demo/display?comp=popover&title=Popover%20%E6%B0%94%E6%B3%A1%E5%BC%B9%E5%87%BA%E6%A1%86"
      },
      {
        "key": "progress",
        "label": "Progress 进度条",
        "category": "display",
        "link": "/components/progress.html",
        "demoPath": "/pages/nova-demo/display?comp=progress&title=Progress%20%E8%BF%9B%E5%BA%A6%E6%9D%A1"
      },
      {
        "key": "rolling-text",
        "label": "RollingText 翻滚文本",
        "category": "display",
        "link": "/components/rolling-text.html",
        "demoPath": "/pages/nova-demo/display?comp=rolling-text&title=RollingText%20%E7%BF%BB%E6%BB%9A%E6%96%87%E6%9C%AC"
      },
      {
        "key": "skeleton",
        "label": "Skeleton 骨架屏",
        "category": "display",
        "link": "/components/skeleton.html",
        "demoPath": "/pages/nova-demo/display?comp=skeleton&title=Skeleton%20%E9%AA%A8%E6%9E%B6%E5%B1%8F"
      },
      {
        "key": "steps",
        "label": "Steps 步骤条",
        "category": "display",
        "link": "/components/steps.html",
        "demoPath": "/pages/nova-demo/display?comp=steps&title=Steps%20%E6%AD%A5%E9%AA%A4%E6%9D%A1"
      },
      {
        "key": "sticky",
        "label": "Sticky 粘性布局",
        "category": "display",
        "link": "/components/sticky.html",
        "demoPath": "/pages/nova-demo/display?comp=sticky&title=Sticky%20%E7%B2%98%E6%80%A7%E5%B8%83%E5%B1%80"
      },
      {
        "key": "swipe",
        "label": "Swipe 轮播",
        "category": "display",
        "link": "/components/swipe.html",
        "demoPath": "/pages/nova-demo/display?comp=swipe&title=Swipe%20%E8%BD%AE%E6%92%AD"
      },
      {
        "key": "tag",
        "label": "Tag 标签",
        "category": "display",
        "link": "/components/tag.html",
        "demoPath": "/pages/nova-demo/display?comp=tag&title=Tag%20%E6%A0%87%E7%AD%BE"
      },
      {
        "key": "text-ellipsis",
        "label": "TextEllipsis 文本省略",
        "category": "display",
        "link": "/components/text-ellipsis.html",
        "demoPath": "/pages/nova-demo/display?comp=text-ellipsis&title=TextEllipsis%20%E6%96%87%E6%9C%AC%E7%9C%81%E7%95%A5"
      },
      {
        "key": "watermark",
        "label": "Watermark 水印",
        "category": "display",
        "link": "/components/watermark.html",
        "demoPath": "/pages/nova-demo/display?comp=watermark&title=Watermark%20%E6%B0%B4%E5%8D%B0"
      }
    ]
  },
  {
    "key": "navigation",
    "title": "导航组件",
    "items": [
      {
        "key": "action-bar",
        "label": "ActionBar 动作栏",
        "category": "navigation",
        "link": "/components/action-bar.html",
        "demoPath": "/pages/nova-demo/navigation?comp=action-bar&title=ActionBar%20%E5%8A%A8%E4%BD%9C%E6%A0%8F"
      },
      {
        "key": "back-top",
        "label": "BackTop 返回顶部",
        "category": "navigation",
        "link": "/components/back-top.html",
        "demoPath": "/pages/nova-demo/navigation?comp=back-top&title=BackTop%20%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8"
      },
      {
        "key": "grid",
        "label": "Grid 宫格",
        "category": "navigation",
        "link": "/components/grid.html",
        "demoPath": "/pages/nova-demo/navigation?comp=grid&title=Grid%20%E5%AE%AB%E6%A0%BC"
      },
      {
        "key": "index-bar",
        "label": "IndexBar 索引栏",
        "category": "navigation",
        "link": "/components/index-bar.html",
        "demoPath": "/pages/nova-demo/navigation?comp=index-bar&title=IndexBar%20%E7%B4%A2%E5%BC%95%E6%A0%8F"
      },
      {
        "key": "nav-bar",
        "label": "NavBar 导航栏",
        "category": "navigation",
        "link": "/components/nav-bar.html",
        "demoPath": "/pages/nova-demo/navigation?comp=nav-bar&title=NavBar%20%E5%AF%BC%E8%88%AA%E6%A0%8F"
      },
      {
        "key": "pagination",
        "label": "Pagination 分页",
        "category": "navigation",
        "link": "/components/pagination.html",
        "demoPath": "/pages/nova-demo/navigation?comp=pagination&title=Pagination%20%E5%88%86%E9%A1%B5"
      },
      {
        "key": "sidebar",
        "label": "Sidebar 侧边栏",
        "category": "navigation",
        "link": "/components/sidebar.html",
        "demoPath": "/pages/nova-demo/navigation?comp=sidebar&title=Sidebar%20%E4%BE%A7%E8%BE%B9%E6%A0%8F"
      },
      {
        "key": "tabs",
        "label": "Tab 标签页",
        "category": "navigation",
        "link": "/components/tabs.html",
        "demoPath": "/pages/nova-demo/navigation?comp=tabs&title=Tab%20%E6%A0%87%E7%AD%BE%E9%A1%B5"
      },
      {
        "key": "tabbar",
        "label": "Tabbar 标签栏",
        "category": "navigation",
        "link": "/components/tabbar.html",
        "demoPath": "/pages/nova-demo/navigation?comp=tabbar&title=Tabbar%20%E6%A0%87%E7%AD%BE%E6%A0%8F"
      },
      {
        "key": "tree-select",
        "label": "TreeSelect 分类选择",
        "category": "navigation",
        "link": "/components/tree-select.html",
        "demoPath": "/pages/nova-demo/navigation?comp=tree-select&title=TreeSelect%20%E5%88%86%E7%B1%BB%E9%80%89%E6%8B%A9"
      }
    ]
  },
  {
    "key": "business",
    "title": "业务组件",
    "items": [
      {
        "key": "address-edit",
        "label": "AddressEdit 地址编辑",
        "category": "business",
        "link": "/components/address-edit.html",
        "demoPath": "/pages/nova-demo/business?comp=address-edit&title=AddressEdit%20%E5%9C%B0%E5%9D%80%E7%BC%96%E8%BE%91"
      },
      {
        "key": "address-list",
        "label": "AddressList 地址列表",
        "category": "business",
        "link": "/components/address-list.html",
        "demoPath": "/pages/nova-demo/business?comp=address-list&title=AddressList%20%E5%9C%B0%E5%9D%80%E5%88%97%E8%A1%A8"
      },
      {
        "key": "area",
        "label": "Area 省市区选择",
        "category": "business",
        "link": "/components/area.html",
        "demoPath": "/pages/nova-demo/business?comp=area&title=Area%20%E7%9C%81%E5%B8%82%E5%8C%BA%E9%80%89%E6%8B%A9"
      },
      {
        "key": "card",
        "label": "Card 商品卡片",
        "category": "business",
        "link": "/components/card.html",
        "demoPath": "/pages/nova-demo/business?comp=card&title=Card%20%E5%95%86%E5%93%81%E5%8D%A1%E7%89%87"
      },
      {
        "key": "contact-card",
        "label": "ContactCard 联系人卡片",
        "category": "business",
        "link": "/components/contact-card.html",
        "demoPath": "/pages/nova-demo/business?comp=contact-card&title=ContactCard%20%E8%81%94%E7%B3%BB%E4%BA%BA%E5%8D%A1%E7%89%87"
      },
      {
        "key": "contact-edit",
        "label": "ContactEdit 联系人编辑",
        "category": "business",
        "link": "/components/contact-edit.html",
        "demoPath": "/pages/nova-demo/business?comp=contact-edit&title=ContactEdit%20%E8%81%94%E7%B3%BB%E4%BA%BA%E7%BC%96%E8%BE%91"
      },
      {
        "key": "contact-list",
        "label": "ContactList 联系人列表",
        "category": "business",
        "link": "/components/contact-list.html",
        "demoPath": "/pages/nova-demo/business?comp=contact-list&title=ContactList%20%E8%81%94%E7%B3%BB%E4%BA%BA%E5%88%97%E8%A1%A8"
      },
      {
        "key": "coupon",
        "label": "Coupon 优惠券",
        "category": "business",
        "link": "/components/coupon.html",
        "demoPath": "/pages/nova-demo/business?comp=coupon&title=Coupon%20%E4%BC%98%E6%83%A0%E5%88%B8"
      },
      {
        "key": "submit-bar",
        "label": "SubmitBar 提交订单栏",
        "category": "business",
        "link": "/components/submit-bar.html",
        "demoPath": "/pages/nova-demo/business?comp=submit-bar&title=SubmitBar%20%E6%8F%90%E4%BA%A4%E8%AE%A2%E5%8D%95%E6%A0%8F"
      }
    ]
  }
]
