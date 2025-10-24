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
				title: 'The Strength of Nine Nights',
				content:
					'For nine nights, we honor the nine forms of the Goddess Durga. She is the divine protector, the fierce mother, the warrior who battles the demons of our world and within ourselves. This is a celebration of the strength we all carry within us.',
				image: '/images/story-navratri-1.jpg'
			},
			{
				title: 'The Unbroken Circle',
				content:
					"The heart of Navratri is Garba. It is more than a dance; it's a prayer in motion. Hundreds of individuals, strangers and friends, move as one in a massive, swirling circle. It’s a powerful reminder that we are all part of something larger than ourselves.",
				image: '/images/story-navratri-2.jpg'
			}
		]
	},
	{
		id: 4,

		season: 'Dussehra',

		description:
			'A thunderous celebration of righteousness, culminating in the triumphant victory of light over shadow.',

		image: '/images/dussehra.jpg',

		story: [
			{
				title: 'An Epic, Retold',
				content:
					"We tell the story of Lord Rama's fourteen-year exile and his heroic battle against insurmountable odds. It's a story that teaches us about duty, honor, and the resilience of the human spirit in the face of struggle.",
				image: '/images/story-dussehra-1.jpg'
			},
			{
				title: 'The Fire of Liberation',
				content:
					'The festival climaxes with the burning of a giant effigy of the demon king Ravana. This is a collective, cathartic release. With a triumphant roar, we watch our struggles and negativities turn to ash, making way for a clean, victorious new beginning.',
				image: '/images/story-dussehra-2.jpg'
			}
		]
	},
	{
		id: 5,
		season: 'Diwali',
		description:
			'The festival of lights illuminates the darkest nights with fireworks, diyas, and flowers.',
		icon: 'diya-lamp',
		image: '/images/diwali.jpg',
		story: [
			{
				title: 'One Single Flame',
				content:
					"It all begins with one single flame. A 'diya', an earthen lamp, is a quiet prayer for hope. But when millions of these lights are lit together, they can illuminate an entire nation. They prove that even the smallest light can help banish the deepest darkness.",
				image: '/images/story-diwali-1.jpg'
			},
			{
				title: 'A Welcome in Color',
				content:
					"At our doorsteps, we create intricate 'Rangoli' with colored powder and flower petals. This is not just art; it is an open-hearted invitation. It is our way of opening our homes and our hearts, welcoming both the gods and our community to share in our joy.",
				image: '/images/story-diwali-2.jpg'
			},
			{
				title: 'The Light We Share',
				content:
					'Ultimately, Diwali is about coming home. It’s the sound of shared laughter, the taste of festive sweets, and the warmth of family and friends. It is the living, breathing proof that in our shared light, no one is ever truly alone.',
				image: '/images/story-diwali-3.jpg'
			}
		]
	},
	{
		id: 6,
		season: 'Start of Winter',
		description:
			'A gentle coolness arrives. The season shifts to a calm, cozy warmth with a golden hue.',
		icon: 'leaf',
		image: '/images/winter.jpg'
	}
];
