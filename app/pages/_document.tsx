import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="This is an awesome Next.js app" />
          <meta property="og:title" content="My Next.js App" />
          <meta property="og:description" content="This is an awesome Next.js app" />
          <meta property="og:image" content="https://example.com/image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="My Next.js App" />
          <meta name="twitter:description" content="This is an awesome Next.js app" />
          <meta name="twitter:image" content="https://example.com/image.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
