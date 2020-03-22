import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import SearchBar from "./component/SearchBar";
import VideoDetail from "./component/VideoDetail";
import VideoList from "./component/VideoList";
import YTSearch from "youtube-api-search";

const API_KEY = "your api key";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoList = useSelector(state => state.videoList);
  const dispatch = useDispatch();

  useEffect(() => {
    termSubmit();
  }, []);

  const termSubmit = searchTerm => {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      dispatch({
        type: "SEARCH_VIDEO",
        payload: { data }
      });
      setSelectedVideo(data[0]);
    });
  };

  const videoSelect = video => {
    setSelectedVideo(video);
  };

  console.log(videoList);

  return (
    <div>
      <SearchBar termSubmit={termSubmit} />
      <div className="app-content">
        <VideoDetail selectedVideo={selectedVideo} />
        <VideoList videos={videoList} videoSelect={videoSelect} />
      </div>
    </div>
  );
}

export default App;
