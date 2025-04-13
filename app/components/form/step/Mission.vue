<script setup lang="ts">
import { today } from "@internationalized/date";

defineProps<{ state: any }>();
</script>

<template>
  <UForm :schema="missionSchema" :state>
    <UFormField label="Période" name="Période" required>
      <UCalendar
        v-model="state['Période']"
        range
        :is-date-disabled="(date) => date.compare(today('Europe/Paris')) < 0"
      />
    </UFormField>
    <UFormField label="Jours travaillés" name="Jours travaillés" required>
      <UInputMenu
        v-model="state['Jours travaillés']"
        multiple
        :items="[...DAYS]"
      />
    </UFormField>
    <UFormField
      label="Heures travaillées"
      name="Heures travaillées"
      hint="Par semaine"
      required
    >
      <UInputNumber v-model="state['Heures travaillées']" :min="0" />
    </UFormField>
    <UFormField label="Employés présents" name="Employés présents" required>
      <UInputNumber v-model="state['Employés présents']" :min="0" />
    </UFormField>
    <UFormField label="Hébergement" name="Hébergement" required>
      <UInputMenu v-model="state['Hébergement']" :items="[...ACCOMODATIONS]" />
    </UFormField>
    <UFormField label="Autres informations" name="Autres informations">
      <UTextarea v-model="state['Autres informations']" />
    </UFormField>
  </UForm>
</template>
