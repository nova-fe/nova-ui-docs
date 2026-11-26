import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import './styles/index.css'

export default defineClientConfig({
  layouts: {
    Layout
  }
})
