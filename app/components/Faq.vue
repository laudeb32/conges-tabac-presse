<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  items: { label: string; content: string }[];
}>();
</script>

<template>
  <UPageSection :title="title" :description="description">
    <UPageAccordion :items="items" />
  </UPageSection>
</template>
