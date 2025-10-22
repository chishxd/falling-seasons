<script>
	/**
	 * @type {import{'../data'}.Festival}
	 */
	export let event;
</script>

<section
	class="flex min-h-dvh w-full flex-col items-center justify-center border-b-2 border-white/10 p-8 font-inter"
>
	<div class="mx-auto max-w-2xl text-center">
		<div class="mb-4 text-4xl">🌧️</div>
		<h2 class="mb-4 text-4xl font-bold md:text-6xl">{event.season}</h2>
		<p class="text-lg md:text-xl">{event.description}</p>
	</div>
</section>
