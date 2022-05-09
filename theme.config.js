export default {
  github: 'https://github.com/simonedelpopolo/cli-blaze-doc-website',
  docsRepositoryBase: 'https://github.com/simonedelpopolo/cli-blaze-doc-website',
  titleSuffix: ' – simonedelpopolo',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">cli-blaze</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Blazing fast CLI design framework.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="cli-blaze npm package documentation website" />
      <meta name="og:description" content="cli-blaze" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1513835199435612165/4DrOwmDf_x96.jpg" />
      <meta name="twitter:site:domain" content="https://cliblaze.simonedelpopolo.com" />
      <meta name="twitter:url" content="https://cliblaze.simonedelpopolo.com" />
      <meta name="og:title" content="cli-blaze" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="cli-blaze" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>Apache-2.0 {new Date().getFullYear()} © simonedelpopolo.</>,
  unstable_faviconGlyph: '👋',
}
