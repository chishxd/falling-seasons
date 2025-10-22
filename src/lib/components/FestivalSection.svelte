<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	let sectionElement; //Binds with scroll animations

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const anim = gsap.from(sectionElement, {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: sectionElement,
				start: 'top 80%',
				// markers: true, // Enable for Debugging process

				toggleActions: 'play none reverse noner'
			}
		});

		return () => {
			anim.kill();
		};
	});

	/**
	 * @type {import{'../data'}.Festival}
	 */
	export let event;
</script>

<section
	bind:this={sectionElement}
	class="flex min-h-dvh w-full flex-col items-center justify-center border-b-2 border-white/10 p-8 font-inter"
>
	<div class="mx-auto max-w-2xl text-center">
		<div class="mb-4 text-4xl">🌧️</div>
		<h2 class="mb-4 text-4xl font-bold md:text-6xl">{event.season}</h2>
		<p class="text-lg md:text-xl">{event.description}</p>
	</div>
</section>
