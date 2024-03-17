import React, { useState } from 'react';
import Comment from './Comment';
import SortingFilter from './SortingFilter'
export default function CommentsSection({comments}){

    const [isHideComments, setIsHideComments] = useState(false);
    const [search, setSearch] = useState("");
    const [commentsList, setCommentsList] = useState(comments);
    // const [sortedComments, setSortedComments] = useState(commentsList);

    function handleClick(){
        setIsHideComments(!isHideComments)
    }

    function onSortingMethodSelect(event){
        const method = event.target.value;

        if(method === "default") {
            const sortedById = commentsList.sort((a, b) => {
                return a.id - b.id;
            }); 
            setCommentsList([...sortedById])
        } else if(method === "puplar"){
            const sortedByUpvotes = commentsList.sort((a, b) => {
                return a.downvotes - b.upvotes;
            }); 
            setCommentsList([...sortedByUpvotes])
        }
    }

    const commentsNumber = commentsList.length;
    const commentToDisplay = commentsList.filter(comment => {
        if(search=== "") return true;
        return comment.user.toLowerCase().startsWith(search.toLowerCase()) 
    });

    function commentSection(){
        return(
        <>
            <label> 
                Search by Username:
                <br/>
                <input type='text' value={search} onChange={handleInputChange}/>
            </label> 
            <SortingFilter handleSelect={onSortingMethodSelect}/>
            {commentToDisplay.map(comment => <Comment key={comment.id} comment={comment} handleDelete={() => onCommentDelete(comment.id)}/>)}
        </>
        )
    };

    function handleInputChange(event){
        setSearch(event.target.value) 
    }
    function onCommentDelete(id){
        setCommentsList(commentsList.filter((comment) => comment.id !== id))
    }
    return(
        <div className="comments-section">
            <button onClick={handleClick}>{isHideComments? "Show comments": "Hide comments"}</button>
            <hr/>
            <h2>{commentsNumber} Comments</h2>
            
            {isHideComments? "": commentSection()}
            <br/>
        </div>
    )
}
