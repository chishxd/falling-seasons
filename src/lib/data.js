/** @file This file contains the data for each festival and all other important stuff */


/**
 * The array to hold all Festival objects
 *
 * @type {Array<{
 *   id: number,
 *   season: string,
 *   description: string,
 *   icon: string
 * }>}
 */
export const timeline = [
	{
		id: 1,
		season: 'End of Monsoon',
		description: 'The heavy rains subside, leaving the air fresh and the world a deep, lush green.',
		icon: 'rain-cloud'
	},
	{
		id: 2,
		season: 'Ganeshotsav',
		description:
			'A vibrant celebration of new beginnings, marked by clay idols and the warm glow of lamps.',
		icon: 'ganesha'
	},
	{
		id: 3,
		season: 'Navratri',
		description:
			'Nine nights of rhythmic dance and music, as communities come together under colorful lights.',
		icon: 'dandiya-sticks'
	},
	{
		id: 4,
		season: 'Diwali',
		description:
			'The festival of lights illuminates the darkest nights with fireworks, diyas, and flowers.',
		icon: 'diya-lamp'
	},
	{
		id: 5,
		season: 'Start of Winter',
		description:
			'A gentle coolness arrives. The season shifts to a calm, cozy warmth with a golden hue.',
		icon: 'leaf'
	}
];
