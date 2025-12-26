<template>
  <div class="container">
    <gallery-list :pictures="pictures"></gallery-list>
  </div>
  <gallery-viewer></gallery-viewer>
</template>

<script setup>
import GalleryViewer from '@/components/gallery/GalleryViewer.vue';
import GalleryList from '@/components/gallery/GalleryList.vue';
import { useGallery } from '@/stores/gallery';
import { storeToRefs } from 'pinia';
const store = useGallery();
store.getPictures();

const { pictures, loading, isError } = storeToRefs(store);
</script>

<style lang="scss" scoped>
// temp block
.container {
  margin: auto;
  max-width: 88%;
}
</style>
