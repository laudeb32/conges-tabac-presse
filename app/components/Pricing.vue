<script setup lang="ts">
type Pricing = { price: string; fee: { default: number; annual: number } };

defineProps<{
  title: string;
  description: string;
  one: Pricing;
  two: Pricing;
  fee: { label: string; description: string };
  button: { label: string };
}>();

const annualFee = ref(false);
</script>

<template>
  <UPageSection
    id="tarifs"
    tabindex="-1"
    :title="title"
    :description="description"
  >
    <UTabs
      :items="[
        {
          icon: 'heroicons:user-solid',
          label: 'Un remplaçant',
          price: one.price,
          fee: annualFee ? one.fee.annual : one.fee.default,
        },
        {
          icon: 'heroicons:users-solid',
          label: 'Deux remplaçants',
          price: two.price,
          fee: annualFee ? two.fee.annual : two.fee.default,
          ...(annualFee && { badge: 'Meilleure offre' }),
        },
      ]"
      v-bind="
        $viewport.isLessThan('mobileWide') && {
          orientation: 'vertical',
          ui: { list: 'w-full', trigger: 'justify-center' },
        }
      "
      class="flex flex-col max-w-120 mx-auto"
    >
      <template #content="{ item }">
        <UPricingPlan
          :badge="item.badge"
          :title="item.label"
          description="À partir de"
          :price="item.price"
          billingCycle="/jour"
          :ui="{
            footer: 'items-start',
          }"
        >
          <template #footer>
            <p>Frais de gestion : {{ item.fee }} €</p>
            <USwitch
              v-model="annualFee"
              :label="`${fee.label}*`"
              unchecked-icon="heroicons:x-mark-solid"
              checked-icon="heroicons:check-solid"
            />
            <UButton
              to="#demande"
              :label="button.label"
              class="justify-center w-full"
            />
          </template>
        </UPricingPlan>
        <p class="text-xs">*{{ fee.description }}</p>
      </template>
    </UTabs>
  </UPageSection>
</template>
