<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import gsap from 'gsap';

	const dispatch = createEventDispatcher();

	let overlay;
	let video1;
	let video2;
	let video3;

	let isReadyToPlay = false;
	let line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12;

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

	function startAnimation() {
		const shortPause = 2; // for quick lines
		const longPause = 3; // for important lines
		const finalPause = 4; // for the very end

		const tl = gsap.timeline({ onComplete: finishIntro });

		// The First scene of Autumn
		tl.to(video1, { opacity: 1, duration: 2 });
		tl.from(line1, { y: 20, opacity: 0 }).to(line1, { opacity: 0 }, `+=${longPause}`);

		// Second Scene of Monsoon
		tl.to(video1, { opacity: 0, duration: 2 });
		tl.to(video2, { opacity: 1, duration: 2.5 }, '<');
		tl.from(line2, { y: 20, opacity: 0 }, '-=0.5').to(line2, { opacity: 0 }, `+=${shortPause}`);
		tl.from(line3, { y: 20, opacity: 0 }).to(line3, { opacity: 0 }, `+=${shortPause}`);
		tl.from(line4, { y: 20, opacity: 0 }).to(line4, { opacity: 0 }, `+=${longPause}`);

		// Third Scene of Celebration
		tl.to(video2, { opacity: 0, duration: 2 });
		tl.to(video3, { opacity: 1, duration: 2.5 }, '<');
		tl.from(line5, { y: 20, opacity: 0 }, '-=0.5').to(line5, { opacity: 0 }, `+=${shortPause}`);
		tl.from(line6, { y: 20, opacity: 0 }).to(line6, { opacity: 0 }, `+=${shortPause}`);
		tl.from(line7, { y: 20, opacity: 0 }).to(line7, { opacity: 0 }, `+=${longPause}`);

		// This one is for black screen to some better things
		tl.to(video3, { opacity: 0, duration: 2.5 });

		// Climax Scene
		tl.from(line8, { y: 20, opacity: 0 }).to(line8, { opacity: 0 }, `+=${longPause}`);
		tl.from(line9, { y: 20, opacity: 0 }).to(line9, { opacity: 0 }, `+=${longPause}`);
		tl.from(line10, { y: 20, opacity: 0 }).to(line10, { opacity: 0 }, `+=${longPause}`);

		tl.from(line11, { y: 20, opacity: 0 }).to(line11, { opacity: 0 }, `+=${longPause + 1}`);
		// The Final Title
		tl.from(line12, { scale: 0.8, opacity: 0, duration: 2, ease: 'power2.out' });
		tl.to({}, { duration: finalPause });
	}

	$: if (isReadyToPlay) {
		startAnimation();
	}

	// The MAIN Animation black
	onMount(() => {
		gsap.set(overlay, { visibility: 'visible' });

		if (video1 && video1.readyState >= 3) {
			console.log('Video was ready from cache. Starting animation.');
			isReadyToPlay = true;
		}
	});
</script>

<div bind:this={overlay} class="intro-overlay fixed inset-0 z-50 bg-black font-inter text-white">
	<video
		bind:this={video1}
		on:loadeddata={() => {
			console.log('Video loaded via event. Starting animation.');
			isReadyToPlay = true;
		}}
		class="absolute h-full w-full object-cover opacity-0"
		src="https://res.cloudinary.com/dk2kn3aeu/video/upload/v1761320746/autumn_n1seqy.mp4"
		autoplay
		muted
		loop
		playsinline
		><track kind="captions" />
	</video>
	<video
		bind:this={video2}
		class="absolute h-full w-full object-cover opacity-0"
		src="https://res.cloudinary.com/dk2kn3aeu/video/upload/v1761320760/monsoon_psreha.mp4"
		autoplay
		muted
		loop
		playsinline
		><track kind="captions" />
	</video>
	<video
		bind:this={video3}
		class="absolute h-full w-full object-cover opacity-0"
		src="https://res.cloudinary.com/dk2kn3aeu/video/upload/v1761320753/celebration_iy8np5.mp4"
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
			<span bind:this={line1} class="line">For many, fall is a season of endings.</span>
			<span bind:this={line2} class="line">But where I come from...</span>
			<span bind:this={line3} class="line">...it is a season of hope.</span>
			<span bind:this={line4} class="line">A celebration of joy, of victory, of culture.</span>
			<span bind:this={line5} class="line">It is a promise...</span>
			<span bind:this={line6} class="line">...that even if it takes a million struggles,</span>
			<span bind:this={line7} class="line">good will always triumph over evil.</span>

			<!-- The s"black screen" sequence -->
			<span bind:this={line8} class="line"
				>A promise that even in the darkest, loneliest corners,</span
			>
			<span bind:this={line9} class="line">light will always find a way.</span>
			<span bind:this={line10} class="line">And that in this shared light,</span>
			<span bind:this={line11} class="line">you are never alone.</span>

			<!-- The final title card -->
			<span bind:this={line12} class="line text-amber-300">Welcome to Fall in India.</span>
		</div>
	</div>

	<button
		on:click={finishIntro}
		class="absolute right-8 bottom-8 z-20 rounded-lg bg-white/10 px-4 py-2 text-sm tracking-widest uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
	>
		Skip Intro
	</button>
</div>

{#if !isReadyToPlay}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
		<p class="animate-pulse text-lg font-medium text-white/50">Preparing the story...</p>
	</div>
{/if}

<style>
	.intro-overlay {
		visibility: hidden;
	}

	.text-container {
		position: relative;
	}

	.line {
		display: block;
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);
	}
	video {
		object-fit: cover;
	}
</style>
