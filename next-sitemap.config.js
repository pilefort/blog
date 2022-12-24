/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // cf. https://github.com/iamvishnusankar/next-sitemap#configuration-options
  siteUrl: 'https://pilefort.dev',
  generateRobotsTxt: true,
  sitemapSize: 10000,
  generateIndexSitemap: false,
  outDir: './public',
  exclude: [],
}
