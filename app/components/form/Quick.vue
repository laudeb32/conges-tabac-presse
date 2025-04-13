<script setup lang="ts">
const state = reactive<InfoForm>({
  Prénom: "",
  Nom: "",
  Téléphone: "",
  Email: "",
});
</script>

<template>
  <UForm :state>
    <FormStepInfos :state />
    <UAlert
      title="Il vous sera demandé un extrait de casier judiciaire."
      color="info"
      icon="heroicons:information-circle"
    >
      <template #description>
        <p>
          Vous pouvez en faire la demande sur
          <NuxtLink
            to="https://casier-judiciaire.justice.gouv.fr/"
            class="underline"
          >
            le site dédié du gouvernement</NuxtLink
          >.
        </p>
      </template>
    </UAlert>
    <UButton label="Envoyer" />
  </UForm>
</template>
