<script setup lang="ts">
const props = defineProps<{ state: any }>();
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
    <UFormField
      label="Caractéristiques de l'établissement"
      name="Caractéristiques de l'établissement"
      required
    >
      <UInputMenu
        v-model="state['Caractéristiques de l\'établissement']"
        multiple
        :items="[...FEATURES]"
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
      label="Nombre de clients par jour"
      name="Nombre de clients par jour"
      hint="En moyenne"
      help="±50 près"
      required
    >
      <UInputNumber v-model="state['Nombre de clients par jour']" :min="0" :step="50" />
    </UFormField>
  </UForm>
</template>
