<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>

<template>
  <UPageHero
    :links="[
      { label: 'Nos formules', to: '#formules', variant: 'soft' },
      { label: 'Rejoignez notre réseau', to: '#devenir-partenaire' },
    ]"
  >
    <template #title>
      <MDC :value="title" :tag="false" unwrap="p" />
    </template>
    <template #description>
      <MDC :value="description" tag="p" unwrap="p" />
    </template>
  </UPageHero>
</template>
