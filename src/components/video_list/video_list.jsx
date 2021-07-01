import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const Video_list = (props) => {
  return (
    <ul className={styles.video}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default Video_list;
