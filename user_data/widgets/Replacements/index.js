module.exports = {
	name: "Replacements",
	description: "Displays the replacements",
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
			name: "rep1a",
			description: "replacement 16 saracens",
			type: "String"
		},
		{
			name: "rep2a",
			description: "replacement 17 saracens",
			type: "String"
		},
		{
			name: "rep3a",
			description: "replacement 18 saracens",
			type: "String"
		},
		{
			name: "rep4a",
			description: "replacement 19 saracens",
			type: "String"
		},
		{
			name: "rep5a",
			description: "replacement 20 saracens",
			type: "String"
		},
		{
			name: "rep6a",
			description: "replacement 21 saracens",
			type: "String"
		},
		{
			name: "rep7a",
			description: "replacement 22 saracens",
			type: "String"
		},
		{
			name: "rep8a",
			description: "replacement 23 saracens",
			type: "String"
		},
		{
			name: "rep1b",
			description: "replacement 16 gloucester",
			type: "String"
		},
		{
			name: "rep2b",
			description: "replacement 17 gloucester",
			type: "String"
		},
		{
			name: "rep3b",
			description: "replacement 18 gloucester",
			type: "String"
		},
		{
			name: "rep4b",
			description: "replacement 19 gloucester",
			type: "String"
		},
		{
			name: "rep5b",
			description: "replacement 20 gloucester",
			type: "String"
		},
		{
			name: "rep6b",
			description: "replacement 21 gloucester",
			type: "String"
		},
		{
			name: "rep7b",
			description: "replacement 22 gloucester",
			type: "String"
		},
		{
			name: "rep8b",
			description: "replacement 23 gloucester",
			type: "String"
			
		},
		


	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}

