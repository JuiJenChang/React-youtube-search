import React from "react";

function VideoItem({ video }) {
  return (
    <div>
      <img src={video.imgUrl}/>
      <div>
        <div>{video.title}</div>
        <div>{video.desc}</div>
      </div>
    </div>
  );
}

export default VideoItem;