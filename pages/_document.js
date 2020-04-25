import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return {
            ...page,
            styleTags,
        }
    }
    render() {
        const {
            styleTags,
        } = this.props;
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <title>AVL</title>
                    {styleTags}
                </Head>
                <body style={{ margin: 0}}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}