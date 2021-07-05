import React from 'react'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import stylesHome from '../../styles/Home.module.css';
import SmallChip from './tools/smallChip';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { Whatshot, DeviceHub } from '@material-ui/icons';

const CardListRepo = (props) => {
    const { data } = props;
    return (
        <div className={stylesHome.cardListContDev}>
            <span className={stylesHome.spanCardDev}>{data.rank}</span>
            <div className={stylesHome.avatarShowDev}>
                <Avatar alt={data.username} src={data.avatar} />
            </div>
            <Grid container spacing={3} className={stylesHome.colSectionShow}>
                <Grid item xs={12} md={4}>
                    <h1 className={stylesHome.nameDevCardList}>{data.name}</h1>
                    <p className={stylesHome.underNameDevCardList}>{data.username}</p>
                </Grid>
                <Grid item xs={12} md={4} className={stylesHome.thirdSectionCard}>
                    <p><Whatshot className={stylesHome.fireIconShow} />{"POPULAR REPO"}</p>
                    <p><DeviceHub /> {data.popularRepository.repositoryName}</p>
                    <p>{data.popularRepository.description}</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SmallChip textShow={"Follow"} type={5} />
                </Grid>
            </Grid>
        </div>
    )
}

export default CardListRepo