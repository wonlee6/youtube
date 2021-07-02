import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const Video_list = ({ videos, onVideoClick, display }) => (
  <ul className={styles.video}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);

export default Video_list;
