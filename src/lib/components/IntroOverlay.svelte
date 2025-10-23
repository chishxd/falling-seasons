<div bind:this={overlay} class="fixed inset-0 z-50 bg-black font-inter text-white">
	<video
		bind:this={video1}
		class="absolute h-full w-full object-cover opacity-0"
		src="/videos/autumn.mp4"
		><track kind="captions" autoplay muted loop playsinline />
	</video>
	<video
		bind:this={video2}
		class="absolute h-full w-full object-cover opacity-0"
		src="/videos/monsoon.mp4"
		><track kind="captions" autoplay muted loop playsinline />
	</video>
	<video
		bind:this={video3}
		class="absolute h-full w-full object-cover opacity-0"
		src="/videos/celebration.mp4"
		><track kind="captions" autoplay muted loop playsinline />
	</video>

	<!-- dark overlay for video -->
	<div class="absolute inset-0 bg-black/60"></div>

    <!-- Container for text (I swear I wrote this myself) -->
	<div class="relative z-10 flex h-full w-full items-center justify-center p-8">
		<div class="max-w-4xl text-center text-3xl leading-tight font-bold md:text-5xl">
			<span bind:this={line1} class="line">Around the world, fall is a season of endings.</span>
			<span bind:this={line2} class="line">Of dried autumn leaves and pumpkin carvings.</span>
			<span bind:this={line3} class="line">But where I come from...</span>
			<span bind:this={line4} class="line">...it's nothing like that.</span>
			<span bind:this={line5} class="line"
				>We celebrate fall as a season of harvest, of culture, and of gathering.</span
			>
			<span bind:this={line6} class="line">A celebration of joy, of victory, and of hope.</span>
			<span bind:this={line7} class="line">It is a promise...</span>
			<span bind:this={line8} class="line"
				>...that even after a million struggles, light will always find a way.</span
			>
			<span bind:this={line9} class="line text-amber-300">Welcome to Fall in India.</span>
		</div>
	</div>
</div>
