<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex-1 flex flex-col">
    <div class="absolute top-0 left-0 translate-x-16 translate-y-1 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"></div>
    <div class="absolute hidden md:block top-0 left-0 translate-x-4 translate-y-5 h-28 w-28 rounded-full bg-blue-600 linear-wipe"></div>
    <div class="absolute hidden md:block bottom-0 right-0 -translate-x-1 -translate-y-10 h-16 w-16 rounded bg-purple-600 linear-wipe"></div>
    <div class="absolute bottom-0 right-0 triangle-shape"></div>

    <PageBody class="flex-1 flex flex-col">
      <PageSection class="flex-1 flex items-center justify-center" id="hero">
        <LandingHero />
      </PageSection>
      <PageSection id="features">
        <LandingFeatures />
      </PageSection>
      <PageSection id="mentorship-steps">
        <LandingHowItWorks />
        <LandingMenteeWorkflow />
        <LandingMentorSupport />
        <LandingCallToAction />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
