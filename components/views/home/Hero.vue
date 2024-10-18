<template>
  <div class="hero-section">
    <h1 class="text-4xl font-bold mb-4">Welcome to IntelliStaff Solutions</h1>
    <p class="text-xl mb-8">AI-Powered Recruiting Platform</p>
    <div class="search-bar">
      <input type="text" placeholder="Search for jobs..." class="w-full mb-4 p-2 border rounded" />
      <ShimmerButton>Search</ShimmerButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ShimmerButton } from '~/components/ui/inspiria'

onMounted(() => {
  gsap.from('.hero-section > *', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>