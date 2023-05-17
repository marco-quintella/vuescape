<script setup lang="ts">
import { calculateBorderRadius, calculateMargin } from '@vuescape/vuescape/shared'
import { computed } from 'vue'
import type { VsAlertProps } from './types'

const props = withDefaults(defineProps<VsAlertProps>(), {
  m: '1rem',
  gap: '1rem',
})

const marginValue = computed(() => calculateMargin(props))

const borderRadiusValue = computed(() => calculateBorderRadius(props))
</script>

<template>
  <div class="vs-alert">
    <div>ICON</div>
    <div>ALERT</div>
  </div>
</template>

<style scoped lang="scss">
.vs-alert {
  display: flex;
  margin: v-bind(marginValue);

  gap: v-bind(gap);
  grid-gap: v-bind(gap);

  background-color: v-bind(bg);

  border-radius: v-bind(borderRadiusValue);
}
</style>
