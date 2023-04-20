<script lang="ts" setup>
// composable
const { t } = useLang()

const personalizedMentorshipTitle = computed(() => t('pages.landing.features.personalized_mentorship.title'))
const personalizedMentorshipDescription = computed(() => t('pages.landing.features.personalized_mentorship.description'))

const supportiveCommunityTitle = computed(() => t('pages.landing.features.supportive_community.title'))
const supportiveCommunityDescription = computed(() => t('pages.landing.features.supportive_community.description'))

const trackProgressTitle = computed(() => t('pages.landing.features.track_progress.title'))
const trackProgressDescription = computed(() => t('pages.landing.features.track_progress.description'))
</script>

<template>
  <section class="flex flex-col justify-center py-55">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <IconMdi:lightbulb-outline class="w-24 h-auto mx-auto mb-4" />
        <h3 class="text-xl font-semibold mb-2">{{ personalizedMentorshipTitle }}</h3>
        <p>{{ personalizedMentorshipDescription }}</p>
      </div>
      <div class="text-center">
        <IconMdi:group class="w-24 h-auto mx-auto mb-4" />
        <h3 class="text-xl font-semibold mb-2">{{ supportiveCommunityTitle }}</h3>
        <p>{{ supportiveCommunityDescription }}</p>
      </div>
      <div class="text-center">
        <IconMdi:timeline class="w-24 h-auto mx-auto mb-4" />
        <h3 class="text-xl font-semibold mb-2">{{ trackProgressTitle }}</h3>
        <p>{{ trackProgressDescription }}</p>
      </div>
    </div>
  </section>
</template>
