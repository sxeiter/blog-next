"use client";
import { useState } from "react";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";

export const Like = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className={styles.likeContainer}>
      <p className={styles.likeCount}>{likes}</p>
      <button className={styles.like} onClick={handleLikeClick}>
        <LikeIcon className={styles.likeIcon} />
      </button>
    </div>
  );
};
