<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	/**
	 * @type {import('$lib/data').Festival}
	 */
	export let festival;

	let currentSlideIndex = 0;

	const dispatch = createEventDispatcher();

	/**
	 * Function to handle key events
	 * @param {KeyboardEvent} e - Event Handles
	 */
	function handleKeyDown(e) {
		if (e.key === 'ArrowLeft') {
			prevSlide();
		}
		if (e.key === 'ArrowRight') {
			nextSlide();
		}
		if (e.key === 'Escape') {
			closeModal();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeyDown);
	});

	function closeModal() {
		dispatch('close');
	}

	function prevSlide() {
		if (currentSlideIndex !== 0) {
			currentSlideIndex--;
		}
	}

	function nextSlide() {
		if (currentSlideIndex < festival.story.length - 1) {
			currentSlideIndex++;
		}
	}
</script>
