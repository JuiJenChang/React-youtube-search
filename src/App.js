import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar";
import VideoList from "./component/VideoList";

const API = "https://www.googleapis.com/youtube/v3/search";

function App() {
  const [videos, setVideos] = useState([]);
  const [term, setTerm] = useState('TheChainsmokers');

  useEffect(() => {
    fetchVideo();
  },[]);

  const handleChange = e => {
    setTerm(e.target.value);
  };

  const fetchVideo = () => {
    let url =
      API +
      "?id=7lCDEYXw3mM" +
      "&key=AIzaSyD-Ga75C6gAexsEBSUDgy6f7au3jpE3VFg" +
      "&part=snippet" +
      "&type=video" +
      `&q=${term}` +
      "&maxResults: 5" +
      "&videoCaption=closedCaption";
    fetch(url)
      .then(response => {
        response.json().then(data => {
          for (let i = 0; i < data.items.length; i++) {
            let videoData = {
              title: data.items[i].snippet.title,
              desc: data.items[i].snippet.description,
              imgUrl: data.items[i].snippet.thumbnails.default.url
            };
            console.log(data);
            setVideos([videoData]);
          }
        });
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <SearchBar fetchVideo={fetchVideo} term={term} handleChange={handleChange} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
