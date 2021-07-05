import Head from 'next/head'
import { Container } from '@material-ui/core';
import HeaderSections from '../src/components/headerSections';
import HeaderBox from '../src/components/headerBox';
import ListShowDev from '../src/components/listShowDev';
import stylesHome from '../styles/Home.module.css'


const Developer = (props) => {
    const { deve } = props;
    return (
        <>
            <Head>
                <title>Developer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderSections>
                <Container maxWidth={'md'}  className={stylesHome.fullContForBorder}>
                    <HeaderBox pageShow={1} />
                    <ListShowDev data={deve} />
                </Container>
            </HeaderSections>
        </>
    )
}

Developer.getInitialProps = async (ctx) => {
    const res = await fetch('https://gh-trending-api.herokuapp.com/developers')
    const json = await res.json()
    return { deve: json }
  }

export default Developer