<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import gsap from 'gsap';

	const dispatch = createEventDispatcher();

	let overlay;
	let video1;
	let video2;
	let video3;

	let line1, line2, line3, line4, line5, line6, line7, line8, line9;

	function finishIntro() {
		if (gsap.getProperty(overlay, 'opacity') === 0) return;

		gsap.to(overlay, {
			opacity: 0,
			duration: 0.8,
			onComplete: () => {
				dispatch('finish');
			}
		});
	}

	// The MAIN Animation black
	onMount(() => {
		// gsap.set([line1, line2, line3, line4, line5, line6, line7, line8, line9], { opacity: 0 });

		const tl = gsap.timeline({ onComplete: finishIntro });

		// The First scene of Autumn
		tl.to(video1, { opacity: 1, duration: 2 });
		tl.from(line1, { opacity: 0, y: 20 }, '+=0.5');
		tl.from(line2, { opacity: 0, y: 20 }, '+=1.5');
		tl.to([line1, line2], { opacity: 0, duration: 1 }, '+=2.5');

		// Second Scene of Monsoon
		tl.to(video1, { opacity: 0, duration: 2 });
		tl.to(video2, { opacity: 1, duration: 2.5 }, '<');
		tl.from(line3, { opacity: 0, y: 20 }, '-=0.5');
		tl.from(line4, { opacity: 0, y: 20 }, '+=1.5');
		tl.to([line3, line4], { opacity: 0, duration: 1 }, '+=2.5');

		// Third Scene of Celebration
		tl.to(video2, { opacity: 0, duration: 2 });
		tl.to(video3, { opacity: 1, duration: 2.5 }, '<');
		tl.from(line5, { opacity: 0, y: 20 }, '-=0.5');
		tl.from(line6, { opacity: 0, y: 20 }, '+=2');
		tl.to([line5, line6], { opacity: 0, duration: 1 }, '+=3');

		tl.to(video3, { opacity: 0, duration: 2.5 });

		// Climax Scene
		tl.from(line7, { opacity: 0, y: 20 }, '+=0.5');
		tl.from(line8, { opacity: 0, y: 20 }, '+=1');
		tl.to([line7, line8], { opacity: 0, duration: 1 }, '+=3.5');

		// The Final Title
		tl.from(line9, { opacity: 0, scale: 0.8, duration: 2, ease: 'power2.out' });

		tl.to({}, { duration: 4 });
	});
</script>

<div bind:this={overlay} class="fixed inset-0 z-50 bg-black font-inter text-white">
	<video
		bind:this={video1}
		class="absolute h-full w-full object-cover opacity-0"
		src="/videos/autumn.mp4"
		autoplay
		muted
		loop
		playsinline
		><track kind="captions" />
	</video>
	<video
		bind:this={video2}
		class="absolute h-full w-full object-cover opacity-0"
		src="/videos/monsoon.mp4"
		autoplay
		muted
		loop
		playsinline
		><track kind="captions" />
	</video>
	<video
		bind:this={video3}
		class="absolute h-full w-full object-cover opacity-0"
		src="/videos/celebration.mp4"
		autoplay
		muted
		loop
		playsinline
		><track kind="captions" />
	</video>

	<!-- dark overlay for video -->
	<div class="absolute inset-0 bg-black/60"></div>

	<!-- Container for text (I swear I wrote this myself) -->
	<div class="text-container relative z-10 flex h-full w-full items-center justify-center p-8">
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

	<button
		on:click={finishIntro}
		class="absolute right-8 bottom-8 z-20 rounded-lg bg-white/10 px-4 py-2 text-sm tracking-widest uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
	>
		Skip Intro
	</button>
</div>

<style>
	.text-container {
		position: relative;
	}

	.line {
		display: block;
		position: absolute;
		width: 100%;
		left: 0;
	}
	video {
		object-fit: cover;
	}
</style>
