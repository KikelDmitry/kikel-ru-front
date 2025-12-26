<template>
  <article class="picture">
    <picture
      class="picture__pic"
      :class="{ 'is-loaded': isLoaded }">
      <source srcset="" />
      <img
        @load="isLoaded = true"
        loading="lazy"
        src="/mock-pic/slon_s.png"
        alt=""
        class="picture__img" />
    </picture>
    <gallery-meta class="picture__data"></gallery-meta>
  </article>
</template>

<script setup>
import GalleryMeta from './GalleryMeta.vue';
import { ref } from 'vue';
const isLoaded = ref(false);
</script>

<style lang="scss" scoped>
.picture {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &__pic {
    aspect-ratio: 1/1;
    display: flex;
    transform: scale(0.7);
    opacity: 0;
    transition:
      transform 500ms,
      opacity 500ms;

    &::before {
      content: '';
      z-index: 1;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: rgb(0 0 0 / 0.5);
    }

    &::after {
      content: '';
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 30px;
      height: 30px;
      background-color: #fff;
    }

    img {
      margin: auto;
    }

    &.is-loaded {
      opacity: 1;
      transform: scale(1);

      &::before,
      &::after {
        content: none;
      }
    }
  }
}
</style>
