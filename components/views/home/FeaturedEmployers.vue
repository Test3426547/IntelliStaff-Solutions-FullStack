<template>
  <div class="featured-employers">
    <h2 class="text-2xl font-bold mb-4">Featured Employers</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <CardSpotlight v-for="employer in featuredEmployers" :key="employer.id">
        <template #header>
          <h3 class="text-lg font-semibold">{{ employer.name }}</h3>
        </template>
        <template #content>
          <p>{{ employer.description }}</p>
        </template>
      </CardSpotlight>
    </div>
    <ShimmerButton class="mt-4">See more</ShimmerButton>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { CardSpotlight, ShimmerButton } from '~/components/ui/inspiria'

const featuredEmployers = ref([
  { id: 1, name: 'TechCorp', description: 'Leading technology solutions' },
  { id: 2, name: 'FinanceHub', description: 'Innovative financial services' },
  { id: 3, name: 'HealthCare Plus', description: 'Advanced healthcare solutions' },
  { id: 4, name: 'EcoSolutions', description: 'Sustainable environmental tech' },
  { id: 5, name: 'DataDynamics', description: 'Big data and analytics experts' },
])

onMounted(() => {
  gsap.from('.featured-employers > *', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>