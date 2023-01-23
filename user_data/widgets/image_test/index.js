module.exports = {
	name: "image_test",
	description: "Displays an image test",
	category: "Basic",
	h1_icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		h1_style: {
			horizontal_position: "left",
			vertical_position: "bottom",
			width: "50"
		},
	},
	entry_props: [
		{
			name: "name",
			description: "Name",
			type: "String"
		},
		{
			name: "job_title",
			description: "Job title",
			type: "String"
		},
		{
			name: "company",
			description: "Company",
			type: "String"
		},
	],
	vue_template: renderPug(getFile("template.pug").toString()),
	vue_component: getFile("component.js").toString(),
	css: renderStylus(getFile("style.styl").toString())
}
