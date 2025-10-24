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

		<div
			class="relative z-10 flex h-full w-full flex-col items-center justify-center p-8 text-white"
		>
			<div class="w-full text-center">
				{#key currentSlideIndex}
					<h3>
						{festival.story[currentSlideIndex].title}
					</h3>
					<p>
						{festival.story[currentSlideIndex].content}
					</p>
				{/key}
			</div>

			<div class="absolute bottom-8 flex gap-6">
				<button disabled={currentSlideIndex === 0} on:click={prevSlide}>Previous</button>
				<button disabled={currentSlideIndex === festival.story.length - 1} on:click={nextSlide}
					>Next
				</button>
			</div>

			<!-- Progress Dots -->
			<div class="absolute bottom-24 flex gap-3">
				{#each festival.story as _, i}
					<div
						class="h-2 w-2 rounded-full {i === currentSlideIndex ? 'bg-white' : 'bg-white/40'}"
					></div>
				{/each}
			</div>
		</div>
	</div>
</div>
