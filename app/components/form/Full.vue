<script setup lang="ts">
const steps = ref([
  {
    slot: "infos",
    title: "Informations personnelles",
    icon: "i-heroicons-clipboard-document-list",
  },
  {
    slot: "establishment",
    title: "Détails de l'établissement",
    icon: "i-heroicons-building-storefront",
  },
  {
    slot: "mission",
    title: "Détails de la mission",
    icon: "i-heroicons-calendar-days",
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
  "Caractéristiques de l'établissement": [],
  "Nombre de clients par jour": 0,
  "Période de remplacement": undefined,
  "Jours travaillés": [],
  "Nombre d'heures par semaine": 0,
  "Autres employés présents": 0,
  "Hébergement sur place": undefined,
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

function submit(event: SubmitEvent) {
  console.log(event);
}
</script>

<template>
  <UForm :state @submit="(e) => (isLastStep ? submit(e) : nextStep())">
    <UStepper
      v-model="currentStep"
      :items="steps"
      disabled
      :ui="{ title: 'max-xs:hidden' }"
    >
      <template #infos>
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
