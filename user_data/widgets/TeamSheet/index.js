module.exports = {
	name: "TeamSheet",
	description: "Displays a TeamSheet",
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
			name: "fwd1",
			description: "Forwards 1",
			type: "String"
		},
		{
			name: "fwd2",
			description: "Forwards 2",
			type: "String"
		},
		{
			name: "fwd3",
			description: "Forwards 3",
			type: "String"
		},
		{
			name: "fwd4",
			description: "Forwards 4",
			type: "String"
		},
		{
			name: "fwd5",
			description: "Forwards 5",
			type: "String"
		},
		{
			name: "fwd6",
			description: "Forwards 6",
			type: "String"
		},
		{
			name: "fwd7",
			description: "Forwards 7",
			type: "String"
		},
		{
			name: "fwd8",
			description: "Forwards 8",
			type: "String"
		},
		{
			name: "backs1",
			description: "Backs 9",
			type: "String"
		},
		{
			name: "backs2",
			description: "Backs 10",
			type: "String"
		},
		{
			name: "backs3",
			description: "Backs 11",
			type: "String"
		},
		{
			name: "backs4",
			description: "Backs 12",
			type: "String"
		},
		{
			name: "backs5",
			description: "Backs 13",
			type: "String"
		},
		{
			name: "backs6",
			description: "Backs 14",
			type: "String"
		},
		{
			name: "backs7",
			description: "Backs 15",
			type: "String"
		},
		{
			name: "backs8",
			description: "DOR",
			type: "String"
			
		},
		


	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}

