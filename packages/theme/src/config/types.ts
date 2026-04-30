import type { DefaultTheme } from 'vitepress'

export interface HuasiConfig {
  logo?: string
  siteTitle?: string
  nav?: DefaultTheme.NavItem[]
  sidebar?: DefaultTheme.Sidebar
  socialLinks?: DefaultTheme.SocialLink[]
  footer?: DefaultTheme.Footer
  editLink?: DefaultTheme.EditLink
  lastUpdated?: DefaultTheme.LastUpdatedOptions
  search?: DefaultTheme.SearchOptions
  outline?: DefaultTheme.Outline
  docFooter?: DefaultTheme.DocFooter
  darkModeSwitchLabel?: string
  sidebarMenuLabel?: string
  returnToTopLabel?: string
  langMenuLabel?: string
  externalLinkIcon?: boolean
}
