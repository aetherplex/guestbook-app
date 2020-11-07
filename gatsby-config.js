require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Gatsby Bulma Quickstart',
		author: 'Aman Mittal',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'A Project to bootstrap your next Gatsby + Bulma site.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		twitter: 'https://twitter.com/amanhimself',
		github: `https://github.com/amandeepmittal`,
		medium: 'https://medium.com/@amanhimself',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.example.com`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait',
			},
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-faunadb`,
			options: {
				// The secret for the key you're using to connect to your Fauna database.
				// You can generate on of these in the "Security" tab of your Fauna Console.
				secret: process.env.FAUNADB_SECRET,
				// The name of the index you want to query
				// You can create an index in the "Indexes" tab of your Fauna Console.
				index: `allSignatures`,
				// This is the name under which your data will appear in Gatsby GraphQL queries
				// The following will create queries called `allBird` and `bird`.
				type: 'Signatures',
				// If you need to limit the number of documents returned, you can specify a
				// Optional maximum number to read.
				// size: 100
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true,
			},
		},
		`gatsby-plugin-sitemap`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
};
