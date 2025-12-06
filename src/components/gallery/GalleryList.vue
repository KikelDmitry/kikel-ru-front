<template>
	gallery
	<ul class="gallery">
		<li v-for="picture in pictures" class="gallery__item">
			<pre>{{ picture }}</pre>
			<gallery-picture :id="picture.id"></gallery-picture>
		</li>
	</ul>
</template>

<script setup>
import GalleryPicture from './GalleryPicture.vue';
const props = defineProps({
	pictures: {
		type: Array,
		required: true,
	}
})
</script>
