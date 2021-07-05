import React from 'react'
import stylesHome from '../../../styles/Home.module.css'
import { FavoriteBorderIcon, StarBorder } from '@material-ui/icons';

const SmallChip = (props) => {
    const { textShow, type } = props;
    return (
        <div className={stylesHome.smallChipShwo}>
            {type == 0 ? <StarBorder /> : type == 1 ? <FavoriteBorderIcon /> : null}
            <span>
                {textShow}
            </span>
        </div>
    )
}

export default SmallChip