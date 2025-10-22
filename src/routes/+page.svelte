<script>
	import { timeline } from '$lib/data';
	import FestivalSection from '$lib/components/FestivalSection.svelte';
</script>

<main class="bg-green-200">
	{#each timeline as event (event.id)}
		<FestivalSection {event} />
	{/each}
</main>
