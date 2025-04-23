<script setup lang="ts">
const state = reactive<QuickForm>({
  Prénom: "",
  Nom: "",
  Téléphone: "",
  Email: "",
  Compétences: [],
});

function submit() {
  console.log(state);
}

const open = ref(false);
</script>

<template>
  <UForm :schema="quickFormSchema" :state @submit="submit">
    <FormStepInfos :state />
    <UFormField label="Compétences" name="Compétences" required>
      <UInputMenu
        v-model="state['Compétences']"
        v-model:open="open"
        multiple
        :items="[...FEATURES]"
        @click="open = true"
      />
    </UFormField>
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
    <UButton type="submit" label="Envoyer" />
  </UForm>
</template>
