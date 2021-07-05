import React from 'react'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import stylesHome from '../../styles/Home.module.css';
import SmallChip from './tools/smallChip';
import { Typography, Avatar } from '@material-ui/core';
import { StarBorder, DeviceHub } from '@material-ui/icons';

const CardListRepo = (props) => {
    const { data } = props;
    return (
        <div className={stylesHome.cardListCont}>
            <SmallChip textShow={"Star"} type={0} />
            <Typography variant="h2" component="h2" className={stylesHome.titleCardList}><CollectionsBookmarkIcon />{data.username} / {data.repositoryName}</Typography>
            <p className={stylesHome.subtitleCardList}>{data.description}</p>
            <div className={stylesHome.lastRowCardListCont}>
                <span>{data.language}</span>
                <span><StarBorder /> {data.totalStars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                <span><DeviceHub /> {data.forks}</span>
                <span className={stylesHome.avatarName}>{"Built by: " }{
                    data.builtBy.map((resRow, index) => {
                        return (
                            <Avatar alt={resRow.username} src={resRow.avatar} key={index} />
                        )
                    })
                }</span>
                <span><StarBorder /> {data.starsSince} stars today</span>
            </div>
        </div>
    )
}

export default CardListRepo