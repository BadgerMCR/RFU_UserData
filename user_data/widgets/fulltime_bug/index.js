module.exports = {
	name: "fulltime bug",
	description: "displays fulltime bug",
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
			name: "score1",
			description: "score 1",
			type: "String"
		},
		{
			name: "score2",
			description: "score 2",
			type: "String"
		},


	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}

