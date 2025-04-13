<script setup lang="ts">
const { partnership } = defineProps<{ partnership?: Partnership }>();

const steps = ref([
  {
    slot: "info",
    title: "Informations personnelles",
    icon: "heroicons:clipboard-document-list",
  },
  {
    slot: "establishment",
    title: "Détails de l'établissement",
    icon: "heroicons:building-storefront",
  },
  {
    slot: "mission",
    title: "Détails de la mission",
    icon: "heroicons:calendar-days",
  },
]);

const state = reactive<Partial<Form>>({
  Prénom: "",
  Nom: "",
  Téléphone: "",
  Email: "",
  "Nom de l'établissement": "",
  "Code postal": "",
  Ville: "",
  Adresse: "",
  Caractéristiques: [],
  "Nombre de clients": 0,
  Période: undefined,
  "Jours travaillés": [],
  "Heures travaillées": 0,
  "Employés présents": 0,
  Hébergement: undefined,
  "Autres informations": "",
});

const currentStep = ref(0);
const isLastStep = computed(() => currentStep.value === steps.value.length - 1);

function previousStep() {
  currentStep.value--;
}

function nextStep() {
  currentStep.value++;
}

async function submit() {
  await $fetch("/api/gerants", {
    method: "POST",
    body: { Demande: partnership, ...state },
  });
}
</script>

<template>
  <UForm :state @submit="isLastStep ? submit() : nextStep()">
    <UStepper
      v-model="currentStep"
      :items="steps"
      disabled
      :ui="{ title: 'max-xs:hidden' }"
    >
      <template #info>
        <FormStepInfos :state />
      </template>
      <template #establishment>
        <FormStepEstablishment :state />
      </template>
      <template #mission>
        <FormStepMission :state />
      </template>
    </UStepper>
    <UButton
      v-if="currentStep > 0"
      label="Étape précédente"
      @click="previousStep"
    />
    <UButton v-if="!isLastStep" type="submit" label="Étape suivante" />
    <UButton v-else type="submit" label="Envoyer" />
  </UForm>
</template>
