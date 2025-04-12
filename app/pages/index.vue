<script setup lang="ts">
definePageMeta({ layout: false });

const { data } = await useAsyncData(() => queryCollection("content").first());
</script>

<template>
  <template v-if="data">
    <NuxtLayout name="default">
      <Hero v-bind="data.hero" />
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
      <LazyPricing hydrate-on-visible v-bind="data.pricing" />
      <LazyPartnership hydrate-on-interaction />
      <LazyFaq hydrate-on-interaction v-bind="data.faq" />
    </NuxtLayout>
  </template>
</template>