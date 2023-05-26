import Head from 'next/head'

export type MetaTagsProps = {
  title: string
  description: string
  navPage: string
  host: string
  image: string
}

export default function MetaTags({ title = '', description, host, image }: MetaTagsProps) {
  const pageTitle = title
  let thumbnail = (image != undefined && `${host}/${image}`) || `${host}/images/maschine-og-image.jpg`

  return (
    <Head>
      <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="NFT, fine art,
          collection, DAO, Fingerprints, Traces"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FingerprintsDAO" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnail}></meta>
    </Head>
  )
}
