<script setup lang="ts">
import * as v from "valibot";

const schema = v.object({
  partnership: v.pipe(
    v.string(),
    v.values(["one-sub", "two-subs", "become-sub"])
  ),
  firstName: v.pipe(v.string(), v.nonEmpty("Votre prénom est obligatoire")),
  lastName: v.pipe(v.string(), v.nonEmpty("Votre nom est obligatoire")),
  phoneNumber: v.optional(v.string()),
  email: v.pipe(
    v.string(),
    v.nonEmpty("Votre email est obligatoire"),
    v.email("L'email est invalide")
  ),
});

const state = reactive({
  partnership: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
});
</script>

<template>
  <UForm :schema="v.safeParser(schema)" :state>
    <UFormField name="firstName" label="Prénom" required>
      <UInput v-model="state.firstName" />
    </UFormField>
    <UFormField name="lastName" label="Nom" required>
      <UInput v-model="state.lastName" />
    </UFormField>
    <UFormField name="phoneNumber" label="Numéro de téléphone" hint="Facultatif">
      <UInput v-model="state.phoneNumber" type="tel" />
    </UFormField>
    <UFormField name="email" label="Email" required>
      <UInput v-model="state.email" type="email" />
    </UFormField>
    <UButton type="submit" label="Envoyer" />
  </UForm>
</template>
