import React, { useState } from 'react';

export default function VideoDetails( { details } ) {
    const [votes, setvotes] = useState({
            upvotes: details.upvotes,
            downvotes: details.downvotes
        });

        function handlevote(event){
            const vote = event.target.name;
            setvotes({
                ...votes, 
                [vote] : votes[vote] +1
            })
        }

    return(
        <div className="App">
        <iframe
          width="860"
          height="525"
          src={details.embedUrl}
        //   frameBorder="0"
          allowFullScreen
          title={details.title}
        />
        <h1>{details.title}</h1>
        <p>{details.views} Views | Uploaded {details.createdAt}</p>
        <button name="upvotes" onClick={handlevote}>{votes.upvotes} 👍</button>
        <button name="downvotes" onClick={handlevote}>{votes.downvotes} 👎</button>
      </div>
      );
}