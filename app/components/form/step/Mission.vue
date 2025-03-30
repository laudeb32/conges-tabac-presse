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
    <UFormField label="Jours travaillés" name="Jours travaillés" required>
      <UInputMenu
        v-model="state['Jours travaillés']"
        multiple
        :items="[...DAYS]"
      />
    </UFormField>
    <UFormField
      label="Nombre d'heures par semaine"
      name="Nombre d'heures par semaine"
      required
    >
      <UInputNumber v-model="state['Nombre d\'heures par semaine']" :min="0" />
    </UFormField>
    <UFormField
      label="Autres employés présents"
      name="Autres employés présents"
      required
    >
      <UInputNumber v-model="state['Autres employés présents']" :min="0" />
    </UFormField>
    <pre>{{ state["Hébergement sur place"] }}</pre>
    <UFormField
      label="Hébergement sur place"
      name="Hébergement sur place"
      required
    >
      <UInputMenu
        v-model="state['Hébergement sur place']"
        :items="[...ACCOMODATIONS]"
      />
    </UFormField>
    <UFormField label="Autres informations" name="Autres informations">
      <UTextarea v-model="state['Autres informations']" />
    </UFormField>
  </UForm>
</template>
