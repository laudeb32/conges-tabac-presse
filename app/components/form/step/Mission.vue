<script setup lang="ts">
import { today } from "@internationalized/date";

const { state } = defineProps<{ state: any }>();

const workingDays = computed(() => state["Jours travaillés"]);
const workingPeriods = computed(() => state["Périodes de travail"]);

watch(workingDays, (value) => {
  for (const day of value) {
    if (workingPeriods.value[day]) continue;

    workingPeriods.value[day] = [
      { début: "09:00", fin: "12:00" },
      { début: "14:00", fin: "18:00" },
    ];
  }

  for (const day of Object.keys(workingPeriods.value)) {
    if (value.includes(day)) continue;

    delete workingPeriods.value[day];
  }
});

function addTimePeriod(day: string) {
  workingPeriods.value[day].push({
    début: "00:00",
    fin: "00:00",
  });
}

function removeTimePeriod(day: string, index: number) {
  workingPeriods.value[day].splice(index, 1);
}

const open = reactive({ workingDays: false, accomodation: false });
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
        v-model:open="open.workingDays"
        :items="[...DAYS]"
        multiple
        @click="open.workingDays = true"
      />
    </UFormField>
    <div v-for="day in workingDays" :key="day">
      <span>{{ day }}</span>
      <UFormField
        v-for="(_, index) in workingPeriods[day]"
        :label="index === 0 ? 'De' : 'Et de'"
        class="flex items-center"
      >
        <div class="flex items-center gap-x-2">
          <UInput v-model="workingPeriods[day][index].début" type="time" />
          <span>à</span>
          <UInput v-model="workingPeriods[day][index].fin" type="time" />
          <UButton
            v-if="index > 0"
            icon="heroicons:x-mark"
            color="error"
            variant="ghost"
            @click="removeTimePeriod(day, index)"
          />
        </div>
      </UFormField>
      <UButton
        icon="heroicons:plus"
        variant="ghost"
        label="Ajouter une période"
        @click="addTimePeriod(day)"
      />
    </div>
    <UFormField label="Employés présents" name="Employés présents" required>
      <UInputNumber v-model="state['Employés présents']" :min="0" />
    </UFormField>
    <UFormField label="Hébergement" name="Hébergement" required>
      <UInputMenu
        v-model="state['Hébergement']"
        v-model:open="open.accomodation"
        :items="[...ACCOMODATIONS]"
        @click="open.accomodation = true"
      />
    </UFormField>
    <UFormField label="Autres informations" name="Autres informations">
      <UTextarea v-model="state['Autres informations']" />
    </UFormField>
  </UForm>
</template>
