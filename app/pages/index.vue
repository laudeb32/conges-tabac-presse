<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection("content").first());

const annualFee = ref(false);
const partnership = ref();
</script>

<template>
  <template v-if="data">
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
        icon="i-heroicons-user-plus-solid"
        title="Collaborons ensemble !"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui est voluptas nisi ullam iure."
        :ui="{ leadingIcon: 'size-10' }"
      />
      <UPageCard
        v-for="(testimonial, index) in data.testimonials"
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
          icon: 'i-heroicons-user-solid',
          label: 'Un remplaçant',
          price: '100 €',
          fee: annualFee ? 360 : 200,
        },
        {
          icon: 'i-heroicons-users-solid',
          label: 'Binôme de remplaçants',
          badge: annualFee ? 'Meilleure offre' : undefined,
          price: '200 €',
          discount: '190 €',
          fee: annualFee ? 550 : 300,
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
          label="Forfait annuel"
          description="Ce forfait permet l'utilisation des services de remplacement sans aucun frais de gestion supplémentaire pendant une durée de 12 mois. Il est rentabilisé dès lors que vous souhaitez effectuer plus de deux demandes par an."
          unchecked-icon="i-heroicons-x-mark-solid"
          checked-icon="i-heroicons-check-solid"
        />
      </template>
    </UTabs>
    <UPageSection
      id="devenir-partenaire"
      tabindex="-1"
      title="Rejoignez l'aventure en quelques clics"
    >
      <UFormField label="Vous souhaitez :">
        <URadioGroup
          v-model="partnership"
          :items="[
            { label: 'Un remplaçant', value: 'un' },
            { label: 'Un binôme de remplaçants', value: 'deux' },
            { label: 'Devenir remplaçant', value: 'remplacant' },
          ]"
        />
      </UFormField>
      <SimpleForm v-if="partnership === 'remplacant'" />
      <UTabs
        v-else
        variant="link"
        :items="[
          {
            label: 'Complet',
            icon: 'i-heroicons-clipboard-document-list-solid',
            slot: 'complet',
          },
          { label: 'Rapide', icon: 'i-heroicons-bolt-solid', slot: 'rapide' },
        ]"
      >
        <template #complet>
          <FullForm />
        </template>
        <template #rapide>
          <QuickForm />
        </template>
      </UTabs>
    </UPageSection>
  </template>
</template>
