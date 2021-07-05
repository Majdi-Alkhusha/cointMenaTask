import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme'
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head key={0}>
        <title>coinMena</title>
        <link rel="shortcut icon" href="./logoIco.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps: pageProps };
}


export default MyApp;
