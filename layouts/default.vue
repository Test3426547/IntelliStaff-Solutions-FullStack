<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/shared/Header.vue'
import Footer from '~/components/shared/Footer.vue'
</script>