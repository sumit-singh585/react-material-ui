import React, { useEffect, useState } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comments = ({ postId }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/comments?postId = ${postId}`

        fetch(url)

            .then(res => res.json())

            .then(data => setComments(data))

    }, [comments])

    return (

        <div>

            {

                comments.map(comment => <CommentDetail comment={comment}></CommentDetail>)

            }

        </div>

    );
};

export default Comments;