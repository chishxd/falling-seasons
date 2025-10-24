<script>
	import { createEventDispatcher, onMount } from 'svelte';

	let currentSlideIndex = 0;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}

	function prevSlide() {
		if (currentSlideIndex !== 0) {
			currentSlideIndex--;
		}
		return;
	}

	function nextSlide() {
		if (currentSlideIndex < festival.story.length - 1) {
			currentSlideIndex++;
		}
		return;
	}

	export let festival;
</script>
