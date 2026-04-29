import type { DefaultTheme, UserConfig } from 'vitepress'
import type { HuasiConfig } from './types'

export function defineConfig(config: UserConfig<HuasiConfig>): UserConfig<HuasiConfig> {
  return config
}

export function defineThemeConfig(config: HuasiConfig): HuasiConfig {
  return config
}

export type { HuasiConfig }
