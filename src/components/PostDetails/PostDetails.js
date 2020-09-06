import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';
import Comments from '../Comments/Comments';

const PostDetails = () => {

    const { postId } = useParams();

    const [postObject, setPostObject] = useState({});

    const { id, title, body } = postObject;

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

        fetch(url)

            .then(res => res.json())

            .then(data => setPostObject(data))

    }, [postObject])

    return (

        <div>

            {<h3 style={{ textAlign: 'center', backgroundColor: 'orange', color: 'white' }}>post section</h3>}

            <div className="details">

                <h4>Post Id : {id}</h4>

                <h2>Post Title : {title}</h2>

                <p style={{ color: 'gray' }}>Post Description : {body}</p>

            </div>
            <div>

                <h3 style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}>comments section</h3>

                <Comments postId={postId} ></Comments>

            </div>

        </div>
    );
};

export default PostDetails;