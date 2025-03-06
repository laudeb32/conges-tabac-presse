<script setup lang="ts">
defineProps<{ state: any }>();
</script>

<template>
  <UForm :schema="infosSchema" :state>
    <UFormField label="Prénom" name="Prénom" required>
      <UInput v-model="state.Prénom" />
    </UFormField>
    <UFormField label="Nom" name="Nom" required>
      <UInput v-model="state.Nom" />
    </UFormField>
    <UFormField label="Numéro de téléphone" name="Téléphone" hint="Facultatif">
      <UInput
        v-model="state.Téléphone"
        type="tel"
        trailing-icon="i-heroicons-phone"
      />
    </UFormField>
    <UFormField label="Email" name="Email" required>
      <UInput
        v-model="state.Email"
        type="email"
        trailing-icon="i-heroicons-at-symbol"
      />
    </UFormField>
  </UForm>
</template>
