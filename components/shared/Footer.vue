<template>
  <footer class="bg-gray-100 dark:bg-neutral-900 p-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">IntelliStaff</h3>
          <p>AI-Powered Recruiting Platform</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><NuxtLink to="/jobs" class="hover:text-primary">Jobs</NuxtLink></li>
            <li><NuxtLink to="/employers" class="hover:text-primary">Employers</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-primary">About Us</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Resources</h4>
          <ul>
            <li><NuxtLink to="/blog" class="hover:text-primary">Blog</NuxtLink></li>
            <li><NuxtLink to="/faq" class="hover:text-primary">FAQ</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-primary">Contact Us</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p>&copy; 2023 IntelliStaff Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional imports needed for this component
</script>