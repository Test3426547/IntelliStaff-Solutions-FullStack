<template>
  <div class="quick-search">
    <h2 class="text-2xl font-bold mb-4">Quick Search</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ShimmerButton v-for="category in categories" :key="category" variant="outline" class="w-full">
        {{ category }}
      </ShimmerButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ShimmerButton } from '~/components/ui/inspiria'

const categories = ref([
  'Software Development',
  'Data Science',
  'Product Management',
  'UX/UI Design',
  'Marketing',
  'Sales',
])

onMounted(() => {
  gsap.from('.quick-search > *', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>