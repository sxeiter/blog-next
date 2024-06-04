import { Metadata } from "next";
import { Card } from "@/components";
import { Like } from "@/components/Like/Like";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Проект блога",
  description: "это учебный проект блога Next.js",
};

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Like id={1} />
    </>
  );
}
