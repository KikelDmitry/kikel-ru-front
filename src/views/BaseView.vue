<template>
  <kikel-header></kikel-header>
  <main-menu></main-menu>
  <main class="main">
    <router-view></router-view>
  </main>
  <kikel-footer></kikel-footer>
</template>

<script setup>
import KikelFooter from '@/components/layout/KikelFooter.vue';
import KikelHeader from '@/components/layout/KikelHeader.vue';
import MainMenu from '@/components/MainMenu.vue';
import { RouterView } from 'vue-router';
</script>
