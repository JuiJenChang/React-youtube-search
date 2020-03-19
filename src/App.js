import React, { useState, useEffect } from "react";
import "./App.css";
import YTSearch from "youtube-api-search";
import SearchBar from "./component/SearchBar";
import VideoDetail from "./component/VideoDetail";
import VideoList from "./component/VideoList";

const API_KEY = "your API key";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    termSubmit();
  }, []);

  const termSubmit = searchTerm => {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      console.log(data);
      setVideos(data);
      setSelectedVideo(data[0]);
    });
  };

  const videoSelect = video => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <SearchBar termSubmit={termSubmit} />
      <div className="app-content">
      <VideoDetail selectedVideo={selectedVideo} />
      <VideoList videos={videos} videoSelect={videoSelect} />
      </div>
    </div>
  );
}

export default App;
