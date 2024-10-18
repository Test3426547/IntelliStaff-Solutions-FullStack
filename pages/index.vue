<template>
  <div>
    <Hero />
    <FeaturedEmployers />
    <QuickSearch />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/views/home/Hero.vue'
import FeaturedEmployers from '~/components/views/home/FeaturedEmployers.vue'
import QuickSearch from '~/components/views/home/QuickSearch.vue'

// Add SEO meta tags
useHead({
  title: 'IntelliStaff Solutions - AI-Powered Recruiting Platform',
  meta: [
    { name: 'description', content: 'IntelliStaff Solutions is an advanced AI-powered recruiting platform, connecting top talent with leading employers.' }
  ]
})
</script>