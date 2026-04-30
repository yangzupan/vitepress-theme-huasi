<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button
    :class="['my-custom-button', { 'variant-primary': variant === 'primary', 'variant-secondary': variant === 'secondary' }]"
  >
    <slot />
  </button>
</template>

<style scoped>
.my-custom-button {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.variant-primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.variant-primary:hover {
  background: var(--vp-c-brand-2);
}

.variant-secondary {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text);
  border: 1px solid var(--vp-c-divider);
}

.variant-secondary:hover {
  background: var(--vp-c-hover);
}
</style>