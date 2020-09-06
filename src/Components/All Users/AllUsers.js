import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';
import './AllUsers.css';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        margin: theme.spacing(1),
    },
}));



const AllUsers = (props) => {

    const classes = useStyles();

    const { title, body, id } = props.user

    const [postImage, setPostImage] = useState({})


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //** Dynamic User Post ID */ 
    let history = useHistory();
    const viewSingleUserHandler = (uID) => {
        history.push(`/user/${uID}`);
    }

    //** Post Image API */ 
    useEffect(() => {
        const url = `http://www.splashbase.co/api/v1/images/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPostImage(data))
    }, [])

    return (
        <div className="main-box">
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                    </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={postImage.url}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <Button
                    onClick={() => viewSingleUserHandler(id)}
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<PersonIcon />}>
                    Details of User ID {id}
                </Button>
            </Card>
        </div>
    );
};

export default AllUsers;
