<script setup lang="ts">
const crispTrigger = useTemplateRef("crisp-trigger");

const navigation = [
  {
    label: "Témoignages",
    to: "#temoignages",
    icon: "heroicons:chat-bubble-left-right-solid",
  },
  {
    label: "Nos avantages",
    to: "#avantages",
    icon: "heroicons:sparkles-solid",
  },
  {
    label: "Nos formules",
    to: "#formules",
    icon: "heroicons:puzzle-piece-solid",
  },
];

const { isAvailable } = useAvailability();
</script>

<template>
  <div>
    <UHeader
      mode="drawer"
      title="Congés Tabac Presse"
      :ui="{
        body: 'flex flex-col gap-y-4 py-6',
        right: 'lg:gap-x-6',
      }"
    >
      <UNavigationMenu :items="navigation" />
      <template #body>
        <UNavigationMenu
          :items="navigation"
          orientation="vertical"
          variant="link"
          :ui="{ list: 'flex flex-col items-center', link: 'px-0' }"
        />
        <div class="flex justify-center items-center gap-x-2">
          <UButton to="#devenir-partenaire" label="Devenir partenaire" />
          <LazyUTooltip
            :text="
              isAvailable
                ? 'Disponible maintenant pour échanger !'
                : 'Actuellement indisponible. Votre message sera traité dès que possible.'
            "
            :delay-duration="0"
          >
            <UChip :color="isAvailable ? 'success' : 'warning'">
              <UButton
                icon="heroicons:chat-bubble-oval-left-ellipsis-solid"
                variant="soft"
              />
            </UChip>
          </LazyUTooltip>
        </div>
      </template>
      <template #right>
        <div class="flex items-center gap-x-2">
          <UButton
            to="#devenir-partenaire"
            label="Devenir partenaire"
            class="max-lg:hidden"
          />
          <LazyUTooltip
            :text="
              isAvailable
                ? 'Disponible maintenant pour échanger !'
                : 'Actuellement indisponible. Votre message sera traité dès que possible.'
            "
            :delay-duration="0"
            class="max-lg:hidden"
          >
            <UChip :color="isAvailable ? 'success' : 'warning'">
              <UButton
                icon="heroicons:chat-bubble-oval-left-ellipsis-solid"
                variant="soft"
              />
            </UChip>
          </LazyUTooltip>
        </div>
        <UColorModeButton />
      </template>
    </UHeader>
    <UContainer>
      <slot />
    </UContainer>
    <USeparator />
    <UFooter id="footer">
      <template #top>
        <UContainer>
          <div class="flex flex-wrap justify-between items-start">
            <UNavigationMenu
              :items="navigation"
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
    <ScriptCrisp id="">
      <template #awaitingLoad>
        <!-- TODO -->
        <div ref="crisp-trigger"></div>
      </template>
      <template #loading>
        <!-- TODO -->
      </template>
    </ScriptCrisp>
  </div>
</template>
