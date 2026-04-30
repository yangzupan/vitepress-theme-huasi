import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'

/// <reference types="./types" />

export default {
  extends: DefaultTheme,
  enhanceApp() {}
} satisfies Theme
