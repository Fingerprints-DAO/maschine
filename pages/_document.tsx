import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-QCETYL8QK7`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-QCETYL8QK7', {
          page_path: window.location.pathname,
        });
      `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
