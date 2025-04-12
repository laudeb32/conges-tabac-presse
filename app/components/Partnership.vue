<script setup lang="ts">
const partnership = ref<Partnership>();
</script>

<template>
  <UPageSection
    id="devenir-partenaire"
    tabindex="-1"
    title="Votre demande en quelques clics"
  >
    <UFormField label="Vous souhaitez :">
      <URadioGroup v-model="partnership" :items="[...PARTNERSHIPS]" />
    </UFormField>
    <template v-if="partnership">
      <FormQuick v-if="partnership === 'Devenir remplaçant'" />
      <FormFull v-else />
    </template>
  </UPageSection>
</template>
