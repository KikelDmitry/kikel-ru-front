<template>
  gallery
  <ul class="gallery">
    <li
      v-for="(picture, idx) in pictures"
      class="gallery__item">
      <gallery-picture :picture="picture"></gallery-picture>
    </li>
  </ul>
</template>

<script setup>
import GalleryPicture from './GalleryPicture.vue';
const props = defineProps({
  pictures: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use '@styles/meta/mixins';

.gallery {
  // --gal-row: minmax(auto, 100vh);
  --gal-column: minmax(354px, 1fr);
  --gal-min: 354px;
  --gal-gap-col: 2vw;
  --gal-gap-col-row: calc(4.5vh + 0.3vw);

  display: grid;
  grid-template-columns: repeat(auto-fill, var(--gal-column));
  // grid-template-rows: repeat(auto-fit, var(--gal-row));
  gap: var(--gal-gap-col-row) var(--gal-gap-col);
  padding: var(--gal-gap-col);

  @include mixins.lessThan(768) {
    --gal-column: 354px;

    justify-content: center;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
