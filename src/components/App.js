import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import CommentsSection from "./CommentsSection.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      {/* //////// video component with title and like section ////////
       video, title, views & date, like & dislike buttons */}
      <VideoDetails details={video}/>
      <br/>
      
      {/* //////// commentsSection component contains comment component ////////
       hide & show comments button, pr, no. of comments, comments (user name and text) */}
      <CommentsSection comments={video.comments}/>
    </div>
   
  );
}

export default App;
