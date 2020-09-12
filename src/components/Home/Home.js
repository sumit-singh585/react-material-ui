import React, { useState, useEffect } from 'react';
import Post from '../Posts/Post';
import Grid from '@material-ui/core/Grid';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/posts`;

        fetch(url)

            .then(res => res.json())

            .then(data => setPosts(data))

    }, [])

    return (

        <div>

            <h2 style={{ textAlign: 'center' }}>Post Length : {posts.length}</h2>

          
           <Grid container spacing={3}>
           {
                posts.map(post =>
                    <Grid item xs={6} sm={4} md={4}>
                    <Post post={post}></Post>
                    </Grid>
                )
            }
            </Grid>

    

        </div>
    )
};

export default Home;