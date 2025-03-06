<script setup lang="ts">
defineProps<{ state: any }>();
</script>

<template>
  <UForm :schema="missionSchema" :state>
    <UFormField
      label="Période de réservation"
      name="Période de réservation"
      required
    >
      <UCalendar v-model="state['Période de réservation']" range />
    </UFormField>
    <UFormField label="Horaire de début" name="Horaire de début" required>
      <UInput v-model="state['Horaire de début']" type="time" />
    </UFormField>
    <UFormField label="Horaire de fin" name="Horaire de fin" required>
      <UInput v-model="state['Horaire de fin']" type="time" />
    </UFormField>
    <UFormField
      label="Autres employés présents"
      name="Autres employés présents"
      required
    >
      <UInput v-model="state['Autres employés présents']" type="number" />
    </UFormField>
    <UFormField label="Hébergement sur place" name="Hébergement sur place">
      <UCheckbox v-model="state['Hébergement sur place']" />
    </UFormField>
    <UFormField label="Autres informations" name="Autres informations">
      <UTextarea v-model="state['Autres informations']" />
    </UFormField>
  </UForm>
</template>
