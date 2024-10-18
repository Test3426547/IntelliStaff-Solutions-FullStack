<template>
  <header class="bg-white dark:bg-neutral-800 p-4">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">IntelliStaff</NuxtLink>
      <div class="flex space-x-4">
        <NuxtLink to="/jobs" class="hover:text-primary">Jobs</NuxtLink>
        <NuxtLink to="/employers" class="hover:text-primary">Employers</NuxtLink>
        <NuxtLink to="/about" class="hover:text-primary">About</NuxtLink>
        <ShimmerButton @click="toggleTheme">Toggle Theme</ShimmerButton>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'
import { ShimmerButton } from '~/components/ui/inspiria'

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>