<template>
    <section class="join-us py-42">
      <h2 class="section-title text-3xl font-semibold text-center mb-6">{{ ctaTitle }}</h2>
      <p class="join-us-text text-center mb-6">{{ ctaDescription }}</p>
      <a href="/path/to/google-form" class="cta block mx-auto text-center px-6 py-4 text-white font-semibold bg-blue-600 rounded hover:bg-blue-500">{{ ctaText }}</a>
    </section>
  </template>
  
  <script lang="ts" setup>
    const { t } = useLang();
    const ctaTitle = computed(() => t('pages.landing.call_to_action.title'));
    const ctaDescription = computed(() => t('pages.landing.call_to_action.description'));
    const ctaText = computed(() => t('pages.landing.call_to_action.cta_text'));
  </script>