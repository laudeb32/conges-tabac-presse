<script setup lang="ts">
defineProps<{ state: any }>();
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
    <UFormField label="Jours d'ouverture" name="Jours d'ouverture" required>
      <UInputMenu
        v-model="state['Jours d\'ouverture']"
        multiple
        :items="[...DAYS]"
      />
    </UFormField>
    <UFormField label="Horaire d'ouverture" name="Horaire d'ouverture">
      <UInput v-model="state['Horaire d\'ouverture']" type="time" />
    </UFormField>
    <UFormField label="Horaire de fermeture" name="Horaire de fermeture">
      <UInput v-model="state['Horaire de fermeture']" type="time" />
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
    <UFormField label="Code postal" name="Code postal" required>
      <UInput v-model="state['Code postal']" type="number" />
    </UFormField>
    <UFormField label="Ville" name="Ville" required>
      <UInput v-model="state.Ville" />
    </UFormField>
    <UFormField label="Adresse" name="Adresse" required>
      <UInput v-model="state.Adresse" />
    </UFormField>
    <UFormField label="Numéro de SIRET" name="Numéro de SIRET" required>
      <UInput v-model="state['Numéro de SIRET']" />
    </UFormField>
    <UFormField
      label="Nombre de clients par jour"
      name="Nombre de clients par jour"
      hint="En moyenne"
      required
    >
      <UInput v-model="state['Nombre de clients par jour']" type="number" />
    </UFormField>
  </UForm>
</template>
