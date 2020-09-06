import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 900,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


const CommentImage = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src={props.im.picture.large} />
        </div>
    );
};

export default CommentImage;