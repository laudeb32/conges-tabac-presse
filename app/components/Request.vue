<template>
  <UPageSection
    id="demande"
    tabindex="-1"
    title="Effectuez votre demande en quelques clics"
  >
    <UTabs
      :items="[...PARTNERSHIPS]"
      v-bind="
        $viewport.isLessThan('tablet') && {
          orientation: 'vertical',
          ui: { list: 'w-full', trigger: 'justify-center' },
        }
      "
      class="flex flex-col w-full max-w-screen-sm mx-auto"
    >
      <template #content="{ item }">
        <FormQuick v-if="item.label === 'Devenir remplaçant'" />
        <FormFull v-else />
      </template>
    </UTabs>
  </UPageSection>
</template>
