module.exports = {
	name: "footballtest",
	description: "Displays a test for football",
	category: "Rugby",
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
			name: "name",
			description: "Name",
			type: "String"
		},
		{
			name: "position",
			description: "Position/Title",
			type: "String"
		}
	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}
