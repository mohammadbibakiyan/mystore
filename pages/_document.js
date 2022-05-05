import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='fa'>
        <Head />
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
