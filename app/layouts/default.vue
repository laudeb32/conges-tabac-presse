<script setup lang="ts">
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
  <div>
    <slot name="banner" />
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
    <UContainer>
      <slot />
    </UContainer>
    <UFooter />
  </div>
</template>
