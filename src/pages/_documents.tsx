import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
} from 'next/document';
import Head from 'next/head';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
          </style>
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}
