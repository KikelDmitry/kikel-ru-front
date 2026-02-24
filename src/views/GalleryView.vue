<template>
  <div class="container">
    <gallery-list :pictures="pictures.slice(10, 20)"></gallery-list>
  </div>
  <gallery-viewer></gallery-viewer>
</template>

<script setup>
import GalleryViewer from '@/components/gallery/GalleryViewer.vue';
import GalleryList from '@/components/gallery/GalleryList.vue';
import { useGallery } from '@/stores/gallery';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const store = useGallery();

const { pictures, isLoaded, isError } = storeToRefs(store);
onMounted(() => {
  store.getPictures();
});
</script>

<style lang="scss" scoped>
// temp block
.container {
  margin: auto;
  max-width: 99%;
}
</style>
