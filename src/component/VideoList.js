import React from "react";
import './VideoList.css';
import VideoItem from "./VideoItem";

function VideoList({ videos, videoSelect }) {
  const renderVideos = videos.map(video => (
    <VideoItem 
      key={video.etag} 
      video={video} 
      videoSelect={videoSelect}
    />
  ));
  return <ul className="video-list">{renderVideos}</ul>;
}

export default VideoList;
