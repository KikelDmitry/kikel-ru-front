<template>
	<div>galleryView</div>
	<gallery-list :pictures="pictures"></gallery-list>
</template>

<script setup>
import GalleryList from '@/components/gallery/GalleryList.vue';
import { useGallery } from '@/stores/gallery';
import { storeToRefs } from 'pinia';
const store = useGallery();
store.getPictures();

const { pictures, loading, isError } = storeToRefs(store);
</script>
