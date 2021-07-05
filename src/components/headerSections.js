import stylesHome from '../../styles/Home.module.css'
import { Typography, Divider, Container } from '@material-ui/core';

const HeaderSections = (props) => {
    return (
        <>
            <Container maxWidth={'lg'} className={stylesHome.headerSpacePage}>
                <Typography variant="h1" component="h1" align='center'>Trending</Typography>
                <p className={stylesHome.subTitle}>See what the Github community is most excited about today.</p>
            </Container>
            <Divider className={stylesHome.addSpace} />
            {props.children}
        </>
    )
}

export default HeaderSections