import type { DefaultTheme } from 'vitepress'

export interface HuasiConfig extends DefaultTheme.Config {
  search?: DefaultTheme.MiniSearchOptions
}