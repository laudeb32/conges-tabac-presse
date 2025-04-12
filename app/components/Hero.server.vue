<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  links: { pricing: string; request: string };
}>();
</script>

<template>
  <UPageHero
    :links="[
      { label: links.pricing, to: '#tarifs', variant: 'soft' },
      { label: links.request, to: '#demande' },
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
