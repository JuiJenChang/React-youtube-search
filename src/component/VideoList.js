import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  const renderVideos = videos.map((video, i) => (
    <VideoItem
      key={i}
      video={video}
    />
  ));
  return <div>{renderVideos}</div>;
}

export default VideoList;
