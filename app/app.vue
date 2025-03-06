<script setup lang="ts">
const route = useRoute();

const items = [
  {
    label: "Témoignages",
    to: "#temoignages",
    icon: "heroicons:chat-bubble-left-right-solid",
  },
  {
    label: "Avantages",
    to: "#avantages",
    icon: "heroicons:sparkles-solid",
  },
  {
    label: "Formules",
    to: "#formules",
    icon: "heroicons:puzzle-piece-solid",
  },
  {
    label: "Me contacter",
    to: "#contact",
    icon: "heroicons:envelope-solid",
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
