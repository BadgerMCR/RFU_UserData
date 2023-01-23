module.exports = {
	name: "Text Test",
	description: "Shows an image and text on-screen",
	category: "Basic",
	icon: "image",
	hasEntries: false,
	default: {
		props: {
			image: "holographics_logo.png"
		}
	},
	props: [
		{
			name: "image",
			description: "Show the selected image",
			type: "ImageFile"
		},
		
	],
	vue_template: '<div class="image"><img :src="imageUrl" /></div>',
	vue_component: getFile("component.js").toString(),
	css: renderStylus(`.image{
		img {
			width: 300px;
			height: 200px;
		}
	}`)
}
