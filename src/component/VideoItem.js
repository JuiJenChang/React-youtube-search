import React from "react";
import './VideoItem.css';

function VideoItem({ video, videoSelect }) {
  return (
    <div onClick={() => videoSelect(video)} className="video-item">
      <div>
      <img src={video.snippet.thumbnails.medium.url} />
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
}

export default VideoItem;
