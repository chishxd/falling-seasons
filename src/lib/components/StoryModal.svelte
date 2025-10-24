<script>
	let currentSlideIndex = 0;

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
