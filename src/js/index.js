import M2GisBlock from './m2gis-block.js';

const mapNode = document.querySelector('#map-block');

const map = new M2GisBlock(mapNode, {
	mapSrc: '',
	title: '',
	contacts: {
		addresses: [
			{
				address: 'Type here street adress 1',
				phone: '+0 000 000 00 00',
				phone: '+0 000 000 00 00',
			},
			{
				address: 'Type here street adress 2',
				phone: '+7 000 000 00 00',
			},
		],
		email: '',
		socialLinks: {
			whastapp: 'https://wa.me/71234567890',
			instagram: 'https://instagram.com/mansurmamirov',
			fb: 'https://facebook.com/mansurmamirov',
			vk: 'https://vk.com/mansurmamirov',
			ok: '',
			twitter: '',
			youtube: 'https://www.youtube.com/channel/UCBzbH4OkD9oZ5ZnTyYO8ySg',
			telegram: 'https://t.me/mansurmamirov',
			linkedin: '',
			pinterest: '',
			behace: '',
			vimeo: '',
			soundcloud: '',
		},
	},
	style: {
		textPosition: 'left', // left | right
		mobileTextPosition: 'top', // top | bottom
		textAlign: '',
		mobileTextAlign: '',
		blockHeight: '',
		mobileMapHeight: '',
		mobileTextHeight: '',
		socialLinksSize: '',
		socialLinksColor: '',
		theme: 'seagreen', // seagreen | othes coming soon ;)

	},
});
