import React, {useState} from 'react';

export default function Comment( { comment, handleDelete } ){
    const [votes, setvotes] = useState({
        upvotes: comment.upvotes,
        downvotes: comment.downvotes
    });

    function handlevote(event){
        const vote = event.target.name;
        setvotes({
            ...votes, 
            [vote] : votes[vote] +1
        })
    }
    return(
        <div className='comment'>
            <div>
                <h3>{ comment.user }</h3>
                <p>{ comment.comment }</p>
            </div>
            <div>
                <button name="upvotes" onClick={handlevote}>{votes.upvotes} 👍</button>
                <button name="downvotes" onClick={handlevote}>{votes.downvotes} 👎</button>
            </div>
            <button className="delete-button" type="reset" onClick={handleDelete}>X</button>
        </div>
    )
}