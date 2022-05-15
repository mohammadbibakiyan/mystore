import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='fa'>
        <Head>
          <title>فروشگاه اینترنتی دیجی من</title>
          <meta name='description' description="فروش لوازم و محصولات دیجیتال "/>
          <meta name="viewport" content="initial-scale=1.0 width=device-width" />
          <link rel="shortcut icon" href="/icons/favicon.svg" />
        </Head>
        <body>
          <Main/>
          <NextScript />
          <div id='overlays'/>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
