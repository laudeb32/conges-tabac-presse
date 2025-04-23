<script setup lang="ts">
defineProps<{ state: any }>();

const open = ref(false);
</script>

<template>
  <UForm :schema="establishmentSchema" :state>
    <UFormField
      label="Nom de l'établissement"
      name="Nom de l'établissement"
      required
    >
      <UInput v-model="state['Nom de l\'établissement']" />
    </UFormField>
    <UFormField label="Code postal" name="Code postal" required>
      <UInput v-model="state['Code postal']" />
    </UFormField>
    <UFormField label="Ville" name="Ville" required>
      <UInput v-model="state.Ville" />
    </UFormField>
    <UFormField label="Adresse" name="Adresse" required>
      <UInput v-model="state.Adresse" />
    </UFormField>
    <UFormField label="Caractéristiques" name="Caractéristiques" required>
      <UInputMenu
        v-model="state['Caractéristiques']"
        v-model:open="open"
        multiple
        :items="[...FEATURES]"
        @click="open = true"
      />
    </UFormField>
    <UFormField
      label="Numéro de SIRET"
      name="Numéro de SIRET"
      hint="Facultatif"
    >
      <UInput v-model="state['Numéro de SIRET']" />
    </UFormField>
    <UFormField
      label="Nombre de clients"
      name="Nombre de clients"
      hint="En moyenne/jour"
      help="±50 près"
      required
    >
      <UInputNumber v-model="state['Nombre de clients']" :min="0" :step="50" />
    </UFormField>
  </UForm>
</template>
