import React from 'react';
import CommentImage from '../Comment Image/CommentImage';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

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



const Comments = (props) => {
    const classes = useStyles();
    const { name, email, body } = props.com
    const sinImage = props.singleImg
    return (
        <div>



            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        {
                            sinImage.map(im => <CommentImage key={im.cell} im={im}></CommentImage>)
                        }
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary">
                                </Typography>
                                {body}
                            </React.Fragment>
                        }
                    />
                    <ListItemText
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    size="small"
                                    className={classes.inline}
                                    color="textPrimary">
                                    {email}
                                </Typography>

                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />

            </List>
        </div>
    );
};

export default Comments;