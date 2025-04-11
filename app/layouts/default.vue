<script setup lang="ts">
function navigationItems(type: "header" | "footer" = "header") {
  return [
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
    ...(type === "header"
      ? [
          {
            label: "Me contacter",
            to: "#",
            icon: "heroicons:chat-bubble-oval-left-ellipsis-solid",
          },
        ]
      : []),
  ];
}
</script>

<template>
  <div>
    <UHeader title="Congés Tabac Presse">
      <UNavigationMenu :items="navigationItems()" />
      <template #body>
        <UNavigationMenu :items="navigationItems()" />
      </template>
      <template #right>
        <UColorModeButton />
        <UButton to="#devenir-partenaire" label="Devenir partenaire" />
      </template>
    </UHeader>
    <UContainer>
      <slot />
    </UContainer>
    <USeparator />
    <UFooter id="footer">
      <template #top>
        <UContainer>
          <div class="flex justify-between items-start">
            <UNavigationMenu
              :items="navigationItems('footer')"
              orientation="vertical"
              variant="link"
            />
            <address class="flex flex-col">
              <p>Laurent Debriat</p>
              <NuxtLink to="mailto:contact@congestabacpresse.fr">
                <UIcon name="heroicons:envelope-solid" class="size-4" />
                contact@congestabacpresse.fr
              </NuxtLink>
              <NuxtLink to="tel:+33687918016">
                <UIcon name="heroicons:phone-solid" class="size-4" />
                06 87 91 80 16
              </NuxtLink>
            </address>
            <div>
              <NuxtLink
                to="https://www.facebook.com/congestabacpresse/"
                target="_blank"
              >
                <UIcon name="i-mdi-facebook" class="size-8" />
              </NuxtLink>
              <NuxtLink
                to="https://www.linkedin.com/in/laurent-debriat-938a66147/"
                target="_blank"
              >
                <UIcon name="i-mdi-linkedin" class="size-8" />
              </NuxtLink>
            </div>
          </div>
        </UContainer>
      </template>
      <template #left>
        <p>Congés Tabac Presse</p>
      </template>
      <template #right>
        <UButton
          to="/mentions-legales"
          label="Mentions légales"
          icon="i-mdi-legal"
          variant="link"
          color="neutral"
        />
      </template>
    </UFooter>
  </div>
</template>
