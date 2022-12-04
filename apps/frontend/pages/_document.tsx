import {createStylesServer, ServerStyles} from '@mantine/next';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from "react";


// optional: you can provide your cache as a fist argument in createStylesServer function
const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        React.Children.toArray([initialProps.styles]),
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    };
  }


  render() {
    return (
      <Html>
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
