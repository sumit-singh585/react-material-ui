import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
   
    root: {
        minWidth: 275,
        marginBottom:"30px",
        border:"1px solid orange",
        paddingLeft:"10px",
    },
   
    title: {
        fontSize: 14,
    },
   
    pos: {
        marginBottom: 12,
    },
});

const Post = ({ post }) => {
    
    const {id, title } = post;
   
    const classes = useStyles();
   
    return (
        
        <Card className={classes.root}>
           
                <CardContent>
           
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
           
                        Post Id:{id}
            
                    </Typography>
            
                    <Typography className={classes.pos} color="textSecondary">
           
                        Post Title: {title}
             
                 </Typography>
            
                </CardContent>

                <CardActions>
              
                <Link to={`/post/${id}`} style={{textDecoration:'none'}}>
              
               <Button variant="contained" color="primary">
              
                    Show Details
              
                </Button>
              
                </Link>
             
                </CardActions>
           
            </Card>
           
    );
};

export default Post;