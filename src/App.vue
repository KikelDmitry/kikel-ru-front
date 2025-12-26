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

<style lang="scss">
@use '@styles/main';

#app {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}
</style>
