<script setup lang="ts">
import * as v from "valibot";

const features = ["Tabac", "Presse", "Bar", "Autre"];
const days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

const schema = v.object({
  firstName: v.pipe(v.string(), v.nonEmpty("Le prénom est obligatoire.")),
  lastName: v.pipe(v.string(), v.nonEmpty("Le nom est obligatoire.")),
  phoneNumber: v.optional(v.string()),
  email: v.pipe(
    v.string(),
    v.nonEmpty("L'email est obligatoire."),
    v.email("L'email est invalide.")
  ),
  postalCode: v.pipe(v.string(), v.nonEmpty("Le code postal est obligatoire.")),
  city: v.pipe(v.string(), v.nonEmpty("La ville est obligatoire.")),
  address: v.pipe(v.string(), v.nonEmpty("L'adresse est obligatoire.")),
  businessName: v.pipe(
    v.string(),
    v.nonEmpty("Le nom de la société est obligatoire.")
  ),
  businessFeatures: v.pipe(
    v.array(v.pipe(v.string(), v.values(features))),
    v.nonEmpty("Les caractéristiques de la société sont obligatoires.")
  ),
  openingDays: v.pipe(
    v.array(v.pipe(v.string(), v.values(days))),
    v.nonEmpty("Les jours d'ouverture sont obligatoires.")
  ),
  openingHours: v.object(
    {
      start: v.pipe(
        v.string(),
        v.nonEmpty("L'horaire d'ouverture est obligatoire.")
      ),
      end: v.pipe(
        v.string(),
        v.nonEmpty("L'horaire de fermeture est obligatoire.")
      ),
    },
    "Les horaires d'ouverture sont obligatoires."
  ),
  period: v.object(
    {
      start: v.object({
        year: v.pipe(
          v.string(),
          v.nonEmpty("L'année de début est obligatoire.")
        ),
        month: v.pipe(
          v.string(),
          v.nonEmpty("Le mois de début est obligatoire.")
        ),
        day: v.pipe(
          v.string(),
          v.nonEmpty("Le jour de début est obligatoire.")
        ),
      }),
      end: v.object({
        year: v.pipe(v.string(), v.nonEmpty("L'année de fin est obligatoire.")),
        month: v.pipe(
          v.string(),
          v.nonEmpty("Le mois de fin est obligatoire.")
        ),
        day: v.pipe(v.string(), v.nonEmpty("Le jour de fin est obligatoire.")),
      }),
    },
    "Les dates de début et de fin sont obligatoires."
  ),
  otherEmployees: v.boolean("Cette information est obligatoire."),
});

const state = reactive({
  partnership: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  postalCode: "",
  city: "",
  address: "",
  businessName: "",
  businessFeatures: [],
  openingDays: [],
  openingHours: { start: "", end: "" },
  period: undefined,
  otherEmployees: false,
});
</script>

<template>
  <UForm :schema="v.safeParser(schema)" :state>
    <UFormField label="Prénom" name="firstName" required>
      <UInput v-model="state.firstName" />
    </UFormField>
    <UFormField label="Nom" name="lastName" required>
      <UInput v-model="state.lastName" />
    </UFormField>
    <UFormField
      label="Numéro de téléphone"
      name="phoneNumber"
      hint="Facultatif"
    >
      <UInput v-model="state.phoneNumber" type="tel" />
    </UFormField>
    <UFormField label="Email" name="email" required>
      <UInput v-model="state.email" type="email" />
    </UFormField>
    <UFormField label="Code postal" name="postalCode" required>
      <UInput v-model="state.postalCode" type="number" />
    </UFormField>
    <UFormField label="Ville" name="city" required>
      <UInput v-model="state.city" />
    </UFormField>
    <UFormField label="Adresse" name="address" required>
      <UInput v-model="state.address" />
    </UFormField>
    <UFormField label="Nom du commerce" name="businessName" required>
      <UInput v-model="state.businessName" />
    </UFormField>
    <UFormField
      label="Caractéristiques du commerce"
      name="businessFeatures"
      required
    >
      <UInputMenu v-model="state.businessFeatures" multiple :items="features" />
    </UFormField>
    <UFormField label="Jours d'ouverture" name="openingDays" required>
      <UInputMenu v-model="state.openingDays" multiple :items="days" />
    </UFormField>
    <UFormField label="Horaire d'ouverture" name="openingHours.start">
      <UInput v-model="state.openingHours.start" type="time" />
    </UFormField>
    <UFormField label="Horaire de fermeture" name="openingHours.end">
      <UInput v-model="state.openingHours.end" type="time" />
    </UFormField>
    <UFormField label="Période de réservation" name="period" required>
      <UCalendar v-model="state.period" range />
    </UFormField>
    <UFormField label="Autres employés présents" name="otherEmployees" required>
      <UCheckbox v-model="state.otherEmployees" />
    </UFormField>
    <UButton type="submit" label="Envoyer" />
  </UForm>
</template>
