import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api } from './gapi';

export const useGallery = defineStore('gallery', () => {
	const pictures = ref([]);
	const loading = ref(false);
	const isError = ref(false);
	const getPictures = async () => {
		await fetch(api)
		// .then((res) => res.json())
		// .then((json) => (pictures.value = json))
		// .catch(() => isError.value = true)
		// .finally(() => (loading.value = false));
	};
	return {
		pictures,
		loading,
		isError,
		getPictures,
	};
});
