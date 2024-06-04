"use client";
import { useState, useEffect } from "react";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";

export const Like = () => {
  const [likes, setLikes] = useState(false);
  const [buttonClass, setButtonClass] = useState(styles.like);

  useEffect(() => {
    if (likes) {
      setButtonClass(`${styles.like} ${styles.active}`);
    } else {
      setButtonClass(styles.like);
    }
  }, [likes]);

  const handleLikeClick = () => {
    setLikes(!likes);
  };

  return (
    <button className={buttonClass} onClick={handleLikeClick}>
      <LikeIcon className={styles.likeIcon} />
    </button>
  );
};
