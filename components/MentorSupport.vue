<template>
    <section class="mentor-support py-2">
      <h2 class="section-title text-3xl font-semibold text-center mb-10">{{ t('pages.landing.mentor_support.title') }}</h2>
      <div class="steps-container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="step text-center">
          <IconMdi:briefcase-account class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step1title }}</h3>
          <p>{{ step1description }}</p>
        </div>
        <div class="step text-center">
          <IconMdi:file-document-edit-outline class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step2title }}</h3>
          <p>{{ step2description }}</p>
        </div>
        <div class="step text-center">
          <IconMdi:book-open-variant class="w-24 h-auto mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ step3title }}</h3>
          <p>{{ step3description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  const { t } = useLang();
  const step1title = computed(() => t('pages.landing.mentor_support.steps.career_guidance.title'));
  const step1description = computed(() => t('pages.landing.mentor_support.steps.career_guidance.description'));
  
  const step2title = computed(() => t('pages.landing.mentor_support.steps.resume_cv_assistance.title'));
  const step2description = computed(() => t('pages.landing.mentor_support.steps.resume_cv_assistance.description'));
  
  const step3title = computed(() => t('pages.landing.mentor_support.steps.continuous_learning.title'));
  const step3description = computed(() => t('pages.landing.mentor_support.steps.continuous_learning.description'));
  </script>
  