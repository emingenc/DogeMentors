<template>
    <section class="mentee-workflow py-3">
      <h2 class="section-title text-3xl font-semibold text-center mb-10">{{ t('pages.landing.mentee_workflow.title') }}</h2>
      <div class="steps-container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="step text-center">
          <IconMdi:update class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step4title }}</h3>
          <p>{{ step4description }}</p>
        </div>
        <div class="step text-center">
          <IconMdi:account-multiple-outline class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step5title }}</h3>
          <p>{{ step5description }}</p>
        </div>
        <div class="step text-center">
          <IconMdi:code-tags class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step6title }}</h3>
          <p>{{ step6description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  const { t } = useLang();
  
  const step4title = computed(() => t('pages.landing.mentee_workflow.steps.weekly_updates.title'));
  const step4description = computed(() => t('pages.landing.mentee_workflow.steps.weekly_updates.description'));
  
  const step5title = computed(() => t('pages.landing.mentee_workflow.steps.collaborate.title'));
  const step5description = computed(() => t('pages.landing.mentee_workflow.steps.collaborate.description'));
  
  const step6title = computed(() => t('pages.landing.mentee_workflow.steps.code_reviews.title'));
  const step6description = computed(() => t('pages.landing.mentee_workflow.steps.code_reviews.description'));
  
  </script>
  