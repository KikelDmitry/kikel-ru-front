<template>
	<figure class="figure">
		<img :src="link" alt="" />
		<figcaption></figcaption>
	</figure>
</template>

<script setup>
import { computed } from 'vue';

// const link = computed(() => `https://drive.google.com/uc?export=view&id=${id}`)
const props = defineProps({
	id: {
		type: String,
	},
	meta: {
		type: Object,
	},
});
const link = `https://drive.google.com/uc?export=download&id=${props.id}`;
</script>
