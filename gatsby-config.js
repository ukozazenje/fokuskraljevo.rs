module.exports = {
	siteMetadata: {
		title: 'Očna bolnica Fokus Kraljevo',
		author: 'zeko04',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Pruža vrhunsku oftamološku uslugu, od strane ljudi iz struke, sa višedecenijskim iskustvom i željom da u svom poslu, u svom gradu, i u najboljem stručnom ambijentu podele svoje znanje i doprinesu ozdravljenju svojim pacijentima ',
		keywords: `Očna bolnica, Fokus kraljevo`,
		github: `https://github.com/ukozazenje`,
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.fokuskraljevo.rs`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Očna bolnica Fokus Kraljevo',
				short_name: 'Očna bolnica Fokus',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
