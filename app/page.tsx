import { Metadata } from "next";
import { Card } from "@/components";
import { Like } from "@/components/Like/Like";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Проект блога",
  description: "это учебный проект блога Next.js",
};

export default function Home() {
  const cards = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <>
      <div className={styles.wrapper}>
        {cards.map((cardId) => (
          <Card key={cardId} />
        ))}
      </div>
      <Like id={1} />
    </>
  );
}
