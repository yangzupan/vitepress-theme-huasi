<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import LenisVue from 'lenis/vue'

const { Layout } = DefaultTheme
</script>

<template>
  <LenisVue
    :options="{
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(1 - t, 6)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    }"
  >
    <Layout />
  </LenisVue>
</template>