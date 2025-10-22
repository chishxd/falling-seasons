<script>
	/**
	 * @type {import{'../data'}.Festival}
	 */
	export let event;

	export let outerWrapper;
	export let innerWrapper;

	let sectionNode; // This will bind to the <section>
	export function getNode() {
		return sectionNode;
	}
</script>

<section
	bind:this={sectionNode}
	class="flex min-h-dvh w-full flex-col items-center justify-center border-b-2 border-white/10 font-inter"
>
	<div bind:this={outerWrapper} class="outer">
		<div bind:this={innerWrapper} class="inner">
			<div
				class="bg"
				style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.1)),
			    url({event.image});"
			>
				<div class="mx-auto max-w-2xl text-center text-white">
					<h2 class="section-heading mb-4 text-4xl font-bold md:text-6xl">{event.season}</h2>
					<p class="section-description text-lg md:text-xl">{event.description}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100%;
		width: 100%;
		top: 0;
		position: fixed;
		visibility: hidden;
	}

	.outer,
	.inner {
		width: 100%;
		height: 100%;
		overflow-y: hidden;
	}

	.bg {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		background-size: cover;
		background-position: center;
	}
</style>
