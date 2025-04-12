<script setup lang="ts">
type Pricing = { price: string; fee: { default: number; annual: number } };

defineProps<{
  one: Pricing;
  two: Pricing;
  fee: { label: string; description: string };
}>();

const annualFee = ref(false);
</script>

<template>
  <UTabs
    id="formules"
    tabindex="-1"
    :items="[
      {
        icon: 'heroicons:user-solid',
        label: 'Un remplaçant',
        price: one.price,
        fee: annualFee ? one.fee.annual : one.fee.default,
      },
      {
        icon: 'heroicons:users-solid',
        label: 'Binôme de remplaçants',
        badge: annualFee ? 'Meilleure offre' : undefined,
        price: two.price,
        fee: annualFee ? two.fee.annual : two.fee.default,
      },
    ]"
  >
    <template #content="{ item }">
      <UPricingPlan
        :badge="item.badge"
        title="Lorem ipsum."
        description="À partir de"
        :price="item.price"
        billingCycle="/jour"
        :tagline="`Frais de gestion : ${item.fee} €`"
        :button="{ label: 'Demander un devis', to: '#devenir-partenaire' }"
      />
      <USwitch
        v-model="annualFee"
        :label="fee.label"
        :description="fee.description"
        unchecked-icon="heroicons:x-mark-solid"
        checked-icon="heroicons:check-solid"
      />
    </template>
  </UTabs>
</template>
