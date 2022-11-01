/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://daihatsupromotangsel.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/'],
      },
      {
        userAgent: '*',
        disallow: [''],
      },
    ],
    additionalSitemaps: ['https://daihatsupromotangsel.com/sitemap-1.xml'],
  },
}
