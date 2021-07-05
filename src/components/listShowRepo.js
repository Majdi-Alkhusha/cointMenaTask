import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardListRepo from './cardListRepo'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.list,
    },
}));

const ListShowRepo = (props) => {
    const classes = useStyles();
    const { data } = props;
    return (
        <List component="nav" className={classes.root}>
            {data.map((row, index) => {
                return (
                    <div key={index}>
                        <ListItem button>
                            <CardListRepo data={row} />
                        </ListItem>
                        <Divider />
                    </div>
                )
            })}
        </List>
    );
}

export default ListShowRepo