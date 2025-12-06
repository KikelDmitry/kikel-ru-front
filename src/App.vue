<template>
  <base-view></base-view>
</template>

<script setup>
import BaseView from './views/BaseView.vue';
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
