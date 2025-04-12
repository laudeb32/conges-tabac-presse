<script setup lang="ts">
const { isAvailable } = useAvailability();
</script>

<template>
  <LazyUTooltip
    :text="
      isAvailable
        ? 'Disponible maintenant pour échanger !'
        : 'Actuellement indisponible. Votre message sera traité dès que possible.'
    "
    :delay-duration="0"
  >
    <UChip
      :color="isAvailable ? 'success' : 'warning'"
      v-bind="isAvailable && { ui: { base: 'animate-pulse' } }"
    >
      <UButton
        icon="heroicons:chat-bubble-oval-left-ellipsis-solid"
        variant="soft"
      />
    </UChip>
  </LazyUTooltip>
</template>
