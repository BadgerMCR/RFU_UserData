module.exports = {
	name: "stats",
	description: "Displays the stats",
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
			name: "possession_a",
			description: "posessions for team a",
			type: "String"
		},
		{
			name: "possession_b",
			description: "posessions for team b",
			type: "String"
		},
		{
			name: "carries_a",
			description: "carries for team a ",
			type: "String"
		},
		{
			name: "carries_b",
			description: "carries for team b",
			type: "String"
		},
		{
			name: "tackles_a",
			description: "tackles for team a",
			type: "String"
		},
		{
			name: "tackles_b",
			description: "tackles for team b",
			type: "String"
		},

		{
			name: "metres_a",
			description: "metres for team a",
			type: "String"
		},
		{
			name: "metres_b",
			description: "metres for team b",
			type: "String"
		},
		{
			name: "penalties_a",
			description: "penalties for team a",
			type: "String"
		},
		{
			name: "penalties_b",
			description: "penalties for team b",
			type: "String"
		},
		{
			name: "territory_a",
			description: "territory for team a",
			type: "String"
		},
		{
			name: "territory_b",
			description: "territory for team b",
			type: "String"
		},
		


	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}

