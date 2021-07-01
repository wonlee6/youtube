import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCnl-WV_Uf54AlLXIRTa1AibphFX09RfVE&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCnl-WV_Uf54AlLXIRTa1AibphFX09RfVE",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
};

export default App;
