<script setup lang="ts">
definePageMeta({ layout: false });

const { data } = await useAsyncData(() => queryCollection("content").first());

const annualFee = ref(false);
const partnership = ref<Partnership>();
</script>

<template>
  <template v-if="data">
    <NuxtLayout name="default">
      <UPageHero
        :title="data.hero.title"
        :links="[
          { label: 'Formules', to: '#formules', variant: 'soft' },
          { label: 'Devenir partenaire', to: '#devenir-partenaire' },
        ]"
      >
        <template #description>
          <MDC :value="data.hero.description" />
        </template>
      </UPageHero>
      <UPageSection
        :headline="data.intro.headline"
        :title="data.intro.title"
        :description="data.intro.description"
        orientation="horizontal"
      >
        <div class="flex flex-col gap-y-4">
          <UPageFeature
            v-for="(feature, index) in data.intro.features"
            :key="index"
            v-bind="feature"
          />
        </div>
      </UPageSection>
      <UPageColumns id="temoignages" tabindex="-1">
        <UPageCard
          variant="solid"
          to="#devenir-partenaire"
          icon="heroicons:user-plus-solid"
          :title="data.testimonials.title"
          :description="data.testimonials.description"
          :ui="{ leadingIcon: 'size-10' }"
        />
        <UPageCard
          v-for="(testimonial, index) in data.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description:
              'before:content-[open-quote] after:content-[close-quote]',
          }"
        >
          <template #footer>
            <UUser v-bind="testimonial.user" size="xl" />
          </template>
        </UPageCard>
      </UPageColumns>
      <UPageSection
        id="avantages"
        tabindex="-1"
        :title="data.why.title"
        :features="data.why.features"
      />
      <UTabs
        id="formules"
        tabindex="-1"
        :items="[
          {
            icon: 'heroicons:user-solid',
            label: 'Un remplaçant',
            price: data.pricing.one.price,
            fee: annualFee
              ? data.pricing.one.fee.annual
              : data.pricing.one.fee.default,
          },
          {
            icon: 'heroicons:users-solid',
            label: 'Binôme de remplaçants',
            badge: annualFee ? 'Meilleure offre' : undefined,
            price: data.pricing.two.price,
            discount: data.pricing.two.discount,
            fee: annualFee
              ? data.pricing.two.fee.annual
              : data.pricing.two.fee.default,
          },
        ]"
      >
        <template #content="{ item }">
          <UPricingPlan
            :badge="item.badge"
            title="Lorem ipsum."
            description="À partir de"
            :price="item.price"
            :discount="item.discount"
            billingCycle="/jour"
            :tagline="`Frais de gestion : ${item.fee} €`"
            :button="{ label: 'Demander un devis', to: '#devenir-partenaire' }"
          />
          <USwitch
            v-model="annualFee"
            :label="data.pricing.fee.label"
            :description="data.pricing.fee.description"
            unchecked-icon="heroicons:x-mark-solid"
            checked-icon="heroicons:check-solid"
          />
        </template>
      </UTabs>
      <UPageSection
        id="devenir-partenaire"
        tabindex="-1"
        title="Votre demande en quelques clics"
      >
        <UFormField label="Vous souhaitez :">
          <URadioGroup v-model="partnership" :items="[...PARTNERSHIPS]" />
        </UFormField>
        <template v-if="partnership">
          <FormQuick v-if="partnership === 'Devenir remplaçant'" />
          <FormFull v-else />
        </template>
      </UPageSection>
      <UPageSection :title="data.faq.title" :description="data.faq.description">
        <UPageAccordion :items="data.faq.items" />
      </UPageSection>
    </NuxtLayout>
  </template>
</template>
