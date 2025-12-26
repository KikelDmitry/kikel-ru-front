<template>
  gallery
  <ul class="gallery">
    <li
      v-for="(picture, idx) in pictures"
      class="gallery__item">
      <gallery-picture></gallery-picture>
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
  --gal-column: minmax(354px, 1fr);
  --gal-min: 354px;
  --gal-gap: 15px;

  display: grid;
  grid-template-columns: repeat(auto-fill, var(--gal-column));
  gap: var(--gal-gap);
  padding: var(--gal-gap);

  @include mixins.lessThan(768) {
    --gal-column: 354px;

    justify-content: center;
  }
  @include mixins.lessThan(420) {
    --gal-column: 1fr;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
