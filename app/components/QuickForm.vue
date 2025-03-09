<script setup lang="ts">
import * as v from "valibot";

const { partnership } = defineProps<{ partnership: Partnership }>();

const schema = v.object({
  partnership: v.pipe(v.string(), v.values(PARTNERSHIPS)),
  Prénom: v.pipe(v.string(), v.nonEmpty("Votre prénom est obligatoire")),
  Nom: v.pipe(v.string(), v.nonEmpty("Votre nom est obligatoire")),
  Téléphone: v.optional(v.string()),
  Email: v.pipe(
    v.string(),
    v.nonEmpty("Votre email est obligatoire"),
    v.email("L'email est invalide")
  ),
});

const state = reactive({
  partnership: "",
  Prénom: "",
  Nom: "",
  Téléphone: "",
  Email: "",
});
</script>

<template>
  <UForm :schema="v.safeParser(schema)" :state>
    <UInput name="partnership" :value="partnership" hidden />
    <UFormField name="Prénom" label="Prénom" required>
      <UInput v-model="state.Prénom" />
    </UFormField>
    <UFormField name="Nom" label="Nom" required>
      <UInput v-model="state.Nom" />
    </UFormField>
    <UFormField name="Téléphone" label="Numéro de téléphone" hint="Facultatif">
      <UInput v-model="state.Téléphone" type="tel" />
    </UFormField>
    <UFormField name="Email" label="Email" required>
      <UInput v-model="state.Email" type="email" />
    </UFormField>
    <UButton type="submit" label="Envoyer" />
  </UForm>
</template>
