import React from 'react'
import stylesHome from '../../styles/Home.module.css'
import { Button, ButtonGroup, InputLabel, NativeSelect } from '@material-ui/core';

const HeaderBox = (props) => {
    const { pageShow } = props
    return (
        <div className={stylesHome.contHeaderBox}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button href="/" variant={pageShow == 0 ? "contained" : "outlined"} color="primary">Repositories</Button>
                <Button href="/developer" variant={pageShow == 1 ? "contained" : "outlined"} color="primary">Developer</Button>
            </ButtonGroup>
            <div>
                <div className={stylesHome.contSelectionSection}>
                    {pageShow == 0 ?
                        <div>
                            <span className={stylesHome.selectTitle}> Spoken Language: </span>
                            <NativeSelect id="select">
                                <option value={undefined}>Any</option>
                                <option value="10">Arabic</option>
                                <option value="20">English</option>
                            </NativeSelect>
                        </div> : null}
                    <div>
                        <span className={stylesHome.selectTitle}> Language: </span>
                        <NativeSelect id="select">
                            <option value={undefined}>Any</option>
                            <option value="10">Arabic</option>
                            <option value="20">English</option>
                        </NativeSelect>
                    </div>
                    <div>
                        <span className={stylesHome.selectTitle}> Date range: </span>
                        <NativeSelect id="select">
                            <option value={undefined}>Today</option>
                            <option value="10">After week</option>
                            <option value="20">After month</option>
                        </NativeSelect>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderBox