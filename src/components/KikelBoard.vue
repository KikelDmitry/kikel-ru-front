<template>
  <div class="board">
    <div class="board__inner">
      <div class="board__about"></div>
      <div class="board__contacts"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.board {
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  &__about,
  &__contacts {
    height: 200px;
    background-color: #444;
  }
}
</style>
