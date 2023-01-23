module.exports = {
	name: "player announcement saracens",
	description: "Announces new player for saracens",
	category: "Basic",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "left",
			vertical_position: "bottom",
			width: "50"
		}
	},
	entry_props: [
		
		{
			name: "number",
			description: "Player number",
			type: "String"

		},
		{
			name: "name",
			description: "Player Name",
			type: "String"

		},
		{
			name: "dor",
			description: "dor",
			type: "String"

		},


	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}
