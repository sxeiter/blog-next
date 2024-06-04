"use client";
import { useState, useEffect } from "react";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";

export const Like = ({ id }: { id: number }) => {
  const [likes, setLikes] = useState(false);
  const [buttonClass, setButtonClass] = useState(styles.like);

  const handleLikeClick = async () => {
    setLikes(!likes);
    const response: Response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Ошибочка");
    }
  };

  useEffect(() => {
    if (likes) {
      setButtonClass(`${styles.like} ${styles.active}`);
    } else {
      setButtonClass(styles.like);
    }
  }, [likes]);

  return (
    <button className={buttonClass} onClick={handleLikeClick}>
      <LikeIcon className={styles.likeIcon} />
    </button>
  );
};
