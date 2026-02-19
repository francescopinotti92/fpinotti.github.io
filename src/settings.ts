export const profile = {
	fullName: 'Francesco Pinotti',
	title: 'Postdoctoral researcher',
	institute: 'INRAE, VetAgro Sup, UMR EPIA, Université de Lyon, Marcy l’Etoile, France',
	author_name: 'Francesco Pinotti', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Infectious disease modelling', description: 'Mathematical modelling of infectious disease transmission in human and animal populations.', field: 'computer-science' },
		{ title: 'Avian influenza virus', description: 'Characterising the transmission dynamics of avian influenza virus in poultry production and distribution networks.', field: 'biology' },
		{ title: 'Phylodynamics', description: 'Understanding pathogen transmission from genetic data.', field: 'computer-science' },
		{ title: 'Simulation-based inference', description: 'Leveraging classical and deep-learning-powered methods to perform inference with complex models.', field: 'computer-science' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
	x: 'https://www.x.com/@fpinotti92',
	bluesky: '',
	github: 'https://github.com/francescopinotti92',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=k6BhD0QAAAAJ&hl=it',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
