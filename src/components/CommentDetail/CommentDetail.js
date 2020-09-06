import React from 'react';
import img from '../image/user.png'

const CommentDetail = ({ comment }) => {

    const { id, name, email, body } = comment;

    return (

        <div className="row details" style={{ display: 'flex' }}>
           
            <div className="col-4">

                <img src={img} alt="" />
            
            </div>
            
            <div className="col-8">
                
                <h3>Commenter Id : {id}</h3>
               
                <h4>Commenter Name : {name}</h4>
              
                <p>Commenter Email : {email}</p>
               
                <p>Commenter Details : {body}</p>
           
            </div>
       
        </div>
    );
};

export default CommentDetail;