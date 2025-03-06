<script setup lang="ts">
const state = reactive<InfosSchema>({ Prénom: "", Nom: "", Email: "" });
</script>

<template>
  <UForm :state>
    <FormStepInfos :state />
    <UButton label="Envoyer" />
  </UForm>
</template>
