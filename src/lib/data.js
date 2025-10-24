/** @file This file contains the data for each festival and all other important stuff */

/**
 * @typedef {Object} StorySlide
 * @property {string} title - Name of the Slide
 * @property {string} content - Content of each slide
 * @property {string} [image] - Background image for each slide
 */

/**
 * @typedef {Object} Festival
 * @property {number} id - Unique identifier for the festival
 * @property {string} season - Name or phase of the season
 * @property {string} description - Description of the festival or season
 * @property {string} icon - Icon name for the festival
 * @property {string} image - Path to the festival image
 * @property {StorySlide[]=} [story] - Content of story for festivals
 */

/**
 * The array to hold all Festival objects
 *
 * @type {Festival[]}
 */
export const timeline = [
	{
		id: 1,
		season: 'End of Monsoon',
		description: 'The heavy rains subside, leaving the air fresh and the world a deep, lush green.',
		icon: 'rain-cloud',
		image: '/images/monsoon.jpg'
	},
	{
		id: 2,
		season: 'Ganeshotsav',
		description:
			'A vibrant celebration of new beginnings, marked by clay idols and the warm glow of lamps.',
		icon: 'ganesha',
		image: '/images/ganesh_chaturthi.jpg',
		story: [
			{
				title: 'Story',
				content: 'This festival is one of the Biggest Events in all of the India..'
			}
		]
	},
	{
		id: 3,
		season: 'Navratri',
		description:
			'Nine nights of rhythmic dance and music, as communities come together under colorful lights.',
		icon: 'dandiya-sticks',
		image: '/images/navaratri.jpg',
		story: [
			{
				title: 'The Nine Nights',
				content:
					'Navratri is a vibrant nine-night festival dedicated to the nine divine forms of the goddess Durga.',
				image: '/images/story-navratri-1.jpg'
			},
			{
				title: 'The Dance of Garba',
				content:
					'The heart of the celebration is Garba, a circular community dance performed with dandiya sticks, symbolizing the cyclical nature of time.',
				image: '/images/story-navratri-2.jpg'
			}
		]
	},
	{
		id: 4,
		season: 'Diwali',
		description:
			'The festival of lights illuminates the darkest nights with fireworks, diyas, and flowers.',
		icon: 'diya-lamp',
		image: '/images/diwali.jpg'
	},
	{
		id: 5,
		season: 'Start of Winter',
		description:
			'A gentle coolness arrives. The season shifts to a calm, cozy warmth with a golden hue.',
		icon: 'leaf',
		image: '/images/winter.jpg'
	}
];
