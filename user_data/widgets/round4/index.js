module.exports = {
	name: "round4",
	description: "Displays the round 4",
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
			name: "game1_home",
			description: "game 1 home team",
			type: "String"
		},
		{
			name: "game1_away",
			description: "game 1 away team",
			type: "String"
		},
		{
			name: "game2_home",
			description: "game 2 home team",
			type: "String"
		},
		{
			name: "game2_away",
			description: "game 2 away team",
			type: "String"
		},
		{
			name: "game3_home",
			description: "game 3 home team",
			type: "String"
		},
		{
			name: "game3_away",
			description: "game 3 away team",
			type: "String"
		},
		{
			name: "game4_home",
			description: "game 4 home team",
			type: "String"
		},
		{
			name: "game4_away",
			description: "game 4 away team",
			type: "String"
		},
		{
			name: "game5_home",
			description: "game 5 home team",
			type: "String"
		},
		{
			name: "game5_away",
			description: "game 5 away team",
			type: "String"
		},
		


	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}

