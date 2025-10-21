<script>
	import { timeline } from '$lib/data';
</script>

<main>
	{#each timeline as event (event.id)}
		<section class="flex min-h-screen flex-col items-center justify-center border-b-2 p-8">
			<div class="text-center">
				<div class="mb-4 text-4xl">🌧️</div>
				<h2 class="mb-2 text-4xl font-bold">{event.season}</h2>
				<p class="max-w-md text-lg text-gray-700">{event.description}</p>
			</div>
		</section>
	{/each}
</main>
