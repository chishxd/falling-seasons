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

	let currentIndex = -1;
	let animating = false;

	const wrap = gsap.utils.wrap(0, timeline.length);

	function gotoSection(index, direction) {
		if (animating) return;

		index = wrap(index);
		animating = true;

		let fromTop = direction === -1;
		let dFactor = fromTop ? -1 : 1;

		let tl = gsap.timeline({
			defaults: { duration: 1.25, ease: 'power1.inOut' },
			onComplete: () => (animating = false)
		});

		if (currentIndex >= 0) {
			gsap.set(sections[currentIndex].getNode(), { zIndex: 0 });
			tl.set(sections[currentIndex].getNode(), { autoAlpha: 0 });
		}

		const newSectionNode = sections[index].getNode();
		gsap.set(newSectionNode, { autoAlpha: 1, zIndex: 1 });

		tl.fromTo(
			[outerWrappers[index], innerWrappers[index]],
			{ yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
			{ yPercent: 0 },
			0
		);

		currentIndex = index;
	}

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);

		await tick();

		const numSections = timeline.length;
		const sections = gsap.utils.toArray('.snap-section');

		const snapping = ScrollTrigger.create({
			trigger: '.page-container',

			snap: sections
		});

		return () => {
			if (snapping) snapping.kill();
		};
	});
</script>

<main class="bg-green-200">
	{#each timeline as event (event.id)}
		<FestivalSection {event} />
	{/each}
</main>
