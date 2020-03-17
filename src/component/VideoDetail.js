import React from "react";
import './VideoDetail.css';

function VideoDetail({ selectedVideo }) {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const videoId = selectedVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
        <iframe src={url}></iframe>
      <div>
        <h3>{selectedVideo.snippet.title}</h3>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
