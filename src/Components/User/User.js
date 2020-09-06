import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReceiptIcon from '@material-ui/icons/Receipt';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 900,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));


const User = () => {
    const classes = useStyles();

    const { UserID } = useParams()

    const [singleUser, setSingleUser] = useState({})
    const [comments, setComments] = useState([])
    const [image, setImage] = useState([])

    const { title, body } = singleUser

    //** Single User API */ 
    useEffect(() => {
        const userUrl = `https://jsonplaceholder.typicode.com/posts/${UserID}`
        fetch(userUrl)
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [])

    //** Comments API */
    useEffect(() => {
        const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${UserID}`
        fetch(commentsUrl)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    //** Random User Profile Image API */
    useEffect(() => {
        const imageUrl = `https://randomuser.me/api/`
        fetch(imageUrl)
            .then(res => res.json())
            .then(data => setImage(data.results))
    }, [])

    //** visibility & Hidden Function */
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.section1}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6">
                                User ID {singleUser.id}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="textSecondary" variant="body2">
                        {body}
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
                    <Typography gutterBottom variant="body1">
                        <Button
                            onClick={toggleVisibility}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<ReceiptIcon />}>
                            Comments Details
                    </Button>
                        {visibility ? comments.map(com => <Comments key={com.id} com={com} singleImg={image} >  </Comments>) : []}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default User;