<script setup lang="ts">
const route = useRoute();

const items = [
  {
    label: "Avantages",
    to: "#avantages",
    icon: "heroicons:bolt-20-solid",
  },
  {
    label: "Témoignages",
    to: "#temoignages",
    icon: "heroicons:chat-bubble-left-right-20-solid",
  },
  {
    label: "Formules",
    to: "#formules",
    icon: "heroicons:information-circle-20-solid",
  },
  {
    label: "Me contacter",
    to: "#contact",
    icon: "heroicons:envelope-20-solid",
  },
];
</script>

<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <UContainer>
      <UHeader title="Congés Tabac Presse">
        <UNavigationMenu :items />
        <template #body>
          <UNavigationMenu :items />
        </template>
        <template #right>
          <UColorModeButton />
          <UButton to="#devenir-partenaire" label="Devenir partenaire" />
        </template>
      </UHeader>
      <NuxtPage />
      <UFooter />
    </UContainer>
  </UApp>
</template>
