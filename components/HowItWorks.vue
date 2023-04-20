<template>
  <section class="how-it-works py-16">
    <h2 class="section-title text-3xl font-semibold text-center mb-10">{{ t('pages.landing.how_it_works.title') }}</h2>
    <div class="steps-container grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="step text-center" >
          <IconMdi:account-circle class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step1title }}</h3>
          <p>{{ step1description }}</p>
      </div>
      <div class="step text-center">
          <IconMdi:account-multiple-check class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step2title}}</h3>
          <p>{{ step2description }}</p>
      </div>
      <div class="step text-center">
          <IconMdi:school class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step3title }}</h3>
          <p>{{ step3description }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const { t } = useLang();
const step1title = computed(() => t('pages.landing.how_it_works.steps.sign_up.title'));
const step1description = computed(() => t('pages.landing.how_it_works.steps.sign_up.description'));

const step2title = computed(() => t('pages.landing.how_it_works.steps.get_matched.title'));
const step2description = computed(() => t('pages.landing.how_it_works.steps.get_matched.description'));

const step3title = computed(() => t('pages.landing.how_it_works.steps.start_learning.title'));
const step3description = computed(() => t('pages.landing.how_it_works.steps.start_learning.description'));

</script>
