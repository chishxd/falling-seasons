<script>
	import { timeline } from '$lib/data';
	import FestivalSection from '$lib/components/FestivalSection.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount, tick } from 'svelte';
	import Observer from 'gsap/Observer';

	let sections = [];
	let outerWrappers = [];
	let innerWrappers = [];

	onMount(() => {
		let currentIndex = -1;
		let animating = false;

		// Initialize wrap safely, now that we're in the browser
		const wrap = gsap.utils.wrap(0, timeline.length);

		// Define the core function here, where 'wrap' is guaranteed to exist
		function gotoSection(index, direction) {
			if (animating || index === currentIndex) return;

			index = wrap(index); // This will now work perfectly
			animating = true;

			let fromTop = direction === -1;
			let dFactor = fromTop ? -1 : 1;

			let tl = gsap.timeline({
				defaults: { duration: 1.25, ease: 'power1.inOut' },
				onComplete: () => (animating = false)
			});

			if (currentIndex >= 0) {
				gsap.set(sections[currentIndex].getNode(), { zIndex: 0 });
				const currentSectionNode = sections[currentIndex].getNode();

				tl.to(
					currentSectionNode.querySelector('.section-heading'),
					{
						y: -80 * dFactor, // Move UP if scrolling down, DOWN if scrolling up
						opacity: 0,
						duration: 0.6,
						ease: 'power2.in'
					},
					0
				);

				tl.to(
					currentSectionNode.querySelector('.section-description'),
					{
						y: -50 * dFactor,
						opacity: 0,
						duration: 0.5,
						ease: 'power2.in'
					},
					0.1
				);

				tl.to(
					[outerWrappers[currentIndex], innerWrappers[currentIndex]],
					{
						yPercent: (i) => (i ? 100 * dFactor : -100 * dFactor)
					},
					0
				);
			}

			const newSectionNode = sections[index].getNode();
			gsap.set(newSectionNode, { autoAlpha: 1, zIndex: 1 });

			tl.fromTo(
				[outerWrappers[index], innerWrappers[index]],
				{ yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
				{ yPercent: 0 },
				0
			);

			gsap.set(
				[
					newSectionNode.querySelector('.section-heading'),
					newSectionNode.querySelector('.section-description')
				],
				{ opacity: 1, y: 0 }
			);

			tl.from(
				newSectionNode.querySelector('.section-heading'),
				{
					y: 80 * dFactor,
					opacity: 0,
					duration: 1.2,
					ease: 'power3.out'
				},
				0.3
			);

			tl.from(
				newSectionNode.querySelector('.section-description'),
				{
					y: 50 * dFactor,
					opacity: 0,
					duration: 0.8,
					ease: 'power3.out'
				},
				0.5
			);

			currentIndex = index;
		}

		gsap.registerPlugin(Observer);

		gsap.set(outerWrappers, { yPercent: 100 });
		gsap.set(innerWrappers, { yPercent: -100 });

		let observer = Observer.create({
			type: 'wheel, touch, pointer',
			wheelSpeed: -1,
			onDown: () => gotoSection(currentIndex - 1, -1),
			onUp: () => gotoSection(currentIndex + 1, 1),
			tolerance: 10
		});

		gotoSection(0, 1);

		return () => {
			if (observer) observer.kill();
		};
	});
</script>

<main class="page-container snap-none bg-green-200">
	{#each timeline as event, i (event.id)}
		<FestivalSection
			{event}
			bind:this={sections[i]}
			bind:outerWrapper={outerWrappers[i]}
			bind:innerWrapper={innerWrappers[i]}
		/>
	{/each}
</main>
