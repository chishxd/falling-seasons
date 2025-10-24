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

<!-- Main Wrapper -->
<div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-lg">
	<!-- Background Wrapper -->
	<div class="absolute inset-0">
		{#if festival.story[currentSlideIndex].image}
			<div
				class="absolute inset-0 h-full w-full bg-cover bg-center"
				style="background-image: url({festival.story[currentSlideIndex].image});"
			>
				<div class="absolute inset-0 bg-black/50"></div>
			</div>
		{/if}
	</div>
</div>
